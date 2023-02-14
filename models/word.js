const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
    en: {
        required: true,
        type: String,
        trim: true,
    },
    tr: {
        required: true,
        type: String,
        trim: true,
    },
    id: {
        required: true,
        type: String,
        trim: true,
    }
});

const Word = mongoose.model('Word', wordSchema);
module.exports = Word;