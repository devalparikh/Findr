import express, { Request, Response } from "express";
import { body } from "express-validator";

import { validateRequest } from "../../middlewares/validate-request";
import { Post } from "../../models/post";
import { BadRequestError } from "../../errors/bad-request-error";
import { currentUser } from "../../middlewares/current-user";
import { NotFoundError } from "../../errors/not-found-error";
import { NotAuthorizedError } from "../../errors/not-authorized-error";

const router = express.Router();

router.delete(
  "/api/post",
  [
    body("id")
      .notEmpty()
      .withMessage('Post ID must be valid or not empty')
      .custom(async (id_value) => {
        // Check if inputted id is a valid id
        var ObjectId = require('mongoose').Types.ObjectId;
        return ObjectId.isValid(id_value) ? null : Promise.reject(`"${id_value}" is not a valid post id.`);
      }),
  ],
  [validateRequest, currentUser],
  async (req: Request, res: Response) => {
    // Request object
    const {
      id,
    } = req.body;

    // Mongodb post object
    const postToDelete = await Post.findById(id)

    if (!postToDelete) {
      // Post does not exist
      throw new NotFoundError();
    }

    if (postToDelete.posterId !== req.currentUser!.id) {
      // Not current users post, can NOT delete
      throw new NotAuthorizedError();
    }

    postToDelete.remove()
      .then(() => res.status(200).send(`${id} deleted.`))
      .catch((err) => {
        throw new BadRequestError(`Error trying to delete post. ${err}`);
      });

  }

);

export { router as deleteRouter };
