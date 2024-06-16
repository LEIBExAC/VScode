const { kMaxLength } = require('buffer');
const { maxHeaderSize } = require('http');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require("express");
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 7,
        kMaxLength: 13,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    },
});

UserSchema.virtual('url').get(function() {
    return '/users/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);