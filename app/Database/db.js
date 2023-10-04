// require('dotenv').config(); // Load environment variables from a .env file
// const mongoose = require('mongoose');

// exports.connectMongo = () => {
//   mongoose.connect("mongodb+srv://mrakp007:ElsjlhIo4l9loYq@cluster0.lrepx4v.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, // Add this option for avoiding deprecation warnings
//   })
//   .then(() => {
//     console.log("Connected to MongoDB => Todo App");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
//   });
// };
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mrakp007:4mY8sMwvt0HtvkKl@cluster0.lrepx4v.mongodb.net/todo_db");

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo db is successfully connected");
});
db.on("error", () => {
  console.log("Mongo db connection failed");
});

module.exports = mongoose;