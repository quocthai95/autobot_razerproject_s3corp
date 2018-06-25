var robot = require("robotjs");

// Get Position of mouse base on X, Y coordinate
var mouse = robot.getMousePos();

// Get pixel color in hex format at mouse.
var hex = robot.getPixelColor(mouse.x, mouse.y);

console.log(`Hex: ${hex} and X: ${mouse.x} Y: ${mouse.y}`);