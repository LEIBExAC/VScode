//Resume: This is the main script for the Unique Learning System
const express = require("express");
const router = express.Router();

const usercontroller = require('./UniqueLearning/usercontroller');
router.post('./login-page/', usercontroller);