var robot = require("robotjs");
var dialog = require('dialog-node');
// var readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Tutorial api
// Set delay
// robot.setMouseDelay(2);

// Get screenSize
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;

// Move mouse base on X, Y coordinate
// 	robot.moveMouse(x, y);
// 	robot.moveMouseSmooth(x, y); move like human move mouse

//Mouse click
//robot.mouseClick([button], [double]);

// Get Position of mouse base on X, Y coordinate
//var mouse = robot.getMousePos();

// Get pixel color in hex format at mouse.
//var hex = robot.getPixelColor(mouse.x, mouse.y);

 var mouse = robot.getMousePos();
// rl.question('Chuột đang ở tọa độ X: ' + mouse.x + ', Y:' + mouse.y + '. Vui lòng nhập SKU Number', (data) => {
//     robot.moveMouseSmooth(528, 124);
//     robot.mouseClick();
//     robot.typeString('WSWWETTAA');
// })

//will be called after user closes the dialog
var callback = function(code, retVal, stderr)
{
    robot.moveMouse(528, 124);
    robot.mouseClick();
    robot.keyToggle('control', 'down');
    robot.keyTap('a');
    robot.keyToggle('control', 'up');
    robot.keyTap('backspace');
    robot.typeString(retVal);
    robot.keyTap('enter');
    robot.setMouseDelay(2000);
    robot.moveMouse(205, 300);
    robot.mouseClick();
}

dialog.entry('Nhập SKU number: ', "Nhập data", 0, callback);


