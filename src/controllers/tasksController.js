const Task = require('../models/Task');

class TasksController {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    // createTask(req, res) {
    //     const { title, description } = req.body;
    //     const newTask = new Task(this.currentId++, title, description);
    //     this.tasks.push(newTask);
    //     res.status(201).json(newTask);
    // }
    createTask(req, res) {
    const { title, description } = req.body;


    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = new Task(this.currentId++, title, description);
    this.tasks.push(newTask);
    res.status(201).json(newTask);
}


    // getAllTasks(req, res) {
    //     res.status(200).json(this.tasks);
    // }

    getAllTasks(req, res) {
    const { completed } = req.query;

    if (completed !== undefined) {
        const filterStatus = completed === 'true';
        const filtered = this.tasks.filter(task => task.completed === filterStatus);
        return res.json(filtered);
    }

    res.json(this.tasks);
}


    getTaskById(req, res) {
        const taskId = parseInt(req.params.id, 10);
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }

    updateTask(req, res) {
        const taskId = parseInt(req.params.id, 10);
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            const { title, description, completed } = req.body;
            task.title = title ?? task.title;
            task.description = description ?? task.description;
            task.completed = completed ?? task.completed;
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }

    deleteTask(req, res) {
        const taskId = parseInt(req.params.id, 10);
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }
}

module.exports = TasksController; 
