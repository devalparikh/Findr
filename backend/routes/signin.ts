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
      .custom(async (value, { req }) => {
        const existingUser = await User.findOne({ 'username': value });
        if (!existingUser) {
          return Promise.reject("Username already exists")
        } else {
          req.body.existingUser = existingUser;
          return;
        }
      }),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password')
      .custom(async (value, { req }) => {
        console.log(req.body.existingUser.password)
        console.log(value)
        const passwordsMatch = await Password.compare(
          req.body.existingUser.password,
          value
        );
        if (!passwordsMatch) return Promise.reject("Invalid Credentials")
      }),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // const existingUser = await User.findOne({ username });
    // if (!existingUser) {
    //   throw new BadRequestError(`${username} does not exist`);
    // }

    // const passwordsMatch = await Password.compare(
    //   existingUser.password,
    //   password
    // );
    // if (!passwordsMatch) {
    //   throw new BadRequestError('Invalid Credentials');
    // }

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
