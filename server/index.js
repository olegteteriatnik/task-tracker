const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const tasksRouter = require('./api/tasks.api');
app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
