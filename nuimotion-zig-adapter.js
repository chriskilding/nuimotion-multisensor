var _ = require("underscore");

// The ZigJS joints
var zigJoints = require("./zigJoints");

var nuimotion = require("nuimotion");

// Mapping of nuijoints to ZigJS joints
var jointMappings = {
    nuimotion.Joints.HEAD: zigJoints.Head,
    nuimotion.Joints.LEFT_HAND: zigJoints.LeftHand,
    nuimotion.Joints.RIGHT_HAND: zigJoints.RightHand,
    nuimotion.Joints.LEFT_ELBOW: zigJoints.LeftElbow,
    nuimotion.Joints.RIGHT_ELBOW: zigJoints.RightElbow,
    nuimotion.Joints.LEFT_SHOULDER: zigJoints.LeftShoulder,
    nuimotion.Joints.RIGHT_SHOULDER: zigJoints.RightShoulder,
    nuimotion.Joints.LEFT_HIP: zigJoints.LeftHip,
    nuimotion.Joints.RIGHT_HIP: zigJoints.RightHip,
    nuimotion.Joints.TORSO: zigJoints.Torso;
};

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