console.log("starting");
var nuimotion = require("nuimotion");
// var converter = require("./nuimotion-zig-adapter")
console.log("joints", nuimotion);
console.log("zig", require("./zigJoints"));

var onSkeletonUpdate = function (skel) {
    converter.convert(skel);
}

// listen to the whole array
nuimotion.startSkeletonListener(nuimotion.Joints, onSkeletonUpdate, 10000);