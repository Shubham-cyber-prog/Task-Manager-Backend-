# 📋 Task Manager API

A simple Node.js + Express.js RESTful API for managing tasks (Create, Read, Update, Delete). Includes optional frontend and authentication features.

---

## 🚀 Features

- ✅ Create, read, update, delete tasks
- 🕓 Each task has: `id`, `title`, `description`, `completed`, and `createdAt`
- 📁 Organized with MVC structure
- 🌐 RESTful API
- 🧠 Optional: login, signup, and frontend UI

---

## 📦 Project Structure

task-manager-app/
├── src/
│ ├── controllers/
│ │ ├── tasksController.js
│ │ └── usersController.js
│ ├── routes/
│ │ ├── tasks.js
│ │ └── users.js (optional)
│ ├── models/
│ │ └── Task.js
│ └── app.js
├── .env
├── package.json
└── notes.md

1.Clone the Repository 
git clone https://github.com/your-username/task-manager-app.git

2.View in postman 
http://localhost:3000/api/tasks

