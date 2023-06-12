const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipesDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/api/recipes', (req, res) => {
   Recipe.find().then(result => res.json(result));
});

app.get('/api/recipes/:id', (req, res) => {
   Recipe.findById(req.params.id).then(result => res.json(result));
});

app.post('/api/recipes', (req, res) => {
   const newRecipe = new Recipe(req.body);
   newRecipe.save().then(result => res.json(result));
});

app.put('/api/recipes/:id', (req, res) => {
   Recipe.findByIdAndUpdate(req.params.id, req.body).then(result => res.json(result));
});

app.delete('/api/recipes/:id', (req, res) => {
   Recipe.findByIdAndRemove(req.params.id).then(result => res.json(result));
});

app.listen(3000, () => console.log('Server listening on port 3000'));
