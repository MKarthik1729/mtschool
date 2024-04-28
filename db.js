// db.js
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://karthikm:12345677@cluster0.j2lqxab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0your-mongodb-uri';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;
