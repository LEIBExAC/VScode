const createError = require('http-errors');
const express = require('express');
const path = require('path');
const usercontroller = require('./UniqueLearning/usercontroller');
const app = express();

//app.use('/', usercontroller);

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dev_db_url = "mongodb+srv://aditya:working@data.2lcbrs9.mongodb.net/local_lib?retryWrites=true&w=majority";

const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(express.json());

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;