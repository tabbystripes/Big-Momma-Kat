//Function that gives an average from an array
function Average(array) {

  var sum = array.reduce((total, amount) => total + amount); //finds the sum
  var avg = sum/array.length; //gets the average
  var avgs = parseFloat(avg.toFixed(2)); //limits the average to 2 spaces to right of decimal
  console.log(avgs);
  return avgs;
};

function Show(string, array) {

  document.write(string + " :" + Average(array) + "<br>");

};


arr = {
  wat: [102.17, 105.96, 96.60, 90.40, 103.23, 102.18, 101.21, 97.80],
};



var pet = 50;
var fee = 15;
var trash = 23;
var water = Average(arr.wat);
var utility = 3.95;
var rent = 2589.00;
var cc = 69.00;

var pet2 = 70;
var fee2 = 0;
var trash2 = 23;
var water2 = 105;
var utility2 = 3.95;
var rent2 = 3045;
var cc2 = 69.00;



var pge18 = [226, 176, 122, 174, 144, 180, 172, 135, 118, 241, 210, 190];

var aaa18 = [150.64, 174.28, 150.64, 150.64];

var sup18 = [57.76, 222.65, 207.05, 111.27, 139.43];
Show("sup", sup18);

var tar18 = [57.24, 16.18];
Show("Target", tar18);

var gro18 = [333.42, 143.16, 398.78, 350.75, 297.66];
Show("Groceries", gro18);

var out18 = [372.48, 104.00, 393.27, 533.10, 229.49];
Show("Eating Out", out18);

var in18 = [259.75, 205.83, 171.28, 0, 36.11];
Show("Eating In", in18);

var tea18 = [30.84, 152.25, 107.67, 55.65, 45.36];
Show("Tea", tea18);

var clo18 = [60.31, 62.00, 123.08];
Show("Clothes", clo18);

var hair18 = [168, 0, 94, 0, 0];
Show("Hair", hair18);

var ski18 = [105.97, 0, 0, 40.97, 0];
Show("Skincare", ski18);

var char18 = [37.83, 101.75];
Show("Medication - Char", char18);

var urg18 = [278, 0, 0, 0, 200];
Show("Urgent Care", urg18);

var fuel18 = [86.06, 147.49, 99.77, 119.74, 121.25];
Show("Fuel", fuel18);

var sum_rent = pet + fee + trash + utility + rent + cc + water;
var sum_rent2 = pet2 + fee2 + trash2 + utility2 + rent2 + cc2 + water2;
/*
var 18 = [];
Show("", 18);
*/
document.write("<br>" + sum_rent2 + "<br>");
document.write("<br>" + "Gary's rent :" + (sum_rent2 / 3) * 2);
document.write("<br>" + "Roomies rent :" + sum_rent2 / 3);

document.write("<br>" + "base rent here :" + sum_rent + "<br>");
document.write("<br>" + "difference:" + (sum_rent - sum_rent2) + "<br>");
