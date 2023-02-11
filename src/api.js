const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

const DB = "mongodb+srv://neilbishop:mXPX9ievLm1M5gfU@cluster0.fnqu6ac.mongodb.net/?retryWrites=true&w=majority";

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

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);