/*jslint node: true */
"use strict";

var _ = require("underscore");

var nuimotion = require("nuimotion");

// Mapping of nuijoints to ZigJS joints
var jointMappings = require("./jointMappings");

// Adapts the NUIMotion data format to that of ZigJS
// which is what we happen to be using elsewhere on our own project.
// Don't plug in this module if you intend to use NUIMotion as is.
function convert(nuiskeleton) {
    // var zigskeleton = {};
    console.log(nuiskeleton);
}

function convertJoint(nuijoint, id) {
    /*return {
        id: id,
        position: [
            nuijoint.x,
            nuijoint.y,
            nuijoint.z
        ],
        positionConfidence: nuijoint.positionConfidence,
        rotation: ???? xyz to matrix,
        rotationConfidence: 1 // nuimotion doesn't report this
    };*/
}

exports.convert = convert;