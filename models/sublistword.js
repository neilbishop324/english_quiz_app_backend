const mongoose = require("mongoose");

const subwordSchema = mongoose.Schema({
    word: {
        required: true,
        type: String,
        trim: true,
    },
    list: {
        required: true,
        type: Number,
    }
});

const SublistWord = mongoose.model('Subword', subwordSchema);
module.exports = SublistWord;