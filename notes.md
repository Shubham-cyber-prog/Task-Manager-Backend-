1.Create a Task 
http://localhost:3000/api/tasks
Method: POST
URL: http://localhost:3000/api/tasks
Body (JSON):

json
Copy
Edi
{
  "title": "Finish Assignment",
  "description": "Complete the Express.js CRUD project"
}

2.Get All Tasks
Method: GET
URL:http://localhost:3000/api/tasks

3.Get a Single Task by ID 
Method:GET
http://localhost:3000/api/tasks/<TASK_ID>
http://localhost:3000/api/tasks/1


4.Update a Task 
Method:PUT 
http://localhost:3000/api/tasks/<TASK_ID>
http://localhost:3000/api/tasks/1

{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}

5.Delete a Task
Method:DELETE 
http://localhost:3000/api/tasks/1


