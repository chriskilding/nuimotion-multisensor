/*jslint node: true */

"use strict";

console.log("starting");
var nuimotion = require("nuimotion");
var zig = require("./zigJoints");
// var converter = require("./nuimotion-zig-adapter")
console.log("joints", nuimotion);
console.log("zig", zig.Head);

var onSkeletonUpdate = function (skel) {
    // converter.convert(skel);
};

// listen to the whole array
nuimotion.startSkeletonListener(nuimotion.Joints, onSkeletonUpdate, 10000);