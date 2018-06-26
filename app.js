var robot = require("robotjs");
var dialog = require('dialog-node');
var ncp = require("copy-paste");
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

//  var mouse = robot.getMousePos();
// rl.question('Chuột đang ở tọa độ X: ' + mouse.x + ', Y:' + mouse.y + '. Vui lòng nhập SKU Number', (data) => {
//     robot.moveMouseSmooth(528, 124);
//     robot.mouseClick();
//     robot.typeString('WSWWETTAA');
// })

//will be called after user closes the dialog

// declare coordinates for partner products
let [x, y] = [419, 672];
let [nx, ny] = [444, 741];
let [cx, cy] = [608, 670];
let [fx, fy] = [781, 670];
let mY = 25;
imY = 0;
let delay = 2000;
let kbdelay = 0;

// search by SKU number
function searchSKUVariant(data) {
    robot.keyTap('tab', 'alt');
    robot.keyTap('f', 'control');
    robot.typeString(data);
    robot.keyTap('enter');
}


// function createPartnerItem(add, key, keyRepeat) {
//         robot.moveMouseSmooth(x, y);
//         robot.mouseClick('right');
//         robot.moveMouseSmooth(nx, ny);
//         robot.setMouseDelay(3000 + delay);
//         robot.mouseClick();
//         robot.setMouseDelay(2000 + delay);
//         robot.moveMouseSmooth(fx, fy + add);
//         robot.setMouseDelay(10);
//         robot.mouseClick();
//         for(let i =0; i< keyRepeat ; i++) {
//             robot.keyTap(key);
//         }
//         robot.setMouseDelay(3000 + delay);
//         robot.setKeyboardDelay(3000 + delay);
//         robot.keyTap('enter');
//         // robot.keyTap('end');
//          robot.setMouseDelay(10);
//         robot.moveMouseSmooth(cx, cy + add);
//         robot.mouseClick();
//         robot.setKeyboardDelay(4000 + delay);
//         robot.keyTap('a');
//         robot.setKeyboardDelay(10);
//         robot.keyTap('tab');
// }

function createPartnerItem(add, key, keyRepeat) {
    robot.moveMouseSmooth(x, y);
    robot.mouseClick('right');
    robot.moveMouseSmooth(nx, ny);
    robot.setMouseDelay(3000 + delay);
    robot.mouseClick();
    robot.keyTap('end');
    robot.setMouseDelay(2000 + delay);
    robot.moveMouseSmooth(fx, fy + add);
    robot.setMouseDelay(10);
    robot.mouseClick();
    for(let i =0; i< keyRepeat ; i++) {
        robot.keyTap(key);
    }
    robot.setMouseDelay(3000 + delay);
    robot.setKeyboardDelay(3000 + kbdelay);
    robot.keyTap('enter');
    robot.keyTap('end');
     robot.setMouseDelay(10);
    robot.moveMouseSmooth(cx, cy + add);
    robot.mouseClick();
    robot.setKeyboardDelay(4000 + kbdelay);
    robot.keyTap('a');
    robot.setKeyboardDelay(10);
    robot.keyTap('tab');
}

function createGroupPartnerItem(index) {
      // create US
      createPartnerItem((mY + imY )*(index +0), 'u', 3);
      // create CA
      createPartnerItem((mY + imY )*(index +1), 'c', 1);
      // create EU
      createPartnerItem((mY + imY )*(index +2), 'e', 7);
      // create DE
      createPartnerItem((mY + imY )*(index +3), 'e', 7);
      // create FR
      createPartnerItem((mY + imY )*(index +3), 'e', 7);
      // create UK
      createPartnerItem((mY + imY )*(index +3), 'g', 1);
      // create SG
      createPartnerItem((mY + imY )*(index +3), 's', 7);
      // create HK
      createPartnerItem((mY + imY )*(index +3), 'h', 1);
}

function createMoreGroupPartnerItem(index) {
    // create US
    createPartnerItem((mY + imY )*(index +3), 'u', 3);
    // create CA
    createPartnerItem((mY + imY )*(index +3), 'c', 1);
    // create EU
    createPartnerItem((mY + imY )*(index +3), 'e', 7);
    // create DE
    createPartnerItem((mY + imY )*(index +3), 'e', 7);
    // create FR
    createPartnerItem((mY + imY )*(index +3), 'e', 7);
    // create UK
    createPartnerItem((mY + imY )*(index +3), 'g', 1);
    // create SG
    createPartnerItem((mY + imY )*(index +3), 's', 7);
    // create HK
    createPartnerItem((mY + imY )*(index +3), 'h', 1);
}
// create partner products by number
function createPartnerProduct(num) {
        robot.keyTap('tab', 'alt');
        robot.keyTap('end');
        if ( num < 9) {
            createGroupPartnerItem(0);
        } else {
            for (let i = 0; i < num; i+=8) {
                if(i <8 ) {
                    createGroupPartnerItem(0);
                } else {
                    createMoreGroupPartnerItem(0);
                }
            }
        }
}



// create new promotion
function createPromotionFillData(data) {
    robot.keyTap('tab', 'alt');
    // scroll to top of page
    robot.keyTap('home');

    // fill identifier
    robot.moveMouseSmooth(482, 352);
    robot.mouseClick();
    robot.typeString('Webstore US CA EU UK DE FR SG HK');

    // fill title
    robot.moveMouseSmooth(898, 350);
    robot.mouseClick();
    robot.typeString(data[1]);

    // fill description
    robot.moveMouseSmooth(466, 494);
    robot.mouseClick();
    robot.typeString(data[2]);

    // fill priority
    robot.moveMouseSmooth(492, 520);
    robot.mouseClick();
     robot.keyTap('a', 'control');
     robot.keyTap('backspace');
    robot.typeString('100');

    // fill promotion group
    robot.moveMouseSmooth(611, 475);
    robot.mouseClick('left', true);
    robot.setMouseDelay(6000);
    robot.moveMouseSmooth(196, 306);
    robot.setMouseDelay(2000);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(254, 481);
    robot.setMouseDelay(2000);
    robot.mouseClick('left', true);

    //fill message
    robot.moveMouseSmooth(536, 319);
    robot.mouseClick();
    robot.setMouseDelay(4000);
    robot.moveMouseSmooth(356, 542);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.keyTap('end');
    ncp.copy('以{1}加購 <font color="lime">{0}</font>。');
    robot.moveMouseSmooth(574, 726);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    ncp.copy('Ajoutez <font color="lime">{0}</font> pour {1}.');
    robot.moveMouseSmooth(1031, 675);
    robot.mouseClick();
    robot.keyTap('pageup');
    robot.moveMouseSmooth(574, 862);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    robot.moveMouseSmooth(1031, 675);
    robot.mouseClick();
    robot.keyTap('home');
    ncp.copy('Add on a <font color="lime">{0}</font> for {1}.');
    robot.moveMouseSmooth(571, 557);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    ncp.copy('Füge ein <font color="lime">{0}</font> für {1} hinzu.');
    robot.moveMouseSmooth(567, 614);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    robot.moveMouseSmooth(571, 557);

    //Add main product
    robot.moveMouseSmooth(261, 324);
    robot.setMouseDelay(3000);
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
        createPromotionFillData(arrData);
        break;

        case '3':
        createPartnerProduct(+arrData[1]);
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
2 - Create new Promotion Partner (Title, Description)
3 - Create Partner Products in Promotion (Number of partner products)`, "Enter action", 0, callback);


