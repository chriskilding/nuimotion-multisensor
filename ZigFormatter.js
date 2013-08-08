/*jslint node: true */
"use strict";

/**
 * Module for mapping data to the ZigJS format.
 */

var _ = require("underscore");
var oni = require("openni");
var sylvester = require("sylvester");
var reconstructor = require("reconstruct-o-matic");

// Mapping to ZigJS joints
var jointMappings = require("./JointMappings");

// Sylvester expects radians!
function xyzToMatrix(x, y, z) {
    var xm = sylvester.Matrix.RotationX(x);
    var ym = sylvester.Matrix.RotationY(y);
    var zm = sylvester.Matrix.RotationZ(z);
    
    return xm.multiply(ym).multiply(zm);
}

// Converts your degrees to radians before calling xyzToMatrix
function xyzToMatrixDegrees(x, y, z) {
    return xyzToMatrix(
        reconstructor.Math.Triangles.degreesToRadians(x),
        reconstructor.Math.Triangles.degreesToRadians(y),
        reconstructor.Math.Triangles.degreesToRadians(z)
    );
}

// Converts just one joint of data to Zig format
function convertJoint(jointData, id) {
    return {
        id: id,
        position: [
            jointData.x,
            jointData.y,
            jointData.z
        ],
        positionConfidence: jointData.positionConfidence,
        rotation: xyzToMatrix(jointData.xRotation,
                              jointData.yRotation,
                              jointData.zRotation),
        // node module doesn't report this
        rotationConfidence: 0
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