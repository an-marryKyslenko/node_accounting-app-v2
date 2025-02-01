const usersServise = require('./../servises/users.servise');

const getAll = (req, res) => {
  const users = usersServise.getAll();

  res.status(200).send(users);
};

const getById = (req, res) => {
  const { id } = req.params;

  const user = usersServise.getOne(id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
};

const create = (req, res) => {
  const { name } = req.body;

  if (typeof name !== 'string' || name === '') {
    res.sendStatus(400);
  }

  const newUser = usersServise.create(name);

  res.status(201).json(newUser);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name: newName } = req.body;
  const user = usersServise.getOne(id);

  if (!user) {
    return res.sendStatus(404);
  }

  const updatedUser = usersServise.update(id, newName);

  res.status(200).json(updatedUser);
};

const deleteById = (req, res) => {
  const { id } = req.params;

  const user = usersServise.getOne(id);

  if (!user) {
    return res.sendStatus(404);
  }

  usersServise.deleteUser(id);

  res.sendStatus(204);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
