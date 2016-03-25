'use strict';

let validator = require('eslint/lib/config/config-validator');
let index = require('../index');
let react = require('../react');

validator.validate(index, 'index.js');
validator.validate(react, 'react.js');
console.log('ok');
