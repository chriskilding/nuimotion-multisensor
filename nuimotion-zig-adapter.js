/*jslint node: true */
"use strict";

var _ = require("underscore");

var nuimotion = require("nuimotion");

// Mapping of nuijoints to ZigJS joints
var jointMappings = require("./jointMappings");

// Converts just one joint of data to Zig format
function convertJoint(nuijoint, id) {
    return {
        id: id,
        position: [
            nuijoint.x,
            nuijoint.y,
            nuijoint.z
        ],
        positionConfidence: nuijoint.positionConfidence,
        rotation: [], // ???? xyz to matrix,
        rotationConfidence: 0 // nuimotion doesn't report this
    };
}

// Converts an NUIMotion skeleton reading to a ZigJS skeleton reading
// which is what we happen to be using elsewhere on our own project.
// Don't plug in this module if you intend to use NUIMotion as is.
function convert(nuiskeleton) {
    // nuiskeleton is a json object
    // key = joint enum, value = the data
    // { "HEAD": { position: blah } }
    
    console.log(nuiskeleton);
    
    // The returner has to be an object
    // so can't use _.map directly, unfortunately
    var returner = {};
    _.each(nuiskeleton, function (jointData, jointId) {
        // First figure out the correspondingZig joint ID
        var zigJointId = jointMappings[jointId];
        // Then set a new property of that joint ID on the object
        // where the value is the converted joint data
        returner[zigJointId] = convertJoint(jointData, zigJointId);
    });
    
    return returner;
}

exports.convert = convert;