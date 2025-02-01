'use strict';

const express = require('express');
const cors = require('cors');
const { usersRouter } = require('./routers/users.router');
const { router: expensesRouter } = require('./routers/expenses.router');
const usersServise = require('./servises/users.servise');
const expensesServise = require('./servises/expenses.servise');

function createServer() {
  const app = express();

  usersServise.clearAll();
  expensesServise.clearAll();

  app.use(cors());
  app.use(express.json());

  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
