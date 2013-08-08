/*jslint node: true */
"use strict";

// The ZigJS joints
var zigJoints = require("./zigJoints");
var nuimotion = require("nuimotion");

// Mapping of nuijoints to ZigJS joints
var map = {};

map[nuimotion.Joints.HEAD] = zigJoints.Head;
map[nuimotion.Joints.LEFT_HAND] = zigJoints.LeftHand;
map[nuimotion.Joints.RIGHT_HAND] = zigJoints.RightHand;
map[nuimotion.Joints.LEFT_ELBOW] = zigJoints.LeftElbow;
map[nuimotion.Joints.RIGHT_ELBOW] = zigJoints.RightElbow;
map[nuimotion.Joints.LEFT_SHOULDER] = zigJoints.LeftShoulder;
map[nuimotion.Joints.RIGHT_SHOULDER] = zigJoints.RightShoulder;
map[nuimotion.Joints.LEFT_HIP] = zigJoints.LeftHip;
map[nuimotion.Joints.RIGHT_HIP] = zigJoints.RightHip;
map[nuimotion.Joints.TORSO] = zigJoints.Torso;

module.exports = map;