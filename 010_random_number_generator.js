//This function generates a random number.
//specified length is an integer that shows how many decimal places there will be.

function rng(specified_length) {

  var rand = Math.random() * 9
  rndint = rand.toFixed(specified_length);
  return(rndint);
};

//EXAMPLE

//this outputs a single integer
console.log(rng());

//this outputs a float with three numbers after the decimal
console.log(rng(3))

//this outputs a four digit integer
console.log(rng(3) * 1000)
//Success!
