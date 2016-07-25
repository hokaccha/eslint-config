"use strict"

let validator = require("eslint/lib/config/config-validator")
let index = require("../index")

validator.validate(index, "index.js")
/* eslint-disable no-console */
console.log("ok")
