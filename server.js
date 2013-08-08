/*jslint node: true */
"use strict";

console.log("starting");
var nuimotion = require("nuimotion");
var converter = require("./nuimotion-zig-adapter");

var onSkeletonUpdate = function (skel) {
    var zigSkeleton = converter.convert(skel);
};

// listen to the whole array
nuimotion.startSkeletonListener(nuimotion.Joints, onSkeletonUpdate, 10000);

nuimotion.init();

process.on('exit', function () {
    nuimotion.close();
});