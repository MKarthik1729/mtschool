const express = require('express');
const cors = require('cors');
const db = require('./db')
const app = express();
const port = 4000;

app.use(cors());


app.use('/admin',require('./routes/adminRoutes'))
app.use('/student',require('./routes/studentRoutes'))
app.use('/teacher',require('./routes/teacherRoutes'))
// Define some routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
