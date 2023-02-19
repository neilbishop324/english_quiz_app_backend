const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const authRouter = require("../routes/auth");
const sublistRouter = require("../routes/sublistword");
const wordRouter = require("../routes/word");
const userRouter = require("../routes/user");
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

const DB = process.env.DB;

app.use(express.json());

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection Successful");
    }).catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});

const api = "/.netlify/functions/api";

app.use(api, router);
app.use(`${api}/auth`, authRouter);
app.use(`${api}/sublist`, sublistRouter);
app.use(`${api}/word`, wordRouter);
app.use(`${api}/user`, userRouter);

module.exports.handler = serverless(app);