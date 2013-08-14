/*jslint node: true */
"use strict";

console.log("starting");
var OpenNI = require("openni");
var context = OpenNI();

// var converter = require("./nuimotion-zig-adapter");

context.emit = function () {
  console.log('emitted', arguments);
};

process.on('SIGINT', function () {
  context.close();
  process.exit();
});