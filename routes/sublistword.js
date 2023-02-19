const express = require("express");
const SublistWord = require("../models/sublistword");
const Word = require("../models/word");
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

//Get Words and Phrases

sublistWordRouter.post("/wap/:pageNumber", async (req, res) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber);
        await Word.find({}, (err, words) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(words);
            }
        }).sort({createdAt: -1}).skip(30 * (pageNumber - 1)).limit(30).clone();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = sublistWordRouter;