import express, { Request, Response } from "express";
import { body } from "express-validator";

import { validateRequest } from "../../middlewares/validate-request";
import { Post } from "../../models/post";
import { BadRequestError } from "../../errors/bad-request-error";
import { currentUser } from "../../middlewares/current-user";

const router = express.Router();
var mongoose = require('mongoose');

router.put(
  "/api/post",
  [
    body("_id")
      .notEmpty()
      .withMessage('_id is required'),
    body("name")
      .notEmpty()
      .withMessage('Name is required'),
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
      _id,
      name,
      description,
      images,
      location,
      category,
      subcategories
    } = req.body;

    const mongooseId = mongoose.Types.ObjectId(_id);

    const post = await Post.findOneAndUpdate({_id: mongooseId}, {
      name: name,
      description: description,
      images: images,
      location: location,
      category: category,
      subcategories: subcategories
    })
    .then(() => res.status(201).send("Post successfully updated!"))
    .catch((err) => {
      console.log(err);
      throw new BadRequestError(`Error trying to create a new post. ${err}`);
    });  
  }
);

export { router as editRouter };
