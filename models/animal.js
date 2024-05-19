const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    origin: { type: String },
    description: { type: String },
    image: { type: String },
});

module.exports = mongoose.model('Animal', animalSchema);
