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

app.get('/fee', (req, res) => {
    res.send({
        "id" : "asdfjasfdas;l",
        "termid":"fajsfdasfjalsdf",
        "duedate":"24-04-2023",
        "class":3,
        "section": "A",
        "Year":2024,
        "nopaid":20,
        "nonotpaid":40,
        "cashpaid":3392023,
        "cashpending":321839223
      });
  });

  app.get('/term', (req, res) => {
    res.send([{
        "id":"ajflsdkfjalfasdfa",
        "year": 2024,
        "duedate": "24/04/2024",
        "Term": 1
      },
      {
        "id":"afdkl;asdflkajls",
        "year": 2024,
        "duedate": "24/08/2024",
        "Term": 2
      },
      {
        "id":"fasdfalskdfasfdsf",
        "year": 2024,
        "duedate": "24/10/2024",
        "Term": 3
      }
      ]);
  });



// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
