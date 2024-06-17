const express = require('express');
const router = express.Router();
const users = require('./users');
const User = require('../db-models/user');
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  res.render('login');
});

router.post('/login', [
  // Validate and sanitize fields.
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must be specified.")
    .isAlphanumeric()
    .withMessage("Username has non-alphanumeric characters."),
  body("email")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Email must be specified."),
  body("password", "Invalid date of birth")
    .optional({ values: "falsy" }),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("login", {
        title: "Create User",
        user: user,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.

      // Save author.
      await user.save();
      // Redirect to new author record.
      res.redirect(user.url);
    }
  }),
]);

router.get('/home/:id', asyncHandler( async(req, res, next) => {
  const user = await User.findById(req.params.id).exec();

  if (user === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render('index', user);
}));


module.exports = router;
