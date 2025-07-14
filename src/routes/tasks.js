const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/tasksController');

const tasksController = new TasksController(); 

router.post('/', tasksController.createTask.bind(tasksController));
router.get('/', tasksController.getAllTasks.bind(tasksController));
router.get('/:id', tasksController.getTaskById.bind(tasksController));
router.put('/:id', tasksController.updateTask.bind(tasksController));
router.delete('/:id', tasksController.deleteTask.bind(tasksController));

module.exports = router;
