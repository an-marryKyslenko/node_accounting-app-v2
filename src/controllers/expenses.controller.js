const servise = require('./../servises/expenses.servise');
const usersServise = require('./../servises/users.servise');

const getAll = (req, res) => {
  const { userId, categories, from, to } = req.query;
  const expenses = servise.getAll(userId, categories, from, to);

  res.status(200).json(expenses);
};

const getById = (req, res) => {
  const { id } = req.params;
  const user = servise.getById(id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
};

const create = (req, res) => {
  const { userId } = req.body;

  if (!req.body) {
    return res.sendStatus(400);
  }

  const user = usersServise.getOne(userId);

  if (!user) {
    return res.sendStatus(400);
  }

  const newExpense = servise.create(req.body);

  res.status(201).json(newExpense);
};

const update = (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const expense = servise.getById(id);

  if (!expense) {
    return res.sendStatus(404);
  }

  const updatedExpense = servise.update(id, body);

  res.status(200).json(updatedExpense);
};

const deleteById = (req, res) => {
  const { id } = req.params;
  const expense = servise.getById(id);

  if (!expense) {
    res.sendStatus(404);

    return;
  }

  servise.deleteById(id);

  res.sendStatus(204);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
