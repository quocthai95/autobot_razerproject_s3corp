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

function searchSKUVariant(data) {
    robot.keyTap('tab', 'alt');
    robot.keyTap('f', 'control');
    robot.typeString(data);
    robot.keyTap('enter');
}

function clonePromotionFillData(data) {
    robot.keyTap('tab', 'alt');
    robot.moveMouseSmooth(898, 350);
    robot.mouseClick();
    robot.keyTap('a', 'control');
    robot.keyTap('backspace');
    robot.typeString(data[1]);
    robot.moveMouseSmooth(466, 494);
    robot.mouseClick();
    robot.keyTap('a', 'control');
    robot.keyTap('backspace');
    robot.typeString(data[2]);
    robot.moveMouseSmooth(611, 475);
    robot.mouseClick('left', true);
    robot.setMouseDelay(4000);
    robot.moveMouseSmooth(196, 306);
    robot.setMouseDelay(2000);
    robot.mouseClick();
    robot.moveMouseSmooth(254, 481);
    robot.mouseClick('left', true);
    robot.moveMouseSmooth(543, 646);
    robot.setMouseDelay(10);
    robot.mouseClick();
    robot.keyToggle('shift', 'down');
    robot.moveMouseSmooth(628, 825);
    robot.mouseClick();
    robot.keyToggle('shift', 'up');
    robot.mouseClick('right');
    robot.moveMouseSmooth(704, 895);
    robot.mouseClick();
    robot.moveMouseSmooth(740, 157);
    robot.setMouseDelay(2000);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(614, 646);
    robot.mouseClick('right');
    robot.moveMouseSmooth(686, 692);
    robot.setMouseDelay(5000);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(620, 267);
    robot.mouseClick();
    robot.typeString(data[3]);
    robot.moveMouseSmooth(202, 423);
    robot.mouseClick();



    // robot.moveMouseSmooth(287, 296);
    // robot.mouseClick();
    
}

var callback = function(code, data, err)
{
    const arrData = data.split(',');
    switch (arrData[0]) {
        case '1':
        searchSKUVariant(arrData[1]);
        break;
        
        case '2':
        clonePromotionFillData(arrData);
        break;

        default:
            break;
    }
    // robot.moveMouse(528, 124);
    // robot.mouseClick();
    // robot.keyToggle('control', 'down');
    // robot.keyTap('a');
    // robot.keyToggle('control', 'up');
    // robot.keyTap('backspace');
    // robot.typeString(retVal);
    // robot.keyTap('enter');
    // robot.setMouseDelay(2000);
    // robot.moveMouse(205, 300);
    // robot.mouseClick();
}

dialog.entry(`1 - Search by SKU Number (Variants)
2 - Fill Promotion By Clone (Title, Description)`, "Enter action", 0, callback);


