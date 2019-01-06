//The actual function: takes an array and returns a single random item from the array.
function suprise_me(full_array) {
  return full_array[Math.floor(Math.random() * full_array.length)];
};

var items = [254, 45, 212, 365, 2543];
console.log(suprise_me(items));

//Success!
