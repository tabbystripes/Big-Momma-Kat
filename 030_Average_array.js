//Function that gives an average from an array
function Average(array) {

  var sum = array.reduce((total, amount) => total + amount); //finds the sum
  var avg = sum/array.length; //gets the average
  var avgs = avg.toFixed(2); //limits the average to 2 spaces to right of decimal
  return avgs;
};

var av = Average([5335.27, 4226.40, 5068.17, 2980.51, 3816.07]);
var eden = (811 * 52) / 12;
var ed = eden.toFixed(2);

var rent = Average([2760.12, 2684.91, 2690.55, 2799, 2846.18]);



document.write(av + "<br>");
document.write("Average rent: " + rent + "<br>");
document.write("Roomates portion subtracted: " + (rent - 1200));
