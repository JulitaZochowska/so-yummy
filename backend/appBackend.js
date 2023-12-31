const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users.router.js');
const ingredientsRouter = require('./routes/ingredients.routes.js');
const ownRecipesRouter = require('./routes/ownRecipes.routes.js');
const recipesRouter = require('./routes/recipes.routes.js');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/users', usersRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/ownRecipes', ownRecipesRouter);
app.use('/recipes', recipesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
