const express = require('express');
const cors  = require('cors');
const mongoose  = require('mongoose');
const userRoutes=require("./routes/userRoutes");
const app =  express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);
app.use("/api/auth",userRoutes);
mongoose
  .connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});