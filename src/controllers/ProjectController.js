const Project = require('../models/Project');

class ProjectController {
  
  index(req, res) {
      return res.json(Project);
  }

  store(req, res) {
    const { id, title } = req.body;

    const newProject = {
      id,
      title,
      tasks: []
    }
  
    Project.push(newProject);
  
    return res.json(Project);
  }

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
  
    const project = Project.find(project => project.id == id);

      project.id = id;
      project.title = title;  
  
    return res.json(Project);
  }

  delete(req, res) {
    const { id } = req.params;

    const projectIndex = Project.findIndex(project => project.id == id);
  
    Project.splice(projectIndex, 1);
  
    res.json({message: 'Project deleted successfuly'});
  }

  storeTask(req, res) {
    const { id } = req.params;
    const { title } = req.body;
  
    const projectIndex = Project.find(project => project.id == id);
  
    projectIndex.tasks.push(title);
  
    res.json(Project);
  }

}

module.exports = new ProjectController();