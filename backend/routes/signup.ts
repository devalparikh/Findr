import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Email must be valid")
      .custom(async (value) => {
        const existingEmail = await User.findOne({ 'email': value });
        if (existingEmail) return Promise.reject("Email in use");
      }),
    body("username")
      .notEmpty()
      .withMessage("User must be valid")
      .custom(async (value) => {
        const existingUser = await User.findOne({ 'username': value });
        if (existingUser) return Promise.reject("Username already exists");
      }),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    console.log(req.body);

    const user = User.build({ email, username, password });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
