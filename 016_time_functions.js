//We need to run this after the DOM is constructed
window.onload = function() {

//Open a new function that gets the date and time in an organized format--------
function get_std_time() {
  //set the raw data date variable.
  var time = new Date();

  //break it down by declaring each important component of our new time data as it's own variable
  var year = time.getFullYear();
  var month = time.getMonth();
  var date = time.getDate();
  var milt_hours = time.getHours();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var old_time = time.getTime(); //get the time (milliseconds since January 1, 1970)

  //Select the day of the week
  var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days_of_week[time.getDay()];

  //Hours are in military format.  We need to change it to standard format. (m = milt_hours)
  function milt_to_std(m) {
    if (m > 12) {
    hours = m - 12;
    return hours;
  } else if (m === 0) {
    hours === 12
      return hours;
    };
  };

  milt_to_std(milt_hours);

  //We need to determine whether it's am/pm
  var am_pm = mornin();
    function mornin() {
      if (milt_hours >= 12) {
        return am_pm = "pm";
      } else {
        return am_pm = "am";
      };
    };

  //this will fix our issue with single integer spacing
  function sing_to_doub_int(number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return "" + number;
    };
  };

//makeing it pretty
  var time_std = hours + ":" + sing_to_doub_int(minutes) + " " + am_pm;
  var date_std = month + "/" + date + "/" + year;

//Now let's create a customized greeting that changes with the time of the day--

  //first have a function check if it's in range
  function in_range(x, min, max) {
    if (x >= min && x <= max) {
      return true;
    } else {
      return false;
    };
  };

  //now we give it the greeting options we want
  var greeting = {
    too_early: ["Go back to bed, it's way too early!", "Go away.  You shouldn't be here.  Don't you know what time it is?", "You're insane.  Why aren't you in bed?"],
    mornin: ["Mornin'!  Mornin' cows.  Mornin' Moon.  Mooornin'!", "Buenos Dias!", "What's for breakfast?", "You got this!"],
    afternoon: ["And it's a lovely afternoon for you now, ain't it?", "Buenos Tardes!", "How is your afternoon going?", "Howdy Doody there girl ^_^"],
    evening: ["It's a lovely time for a spot of tea...", "Tea time!", "Evenings are the best part of the day ^_^", "What is going on this evening?"],
    night: ["Go to bed.", "It's late. Get some rest.", "Why are you still up?  Go to sleep", "Had too much coffee tea, didntcha?", "Maybe you should try reading a book?"],
  };

  //let's make it more random
  function suprise_me(full_array) {
    var surprise = full_array[Math.floor(Math.random() * full_array.length)];
    console.log("The surprise is " + surprise);
    return surprise;
  };

  //Grabs a random greeting from the array depending on the time of day
  function time_of_day(int) {
    if (in_range(int, 0, 2) === true || int === 24) {
        return suprise_me(greeting.night);
    } else if (in_range(int, 3, 7) === true) {
        return suprise_me(greeting.too_early);
    } else if (in_range(int, 8, 11) === true) {
        return suprise_me(greeting.mornin);
    } else if (in_range(int, 12, 19) === true) {
        return suprise_me(greeting.afternoon);
    } else if (in_range(int, 20, 23) === true) {
        return suprise_me(greeting.evening);
    };
  };

  var message = time_of_day(milt_hours);

  //Set up the html-------------------------------------------------------------
  function display(id,data) {
    return document.getElementById(id).innerHTML = data;
  };

  display("time", time_std);
  display("date", date_std);
  display("message", message);
  display("day", day);

  //Randomize the box color
  //create an array of all our boxes
  var boxes = ["time", "date", "message", "day"];

  //make a list of all our availiable colors.
  var colorobj = {
    purple: "750D5C",
    blue: "3851DC",
    rose: "D42DAC",
    teal: "3ECFBE",
    magenta: "840566",
    gray: "5A5C5A",
    light_rose: "ffd2d3",
  }

  //dump them all into an array (this could prolly be made ito a function but now is not the time)
  var all_colors = [
    "feb8c3",
    "c8a6bb",
    "9890a9",
    "6e7e8f", 
    "a2b6cb",
    "5cb1b5",
    "e8ca92",
    "d2aeaf",
    "edbea7",
    "eee1bd",
    "d3d1a0"
  ];

  //take control of the color in all the boxes
  function rand_color(id) {
    var len = id.length;
    var rand_color = suprise_me(all_colors);
    for (var i = 0; i < len ; i++) {
      document.getElementById(id[i]).style.backgroundColor = rand_color;
    };

  };

  //call it and feed it the array and the color value as a string
  rand_color(boxes);

//close the function.
};

get_std_time();

//close the onload
};

//Success!
