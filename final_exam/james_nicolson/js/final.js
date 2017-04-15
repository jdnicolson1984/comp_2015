/* Question 1 is in the final.html document */

function runFinalCode() {
    /*
      Question 2: (1 point)
      - Add a comment below, with your name and student number (1 point)
      //James Nicolson A00990030
    */

    console.info('Question 3 --------------------------------------------');
    /*
      Question 3: (2 points)
      - Create an array, with all data types (strings of their names) in JavaScript. (1 point)
      - Use a WHILE loop to loop through each item in the array created, then log each item in the array. (1 point)
      - Add answer below.
    */
    var dataType = ["Boolean", "String", "Number", "Null", "Undefined", "Symbol"];
    var i = 0;
    while (i < dataType.length) {
        console.log(dataType[i]);
        i++;
    }

    console.info('Question 4 --------------------------------------------');
    /*
      Question 4: (2 point)
      - Use a for loop to iterate through all paragraphs in the document. (1 point)
      - Change their font size to 20 and their color to green, without jQuery. (1 point)
      - Add answer below.
    */
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "20px";
        paragraphs[i].style.color = "green";
    }

    console.info('Question 5 --------------------------------------------');
    /*
      Question 5: (1 point)
      - There is a link inside of each div in the html document.
      - Prevent the default behaviour of the browser when you click on the link
      inside of the div with id "div2".
    */
    var div2 = document.getElementById("div2");
    div2.onclick = function(e) {
        event.preventDefault();
    }

    console.info('Question 6 --------------------------------------------');
    /*
      Question 6: (2 points)
      - Log to the console the number of days between today and NEXT year's Christmas. (2 points)
    */
    var xmas = new Date(2017, 11, 25).getTime();
    var today = new Date().getTime();
    var diff = xmas - today;
    console.log(Math.round(diff / (1000 * 60 * 60 * 24)));

    console.info('Question 7 --------------------------------------------');
    /*
      Question 7: (2 points)
      - Create a FUNCTION called "isDivisibleByThree"
      - This function takes 1 parameter
      - The return value of the function should be either true or false. True if the parameter is divisible by three.
      False otherwise. (1 point)
      - Call this function twice. Once with the number 3027, and once with the number 29. (1 point)
    */
    function isDivisibleByThree(value) {
        if (value % 3 === 0) {
            return true;
        } else {
            return false;
        }

    }

    console.log(isDivisibleByThree(3027));
    console.log(isDivisibleByThree(29));

    console.info('Question 8 --------------------------------------------');
    /*
      Question 8: (2 points)
      - With jQuery, change all anchor tags (links) in the document to point to Google, instead of Yahoo. (1 point)
      - Also change their text, from Yahoo to Google. (1 point)
    */
    $(document).ready(function() {
        $("a").attr("href", "http://google.com");
        $("a").html("Google");
    });

    console.info('Question 9 --------------------------------------------');
    /*
      Question 9: (1 point)
      - With jQuery, change all paragraphs INSIDE of the element with id "div2" to have a border of '1 px solid red' when clicked. (1 point)
    */
    $(document).ready(function() {
        $("#div2").click(function() {
            $(this).css("border", "1px solid red");
        })
    });

    console.info('Question 10 --------------------------------------------');
    /*
      Question 10: (4 points)
      *In your own words* (do not copy/paste from course material or the internet, but feel free to research)

      - Describe what is JavaScript. (1 point)
      - Where can JavaScript be used? (1 point)
      - What can JavaScript do and not do in the browser? (1 point)
      - What is jQuery?
    */

    /* Answer:

    - Describe what is JavaScript. (1 point)
    JavaScript is a scripting language, typically used by client side applications, such as web browsers, to manipulate or trigger events that occur on a web page.

    - Where can JavaScript be used? (1 point)
    Javascript can be used on any web page, either as an external file or directly on the page through the script tag.

    - What can JavaScript do and not do in the browser? (1 point)
    Javascript can request information from remote applications via AJAX. It can manipulate DOM objects, their attributes and style. It can also initiate timers for triggering other events.

    Javascript cannot read a user's file system, execute other programs or perform actions such as closing windows or sending emails.
    It also cannot be hidden, so the user will always be able to see what has been executed.

    - What is jQuery?
    JQuery is a javascript library designed to make common Javascript tasks much simpler to perform. These include DOM identification and manipulation, event handling, animation and AJAX.

    */
}
window.onload = runFinalCode;
