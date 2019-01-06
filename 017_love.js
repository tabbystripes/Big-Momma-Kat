//<div class="heart-solid icon"></div>
//Add this to the html for the heart icon


var run_it = function() {
  var ui = document.getElementById("word").value;
  console.log(ui);
  var mes = {
    hello: "<p>Welcome Home James!!!!!</p><p>Would you like to play a game?<br> \
              Who am I kidding?  Of COURSE you do!</p> \
              <p>So, let's get to it!  Here are the rules:</p> \
              <p>1. If you enter the correct word in the box above, you will be given the location of a prize.<br> \
              2. There will be a question or riddle, or a missing word from a quote to help you solve the puzzle.<br> \
              3. Your gift will also come with a barcode. The barcode will have the answer to your current riddle.  If you cannot guess the answer on your own, you must find a way to scan the barcode instead.<br> \
              <p>To get started, type \"Begin\" into the box and click the button.</p> \
              <p>Good Luck!  I'm rooting for you <3 <3 <3</p>",

    begin: "<p>OK, are you ready?<br> \
               Here is your first question:</p>",

    build: "<p> YES!  THAT WAS CORRECT!!!</p><p>Remember when you were stationed in San Diego, and we<br> \
            rented the mustang and we put together a lego set?<br> \
            At first, I wasn't sure how well that would work, as legos<br>\
            had always been something I did on my own.  But that day you taught me that<br> \
            building alone is fun, but building with the right partner can be even better!  I just needed<br> \
            to build with the right person.</p> \
            <p>You were the right person, and I know I don't tell you enough just how crazy awesome it is<br> \
            that I get to build a life with you.  I am so excited we finally get the chance to do that together ^_^ </p><p>To claim your prize, go look behind the nightstand.</p><p>***  OK - Here is the next question:  ***</p>",

    water:"<p> YES!  THAT WAS CORRECT!!!</p><p>Do you ever feel dirty?  Sometimes you make me feel dirty, but in a good way ^_~<br> \
            Sometimes you get dirty because you are working hard to help me, like all those times you were<br> \
            down in the hold of a ship slaving away so that we could live more comfortably.  I want you to know that <br> \
            I don't take those drops of sweat for granted, and I want to make sure that when any future moments like that are over<br> \
            whether it's school, or work, or anything that bothers you, you'll have a nice safe relaxing place to come home and de-stress too...</p><p>To claim your prize, go look in the cleaning supply cabinet in the bedroom.</p><p>***  OK - Here is the next question:  ***</p>",

    world:"<p> YES!  THAT WAS CORRECT!!!</p><p>I don't know if you have realized this just yet, but I really love doing things with you.<br> \
            Like, a lot.  And it always makes me smile when I think about the time we <br> \
            played the Lego Marvel games together.  I like it when you take charge and show me your world; it does something to me, something really, really naughty.<br> \
            So I'm hoping that it becomes a bit of a tradition of sorts, where you take me by the hand and lead me into new worlds full of things for<br> \
            us to explore together.  I LOVE being adventurous and creative with you!</p><p>To claim your prize, go look inside the automatic cat feeder bin.</p><p>***  OK - Here is the final one:  ***</p>",

    boat:"<p> YES!  THAT WAS CORRECT!!!</p><p>One of the things that I love about you is that you are adventurous.  You have sailed the high seas<br> \
              and you have lived to tell the tale.  A man of that daring, that tenacity, and that kind of determination should<br> \
              have a presence that lets others know: Here is a man who has it together.  This gift is a little something that will further<br> \
              convince the ladies you have got it going on and puts other men on notice that you are not to be trifled with.</p> \
            <p>Warning: Use with extreme caution.  Significantly increases chances of wife attack while wearing.</p><p>To claim your prize, go look inside Charlotte's large Michael Kors Tote Bag</p><p>***  OK - Here is the next question:  ***</p>",

    toby:"<p> YES!  THAT WAS CORRECT!!!</p><p> I remember going to the zoo with you and watching the tortise eat his yams.  Still one of my fondest memories with you ^_^<br> \
              Now you already know what's up with this one, so I'm going to<br> \
              just cut right to the chase - you're getting a turtle.  You know this.  I know this.  So I can't surprise you with a turtle.<br> \
              Or can I...</p><p>To claim your prize, go look behind the cat tree.</p><p>***  OK - Here is the next question:  ***</p>",

    anchor:"<p> YES!  THAT WAS CORRECT!!!</p><p>You are my anchor.  And it just so happens one of my all-time favorite things to do together with you is snuggle up and enjoy your company.<br> \
                I could easily spend days cuddling up with you.  I plan on doing exactly that from time to time.<br> \
                And I suspect that this particular gift may be something that will help us live that dream together, and live it in style.</p><p>Sailor style! </p><p>To claim your prize, go look under the bed.</p><p>***  OK - Here is the next question:  ***</p>",

    blink:"<p> YES!  THAT WAS CORRECT!!!</p><p>Blink and you'll miss him!  This can be said of the main character of a show you enjoy, a show that I have very fond memories of sharing with you.<br> \
               As I recall, we had rented a room next to Alexanders by the Sea, and you had recently finished making me the happiest woman that has ever lived.  And then we <br> \
               cuddled up together and I was so happy there in your arms while this played in the background.</p> \
               <p>You still continue to make me the happiest woman that has ever lived, and <br> \
               you will always be my hero.</p><p>To claim your prize, go look on top of the fridge.</p><p>***  OK - Here is the next question:  ***</p>",

    lemon:"<p> YES!  THAT WAS CORRECT!!!</p><p> You love sour things.  Something I will never fully understand, yet I love about you.<br> \
             Now that you're home, it's time to kick back, relax, unwind, and indulge your senses through the means of some of your favorite vices.<br> \
            You have worked hard, and you deserve this.  So enjoy yourself, lounge around in your underwear for a while and get as sour as you want to be.</p><p>To claim your prize, go look in the pantry (bottom shelf).</p><p>***  OK - Here is the next question:  ***</p>",

    cards:"<p> YES!  THAT WAS CORRECT!!!</p>I love your playful spirit.  That you are game for nearly anything, with nearly anyone, at anytime.  You Sir, are ready to have fun.<br> \
               So have fun you shall!  My hope and desire is that we will happily play long into our old age together.<br> \
               You and I side-by-side with one another as the world makes it's countermoves.  Planning our next big move together.  I am so grateful and proud to have you by my side in this crazy game of life <3<p></p><p>To claim your prize, go look in Charlotte's underwear drawer.</p><p>***  OK - Here is the next question:  ***</p>",

    end:"<p> YES!  THAT WAS CORRECT!!!</p><p>To claim your prize, go look inside the refrigerator ^_^</p><p>All good things come to an end.  But the ending of this game is merely the beginning of our life together.  I love you.<br> \
               I plan to always love you.  I plan to spend my life with you.  I hope to show my love and prove that to you daily in so many different ways.  You are amazing.  You are handsome.  You are kind.<br> \
               You are funny.  You are intelligent.  You are a great conversationalist.  You are talented.  You are all these things and so much more.<br> \
               You are my husband, and I am your wife.  And that makes me the happiest wife I could possibly hope to be!<br> \
               <br> \
               I love you with all my heart.  Welcome home!<br> \
               </p><p><img src=\"images_folder\\kiss.png\" alt=\"heart\"></p>",

};

var clue = {

  build_r:"\"______ it, and they will come.\"<br>",

  blink_r:"I'm so fast you can not see me, though everyone sees straight through me,<br> \
           I do not stop until the day you die. What am I?<br>",

  water_r:"I travel the world, and I am drunk constantly. Who am I?<br>",

  boat_r:"I have a bow but no arrows,<br> \
          I have a wheel but I am not a car,<br> \
          I have a beam but I am not a light,<br> \
          What am I?<br>",

  toby_r:"If your name was Michael Scott, you would instantly hate me.<br> \
          Who am I?<br>",

  anchor_r:"What do you throw out when you want to use it, but take in when you don't want to use it?<br>",

  world_r:"Duct tape is like the force.<br> \
         It has a light side, a dark side, and it holds the _____ together.<br> \
        -Paul Fix",

  lemon_r:"I'm yellow but I'm not a rubber duck,<br> \
           I have seeds but I'm not a sunflower,<br> \
           I'm oval but I'm not an egg,<br> \
           I'm sour but I'm not a piece of candy,<br> \
           I'm a fruit but I'm not a banana.",

  cards_r:"What is put on a table, cut, but never eaten?",

  end_r:"Start at the beginning,<br> \
         and when you get to the ___, stop.",

};

  if (ui==null || ui=="") {
      document.getElementById("demo").innerHTML = "There's nothing here!";
  } else if (ui === "hello" || ui === "Hello") {
      document.getElementById("demo").innerHTML = mes.hello;
  } else if (ui === "begin" || ui === "Begin" ) {
      document.getElementById("demo").innerHTML = mes.begin;
      document.getElementById("clue").innerHTML = clue.cards_r;
  } else if (ui === "cards" || ui === "Cards") {
      document.getElementById("demo").innerHTML = mes.cards;
      document.getElementById("clue").innerHTML = clue.water_r;
  } else if (ui === "water" || ui === "Water") {
      document.getElementById("demo").innerHTML = mes.water;
      document.getElementById("clue").innerHTML = clue.build_r;
  }  else if (ui === "build" || ui === "Build") {
      document.getElementById("demo").innerHTML = mes.build;
      document.getElementById("clue").innerHTML = clue.boat_r;
  } else if (ui === "boat" || ui === "Boat") {
      document.getElementById("demo").innerHTML = mes.boat;
      document.getElementById("clue").innerHTML = clue.anchor_r;
  } else if (ui === "anchor" || ui === "Anchor") {
      document.getElementById("demo").innerHTML = mes.anchor;
      document.getElementById("clue").innerHTML = clue.blink_r;
  } else if (ui === "blink" || ui === "Blink") {
      document.getElementById("demo").innerHTML = mes.blink;
      document.getElementById("clue").innerHTML = clue.toby_r;
  } else if (ui === "toby" || ui === "Toby") {
      document.getElementById("demo").innerHTML = mes.toby;
      document.getElementById("clue").innerHTML = clue.lemon_r;
  } else if (ui === "lemon" || ui === "Lemon") {
      document.getElementById("demo").innerHTML = mes.lemon;
      document.getElementById("clue").innerHTML = clue.world_r;
  } else if (ui === "world" || ui === "World") {
      document.getElementById("demo").innerHTML = mes.world;
      document.getElementById("clue").innerHTML = clue.end_r;
  } else if (ui === "end" || ui === "End") {
      document.getElementById("demo").innerHTML = mes.end;
      document.getElementById("clue").innerHTML = "";
      ;
  } else {
    document.getElementById("demo").innerHTML = "No, I'm very sorry, but that answer is incorrect.  Try again!";
    console.log ("an attempt was made...");
  };
};
