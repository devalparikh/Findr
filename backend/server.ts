// @ts-nocheck
const http = require("http");
const express = require("express");
var cors = require('cors')
const path = require('path');
const mongoose = require('mongoose');

import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import 'express-async-errors';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

// Configure env vars in env file
require('dotenv').config();

// init app
const app = express();

app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV === 'production' ? true : false
    })
);

// app.set('trust proxy', true); // NGINX
app.use(json());


app.use(cors());
app.use(express.json({ limit: '10kb' })); // Parse JSON

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// Mongoose mongodb atlas connection
const uri = process.env.ATLAS_URI;
// Flags parses mongodb connection string
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB database connection established successfully")
})
// .catch(err => {
//     console.log("server not connecting")
// });


app.use(errorHandler);

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.use(express.static('../frontend/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
})

// Serve static assets in production (client)
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    })
}

// app.all('*', async (req, res) => {
//     throw new NotFoundError();
// });

server.listen(port, () => console.log(`server is running on port ${port}`));

