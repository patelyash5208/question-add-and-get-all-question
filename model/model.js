const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    question : {
        type: String,
        required: true
    },
    options : [
        {
            text: {
                type: String,
                required: true
            },
            correct: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('Question' , dataschema);