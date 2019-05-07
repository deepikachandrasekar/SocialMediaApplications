const express = require('express');

/** ******
 Base Class
  ******* */
class Base extends express.Router {
  constructor() {
    super({
      mergeParams: true
    });
  }
}

module.exports = Base;