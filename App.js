const express = require('express');
const cors = require('cors');
const db = require('./db')
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/admin',require('./routes/adminRoutes'))
app.use('/student',require('./routes/studentRoutes'))
app.use('/teacher',require('./routes/teacherRoutes'))
// Define some routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/fee', (req, res) => {
    res.send([
        {
          "id": "random_id_10",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 3,
          "section": "A",
          "year": 2024,
          "nopaid": 20,
          "nonotpaid": 40,
          "cashpaid": 3392023,
          "cashpending": 321839223
        },
        {
          "id": "random_id_1",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 1,
          "section": "A",
          "year": 2024,
          "nopaid": 25,
          "nonotpaid": 35,
          "cashpaid": 3456789,
          "cashpending": 312345678
        },
        {
          "id": "random_id_2",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 2,
          "section": "A",
          "year": 2024,
          "nopaid": 30,
          "nonotpaid": 45,
          "cashpaid": 3567890,
          "cashpending": 323456789
        },
        {
          "id": "random_id_3",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 4,
          "section": "A",
          "year": 2024,
          "nopaid": 15,
          "nonotpaid": 25,
          "cashpaid": 3245678,
          "cashpending": 309876543
        },
        {
          "id": "random_id_4",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 5,
          "section": "A",
          "year": 2024,
          "nopaid": 22,
          "nonotpaid": 38,
          "cashpaid": 3345678,
          "cashpending": 319876543
        },
        {
          "id": "random_id_5",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 6,
          "section": "A",
          "year": 2024,
          "nopaid": 18,
          "nonotpaid": 28,
          "cashpaid": 3276543,
          "cashpending": 318765432
        },
        {
          "id": "random_id_6",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 7,
          "section": "A",
          "year": 2024,
          "nopaid": 28,
          "nonotpaid": 42,
          "cashpaid": 3487654,
          "cashpending": 327654321
        },
        {
          "id": "random_id_7",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 8,
          "section": "A",
          "year": 2024,
          "nopaid": 24,
          "nonotpaid": 36,
          "cashpaid": 3365432,
          "cashpending": 314765432
        },
        {
          "id": "random_id_8",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 9,
          "section": "A",
          "year": 2024,
          "nopaid": 32,
          "nonotpaid": 48,
          "cashpaid": 3587654,
          "cashpending": 331876543
        },
        {
          "id": "random_id_9",
          "termid": "ajflsdkfjalfasdfa",
          "duedate": "24-04-2023",
          "class": 10,
          "section": "A",
          "year": 2024,
          "nopaid": 27,
          "nonotpaid": 37,
          "cashpaid": 3435678,
          "cashpending": 322876543
        },
        {
            "id": "ajflsdkfjalfasdfa",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 1,
            "section": "A",
            "year": 2024,
            "nopaid": 22,
            "nonotpaid": 42,
            "cashpaid": 3392025,
            "cashpending": 321839225
          },
          {
            "id": "afdkl;asdflkajls",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 2,
            "section": "A",
            "year": 2024,
            "nopaid": 24,
            "nonotpaid": 44,
            "cashpaid": 3392027,
            "cashpending": 321839227
          },
          {
            "id": "fasdfalskdfasfdsf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 3,
            "section": "A",
            "year": 2024,
            "nopaid": 26,
            "nonotpaid": 46,
            "cashpaid": 3392029,
            "cashpending": 321839229
          },
          {
            "id": "fjalsdfasfjal;sf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 4,
            "section": "A",
            "year": 2024,
            "nopaid": 28,
            "nonotpaid": 48,
            "cashpaid": 3392031,
            "cashpending": 321839231
          },
          {
            "id": "fjasdfajsdfalskj",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 5,
            "section": "A",
            "year": 2024,
            "nopaid": 30,
            "nonotpaid": 50,
            "cashpaid": 3392033,
            "cashpending": 321839233
          },
          {
            "id": "asdfjalsdfjasldf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 6,
            "section": "A",
            "year": 2024,
            "nopaid": 32,
            "nonotpaid": 52,
            "cashpaid": 3392035,
            "cashpending": 321839235
          },
          {
            "id": "fjasd;fjasdfljasd",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 7,
            "section": "A",
            "year": 2024,
            "nopaid": 34,
            "nonotpaid": 54,
            "cashpaid": 3392037,
            "cashpending": 321839237
          },
          {
            "id": "fasdfjalsdfjalsdf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 8,
            "section": "A",
            "year": 2024,
            "nopaid": 36,
            "nonotpaid": 56,
            "cashpaid": 3392039,
            "cashpending": 321839239
          },
          {
            "id": "fasdfl;aksjdfasdf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 9,
            "section": "A",
            "year": 2024,
            "nopaid": 38,
            "nonotpaid": 58,
            "cashpaid": 3392041,
            "cashpending": 321839241
          },
          {
            "id": "asdfjalsdfjalsdkf",
            "termid": "afdkl;asdflkajls",
            "duedate": "24/04/2024",
            "class": 10,
            "section": "A",
            "year": 2024,
            "nopaid": 40,
            "nonotpaid": 60,
            "cashpaid": 3392043,
            "cashpending": 321839243
          },{
            "id": "ajflsdkfjalfasdfa",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-04-2024",
            "class": 1,
            "section": "A",
            "Year": 2024,
            "nopaid": 30,
            "nonotpaid": 50,
            "cashpaid": 3512392,
            "cashpending": 312839123
          },
          {
            "id": "afdkl;asdflkajls",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-05-2024",
            "class": 2,
            "section": "A",
            "Year": 2024,
            "nopaid": 25,
            "nonotpaid": 45,
            "cashpaid": 3278456,
            "cashpending": 315839200
          },
          {
            "id": "fasdfalskdfasfdsf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-06-2024",
            "class": 3,
            "section": "A",
            "Year": 2024,
            "nopaid": 22,
            "nonotpaid": 42,
            "cashpaid": 3392023,
            "cashpending": 321839223
          },
          {
            "id": "fjalsdfasfjal;sf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-07-2024",
            "class": 4,
            "section": "A",
            "Year": 2024,
            "nopaid": 28,
            "nonotpaid": 48,
            "cashpaid": 3739284,
            "cashpending": 319823400
          },
          {
            "id": "fjasdfajsdfalskj",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-08-2024",
            "class": 5,
            "section": "A",
            "Year": 2024,
            "nopaid": 33,
            "nonotpaid": 53,
            "cashpaid": 3894246,
            "cashpending": 311839122
          },
          {
            "id": "asdfjalsdfjasldf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-09-2024",
            "class": 6,
            "section": "A",
            "Year": 2024,
            "nopaid": 27,
            "nonotpaid": 47,
            "cashpaid": 3563829,
            "cashpending": 314839099
          },
          {
            "id": "fjasd;fjasdfljasd",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-10-2024",
            "class": 7,
            "section": "A",
            "Year": 2024,
            "nopaid": 31,
            "nonotpaid": 51,
            "cashpaid": 3678456,
            "cashpending": 313839200
          },
          {
            "id": "fasdfjalsdfjalsdf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-11-2024",
            "class": 8,
            "section": "A",
            "Year": 2024,
            "nopaid": 29,
            "nonotpaid": 49,
            "cashpaid": 3789246,
            "cashpending": 312839122
          },
          {
            "id": "fasdfl;aksjdfasdf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-12-2024",
            "class": 9,
            "section": "A",
            "Year": 2024,
            "nopaid": 26,
            "nonotpaid": 46,
            "cashpaid": 3653829,
            "cashpending": 315839099
          },
          {
            "id": "asdfjalsdfjalsdkf",
            "termid": "fasdfalskdfasfdsf",
            "duedate": "24-01-2025",
            "class": 10,
            "section": "A",
            "Year": 2024,
            "nopaid": 32,
            "nonotpaid": 52,
            "cashpaid": 3798456,
            "cashpending": 311839200
          }
      ]
      );
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
