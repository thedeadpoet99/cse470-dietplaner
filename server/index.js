// index.js
const express = require("express");
const connectToDatabase = require("./config/db")
const cors = require("cors");
const path = require('path');
const User = require('./models/user');
const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const dietRoutes = require('./routes/diet'); // Import diet routes
const app = express();
const staticPath = path.join(__dirname, 'client2/build');
const fs = require('fs');
app.use(express.json());
app.use(cors());
connectToDatabase()



// Route to handle GET requests to the root URL
app.use('/', homeRoutes)

app.use('/user', authRoutes)

app.use('/user', userRoutes);

app.use('/post', postRoutes);

app.use('/diet', dietRoutes); // Use diet routes

app.use(express.static(staticPath));


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
