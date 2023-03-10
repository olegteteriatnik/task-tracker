Task-tracker
Simple project

Installation and running:
1. Clone the repository
2. Install dependencies using the command npm install
3. edit .env file: provide local/remote Mongo credentials

Technologies used:
Node.js
Express
MongoDB
Mongoose

Data models:
1. Tasks
The task model contains the following fields:
title (string, required)
description (string)
dueDate (date)
priority (string, available values: low, medium, high, default: medium)
completed (boolean, default: false)
createdAt (date, default: current date)

API

Create a new task
POST /api/tasks

Example request body:

json
Copy code
{
"title": "Finish project",
"description": "Complete all the remaining tasks for the project",
"dueDate": "2023-03-31",
"priority": "high"
}
