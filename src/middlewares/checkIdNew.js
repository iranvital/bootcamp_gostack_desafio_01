const Project = require('../models/Project');

module.exports = function checkIdNew(req, res, next) {

  const { id } = req.body;

  const project = Project.find(project => project.id == id);

  if (project) {
    return res.status(400).json({ error: `There is already the project with the id: ${id}` });
  }

  return next();
}