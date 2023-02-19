const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/user");
const userRouter = express.Router();

//Control If Word is in favorites

userRouter.post("/isInFavorites/:word", auth, async (req, res) => {
    try {
        const word = req.params.word;
        const user = await User.findById(req.user);
        console.log(user.name);
        if (!user) return res.status(500).json({ error: "There is no user!" });
        console.log(user.favorites.includes(word));
        res.json({ isInFavorites: user.favorites.includes(word) });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

//Add to favorites
userRouter.post("/favorites", auth, async (req, res) => {
    try {
        const word = req.body.word;
        const user = await User.findOneAndUpdate(
            { _id: req.user },
            {
                [req.headers['add-word'] === 'true' ? '$push' : '$pull']: {
                    favorites: word,
                },
            },
            { new: true }
        );
        if (!user) {
            return res.status(500).json({ error: "There is no user!" });
        }

        res.json({ ...user._doc, token: req.token });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


module.exports = userRouter;