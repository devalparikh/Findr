import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { Post } from "../models/post";
import { BadRequestError } from "../errors/bad-request-error";
import { currentUser } from "../middlewares/current-user";

const router = express.Router();

router.post(
  "/api/posts",
  [
    body("name")
      .notEmpty()
      .withMessage('Name must be valid'),
    body("description")
      .notEmpty()
      .withMessage('Description is required'),
    body("images")
      .notEmpty()
      .withMessage('Images is required'),
    body("location")
      .notEmpty()
      .withMessage('Location is required'),
    body("category")
      .notEmpty()
      .withMessage('Category is required'),
    body("subcategories")
      .notEmpty()
      .withMessage('Subcategories is required')
  ],
  [validateRequest, currentUser],
  async (req: Request, res: Response) => {
    
    // Request object
    const {
      name,
      description,
      images,
      location,
      category,
      subcategories
    } = req.body;

    // Default values
    const views = 1;
    const likes = 0;
    const review = 0;
    const review_count = 0;

    // Get current users info
    const posterUsername = req.currentUser!.username;
    const posterId = req.currentUser!.id;

    // Mongodb object
    const post = Post.build({
      name,
      description,
      images,
      location,
      category,
      subcategories,
      views,
      likes,
      review,
      review_count,
      posterId,
      posterUsername
    });

    // Try saving new MongoDb object to the database collection
    await post
      .save()
      .then(() => res.status(201).send(post))
      .catch((err) => {
        console.log(err);
        throw new BadRequestError(err);
      });
  }
);

export { router as postRouter };
