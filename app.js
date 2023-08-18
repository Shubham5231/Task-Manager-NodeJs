const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

//app.get('/api/v1/tasks) - get all the tasks
//app.post('/api/v1/tasks) - create a new task
//app.get('/api/v1/task/:id) - get single task
//app.patch('/api/v1/task/:id) - update task
//app.delete('/api/v1/tasks/:id) - update task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on  port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
// 2mZSfIaZXz47m9vR - password

/**
 * Error Occur -
 * 
 * 
 *  [DEP0170] DeprecationWarning: The URL mongodb://mahamunishubham22:2mZSfIaZXz47m9vR@ac-0gmlat7-shard-00-00.tfanspa.mongodb.net:27017,ac-0gmlat7-shard-00-01.tfanspa.mongodb.net:27017,ac-0gmlat7-shard-00-02.tfanspa.mongodb.net:27017/?authSource=admin&replicaSet=atlas-mjrcmu-shard-0&retryWrites=true&w=majority&ssl=true is invalid. Future versions of Node.js will throw an error.
(Use `node --trace-deprecation ...` to show where the warning was created)
 */
