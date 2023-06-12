const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
   name: String,
   ingredients: [String],
   instructions: String,
   time: Number,
   author: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
