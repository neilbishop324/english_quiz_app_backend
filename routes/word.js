const express = require("express");
const Word = require("../models/word");
const wordRouter = express.Router();

//Get Word Translation by Word

wordRouter.post("/:en", async (req, res) => {
    try {
        const en = req.params.en;
        await Word.find({ "en": en }, (err, words) => {
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

//Get Words

wordRouter.post("/wap/:pageNumber", async (req, res) => {
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

module.exports = wordRouter;