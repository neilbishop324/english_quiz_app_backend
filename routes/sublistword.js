const express = require("express");
const SublistWord = require("../models/sublistword");
const sublistWordRouter = express.Router();

//Get Sublist Words

sublistWordRouter.post("/:listId", async (req, res) => {
    try {
        const listId = parseInt(req.params.listId);
        await SublistWord.find({ "list": listId }, (err, words) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(words);
            }
        }).clone();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = sublistWordRouter;