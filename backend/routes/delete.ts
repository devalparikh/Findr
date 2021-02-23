import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { Post } from "../models/post";
import { BadRequestError } from "../errors/bad-request-error";
import { currentUser } from "../middlewares/current-user";

const router = express.Router();

router.delete(
  "/api/delete",
  [
    body("id")
      .notEmpty()
      .withMessage('Post ID must be valid or not empty'),
  ],
  [validateRequest, currentUser],
  async (req: Request, res: Response) => {
    // Request object
    const {
      id,
    } = req.body;

    // Mongodb object
    Post.findByIdAndDelete(id)
    .then(() => res.status(201))
    .catch((err) => {
      console.log(err);
      throw new BadRequestError(err);
    });
    res.status(201);  
  }
  
);

export { router as deleteRouter };
