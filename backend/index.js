const express = require('express');
const connectDb = require('./config/db');

const port = 4000;

// DB call for connection
connectDb();

const server = express();

// Middleware to parse incoming JSON requests
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello From FitMap Server');
});

// User routes
const userRoute = require('./routes/user/userRoute');
server.use('/user', userRoute);

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
