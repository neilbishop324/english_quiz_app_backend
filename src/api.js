const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

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

export const handler = serverless(app);