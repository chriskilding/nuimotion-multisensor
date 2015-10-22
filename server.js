/*jslint node: true */
"use strict";

console.log("starting");
var nuimotion = require("nuimotion");
var converter = require("./Formatter/NuiToZig");

var onSkeletonUpdate = function (skel) {
    console.log(skel);
    // var zigSkeleton = converter.convert(skel);
};

// listen to the whole array
nuimotion.startSkeletonListener(nuimotion.Joints, onSkeletonUpdate, 500);

nuimotion.init();

process.on('exit', function () {
    nuimotion.close();
});