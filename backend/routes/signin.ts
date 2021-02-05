import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { Password } from '../services/password';
import { User } from '../models/user';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('username')
      .trim()
      .notEmpty()
      .withMessage('Username must be valid')
      .custom(async (username_value, { req }) => {
        const existingUser = await User.findOne({ 'username': username_value });
        if (!existingUser) {
          return Promise.reject(`Username "${username_value}" does not exist`)
        } else {
          req.body.existingUser = existingUser;
          return;
        }
      }),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password is required')
      .custom(async (password_value, { req }) => {
        if (req.body.existingUser) {
          const passwordsMatch = await Password.compare(
            req.body.existingUser.password, // Encrypted password from db
            password_value // Inputted password
          );
          if (!passwordsMatch) return Promise.reject("Invalid Password")
        }
      }),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = req.body.existingUser;

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        username: existingUser.username,
        email: existingUser.email
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
