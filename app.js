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

// position of create product
let [x, y] = [419, 672];

// position of create new product
let [nx, ny] = [444, 741];

// position of currency
let [cx, cy] = [608, 670];

// position of partner product
let [fx, fy, flx] = [781, 670, 727];

// add more Y
let mY = 25;

imY = 0;

// add more mouse delay
let delay = 4000;

// add more keyboard delay
let kbdelay = 2000;

//delay for createNewProductMouse
let newproductDelay = 4000;

// Create new Product
function createNewProduct(An, Id, Pd, spmEN, spmDE, spmFR, spmHK, Cs, Rb, rbnEN, rbnDE, rbnFR, rbnHK) {
    robot.keyTap('tab', 'alt');
    robot.keyTap('home');
    // Article number
    robot.moveMouseSmooth(500, 372);
    robot.mouseClick();
    robot.typeString(An);
    // Identifier
    robot.moveMouseSmooth(882, 372);
    robot.mouseClick();
    robot.typeString(Id);
    // Catalog version
    robot.moveMouseSmooth(504, 395);
    robot.mouseClick();
    robot.moveMouseSmooth(504, 480);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    //Product display
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(526, 493);
    robot.mouseClick();
    robot.typeString(Pd);

    //Go to properties tab
    robot.moveMouseSmooth(395, 320);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(newproductDelay);
    robot.moveMouseSmooth(375, 943);
    robot.mouseClick();
    robot.setMouseDelay(10);
    //Short Promotion Text En
    ncp.copy(spmEN);
    robot.moveMouseSmooth(525, 944);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    //Short Promotion Text De
    ncp.copy(spmDE);
    robot.keyTap('tab');
    robot.keyTap('v', 'control');
    //Short Promotion Text Fr
    ncp.copy(spmFR);
    for(let i =0; i< 8; i++) {
        robot.keyTap('tab');
    }
    robot.keyTap('v', 'control');
    //Short Promotion Text Hk
    ncp.copy(spmHK);
    for(let i =0; i< 10; i++) {
        robot.keyTap('tab');
    }
    robot.keyTap('v', 'control');

    //go to Catagory System tab
    robot.moveMouseSmooth(1148, 708);
    robot.mouseClick();
    robot.keyTap('home');
    robot.moveMouseSmooth(605, 320);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(489, 634);
    robot.mouseClick('right');
    robot.moveMouseSmooth(562, 683);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(477, 215);
    robot.mouseClick();
    robot.moveMouseSmooth(469, 265);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(630, 324);
    robot.mouseClick();
    robot.moveMouseSmooth(622, 408);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(621, 266);
    robot.mouseClick();
    robot.typeString(Cs);
    robot.setMouseDelay(newproductDelay);
    robot.keyTap('enter');
    robot.moveMouseSmooth(630, 485);
    robot.setMouseDelay(10);
    robot.mouseClick('left', true);

    //go to variants tab
    robot.setMouseDelay(newproductDelay);
    robot.moveMouseSmooth(804, 320);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(485, 489);
    robot.mouseClick();
    robot.keyTap('r');
    robot.setKeyboardDelay(3000);
    robot.keyTap('a');
    robot.setKeyboardDelay(10);
    robot.keyTap('tab');

    //go to administration tab
    robot.moveMouseSmooth(407, 342);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    //ribbon color
    robot.moveMouseSmooth(491, 816);
    switch (Rb) {
        case 'green':
        robot.mouseClick();
        robot.moveMouseSmooth(484, 848);
        robot.mouseClick();
            break;

        case 'blue':
        robot.mouseClick();
        robot.moveMouseSmooth(495, 860);
        robot.mouseClick();
            break;

        case 'red':
        robot.mouseClick();
        robot.moveMouseSmooth(492, 875);
        robot.mouseClick();
            break;

        case 'gray':
        robot.mouseClick();
        robot.moveMouseSmooth(488, 889);
        robot.mouseClick();
            break;
    
        default:
            break;
    }

    // ribbon name
    robot.moveMouseSmooth(360, 840);
    robot.setMouseDelay(newproductDelay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    //ribbon name En
    ncp.copy(rbnEN);
    robot.moveMouseSmooth(511, 839);
    robot.mouseClick();
    robot.keyTap('v', 'control');
    //ribbon name de
    ncp.copy(rbnDE);
    robot.keyTap('tab');
    robot.keyTap('v', 'control');
    //ribbon name fr
    ncp.copy(rbnFR);
    for(let i =0; i< 8; i++) {
        robot.keyTap('tab');
    }
    robot.keyTap('v', 'control');
    //ribbon name de
    ncp.copy(rbnHK);
    for(let i =0; i< 10; i++) {
        robot.keyTap('tab');
    }
    robot.keyTap('v', 'control');

}

// Create Partner Products in Promotion

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

// Create Partner Products in Promotion By SKUs number

function createPartnerItemBySKUs(add, key, keyRepeat, SKU, Local) {
    robot.keyTap('end');
    robot.setMouseDelay(10);
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
    robot.setMouseDelay(4000 + delay);
    robot.setKeyboardDelay(3000 + kbdelay);
    robot.keyTap('enter');
    robot.setKeyboardDelay(10);
    robot.keyTap('end');
    robot.setMouseDelay(2000 + delay);
    robot.moveMouseSmooth(flx, cy + add);
    robot.setMouseDelay(4000 + delay);
    robot.mouseClick();
    robot.setMouseDelay(10);
    robot.moveMouseSmooth(631, 323);
    robot.mouseClick();

    switch (Local) {
        case 'US':
            for(let i = 0; i < 27; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;

        case 'CA':
            for(let i = 0; i < 9; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'EU':
            for(let i = 0; i < 17; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'DE':
            for(let i = 0; i < 13; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'FR':
            for(let i = 0; i < 19; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'UK':
            for(let i = 0; i < 25; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'SG':
            for(let i = 0; i < 23; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
        case 'HK':
            for(let i = 0; i < 21; i++) {
                robot.keyTap('down');
            }
            robot.keyTap('enter');
            break;
    
        default:
            break;
    }

    robot.setMouseDelay(4000 + delay);
    robot.moveMouseSmooth(625, 267);
    robot.setMouseDelay(10);
    robot.mouseClick();
    robot.typeString(SKU);
    robot.keyTap('enter');
    robot.setMouseDelay(4000 + delay);
    robot.moveMouseSmooth(588, 542);
    robot.setMouseDelay(10);
    robot.setMouseDelay(4000 + delay);
    robot.mouseClick('left', true);

}

function createGroupPartnerItemBySKUs(USCA, EU, AP) {
      // create US
      createPartnerItemBySKUs((mY + imY )*(0), 'u', 3, USCA, 'US');
      // create CA
      createPartnerItemBySKUs((mY + imY )*(1), 'c', 1, USCA, 'CA');
      // create EU
      createPartnerItemBySKUs((mY + imY )*(2), 'e', 7, EU, 'EU');
      // create DE
      createPartnerItemBySKUs((mY + imY )*(3), 'e', 7, EU, 'DE');
      // create FR
      createPartnerItemBySKUs((mY + imY )*(3), 'e', 7, EU, 'FR');
      // create UK
      createPartnerItemBySKUs((mY + imY )*(3), 'g', 1, EU, 'UK');
      // create SG
      createPartnerItemBySKUs((mY + imY )*(3), 's', 7, AP, 'SG');
      // create HK
      createPartnerItemBySKUs((mY + imY )*(3), 'h', 1, AP, 'HK');
}

function createMoreGroupPartnerItemBySKUs(USCA, EU, AP) {
    // create US
    createPartnerItemBySKUs((mY + imY )*(3), 'u', 3, USCA, 'US');
    // create CA
    createPartnerItemBySKUs((mY + imY )*(3), 'c', 1, USCA, 'CA');
    // create EU
    createPartnerItemBySKUs((mY + imY )*(3), 'e', 7, EU, 'EU');
    // create DE
    createPartnerItemBySKUs((mY + imY )*(3), 'e', 7, EU, 'DE');
    // create FR
    createPartnerItemBySKUs((mY + imY )*(3), 'e', 7, EU, 'FR');
    // create UK
    createPartnerItemBySKUs((mY + imY )*(3), 'g', 1, EU, 'UK');
    // create SG
    createPartnerItemBySKUs((mY + imY )*(3), 's', 7, AP, 'SG');
    // create HK
    createPartnerItemBySKUs((mY + imY )*(3), 'h', 1, AP, 'HK');
}

// create partner products by number
function createPartnerProductBySKUs(arr) {
        robot.keyTap('tab', 'alt');
        robot.keyTap('end');
        if ( arr.length < 4) {
            createGroupPartnerItemBySKUs( arr[0], arr[1], arr[2]);
        } else {
            for (let i = 0; i < arr.length; i+=3) {
                if(i < 3 ) {
                    createGroupPartnerItemBySKUs( arr[i], arr[i+1], arr[i+2]);
                } else {
                    createMoreGroupPartnerItemBySKUs( arr[i], arr[i+1], arr[i+2]);
                }
            }
        }
}

function addPartnerProductBySKUs(arr) {
        robot.keyTap('tab', 'alt');
        robot.keyTap('end');
        for (let i = 0; i < arr.length; i+=3) {
            createMoreGroupPartnerItemBySKUs( arr[i], arr[i+1], arr[i+2]);
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
        createNewProduct(arrData[1], arrData[2], arrData[3], arrData[4], arrData[5], arrData[6], arrData[7], arrData[8], arrData[9], arrData[10], arrData[11], arrData[12], arrData[13])
        break;
        
        case '2':
        createPartnerProduct(+arrData[1]);
        break;

        case '3':
        createPartnerProductBySKUs(arrData[1].split('/'));
        break;

        case '4':
        addPartnerProductBySKUs(arrData[1].split('/'));
        break;

        case '5':
        createPromotionFillData(arrData);
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
dialog.entry(`1 - Create new Product (Article Number, Identifier, Product Display, Short Promotion Text 4 Langs, Catagory, Ribbon Color, Ribbon name 4 langs)
2 - Create Partner Products in Promotion (Number of partner products)
3 - Create Partner Products in Promotion by SKUs Number (Array of SKUs - USCA/EU/AP SKU)
4 - Add More Partner Products in Promotion by SKUs Number (Array of SKUs - USCA/EU/AP SKU)
5 - Create new Promotion Partner (Title, Description, Name of Base Product)`, "Enter action", 0, callback);


