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

module.exports = wordRouter;