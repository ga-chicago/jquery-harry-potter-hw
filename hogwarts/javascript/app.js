console.log("JS IS RUNNING");


// YEAR 1 


// Declare variable, assign it the value of existing JQuery object
const $container = $('.container');

// console.log($container);			// ==> TEST

// Declare variable, assign it value of now created JQuery object
const $h1 = $('<h1/>');

// console.log($h1);				// ==> TEST

// Add text to object
$h1.text('Hogwarts');

// To $container append $h1
$container.append($h1);

// console.log($h1);				// ==> TEST



// YEAR 2

// Following what you did in Year 1, add the following:

// h2 element with your name
const $h2 = $('<h2>Charlotte</h2>');	// ==> Create
// console.log($h2);					// ==> TEST
$h1.after($h2);							// ==> Add after $h1

// h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $('<h3>Ravenclaw</h3>');	// ==> Create
// console.log($h3);					// ==> TEST
$h2.after($h3);							// ==> Add after $h2

// h4 element with your pet's name
// this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
const $h4_vampireBat = $('<h4 class="vampireBat">Zelda</h4>');	// ==> Create
// console.log($h4.vampire_bat);									// ==> TEST
$h3.after($h4_vampireBat);											// ==> Add after h3

// h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
const $h4_wand = $('<h4 class="wand">Birch Wood Wand with Phoenix Core</h4>')
console.log($h4_wand);
$h4_vampireBat.after($h4_wand);
// In your style.css add an attribute of font-family: fantasy; to all elements that have a class that matches your pet's class

// Test yourself

// 🔴 The commit message should read: 
// "Added more elements. My power grows with my dedication and hard work."



// YEAR 3

// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

// list items of

// butter beer
// invisibility cloak (add a class of secret)
// magic map (add a class of secret)
// time turner (add a class of secret)
// leash (for your pet, be sure to give this list element the same class as you gave your pet)
// Bertie Bott's Every Flavor [Jelly] Beans.
// append the unordered list to your container div
// In your style.css file, give the items with a class of secret an attribute of opacity: 0.5;

// In your style.css file, remove the bullet points from the list items

// Test yourself
// 🔴 The commit message should read: 
// "Added list elements. That code didn't seem very DRY. I wonder if Hungry for More will have me DRY it up a bit."



// YEAR 4
// You want to show off how many classes you are taking

// Make a table
// Hint: Look under More Examples, <p>Simple table with header</p> at MDN to see the correct HTML element layout

// Right above your table add an h5 that says 'Spring 2017'
// Inside the table add a thead element
// Inside the thead element add two th elements
// in the first th add the text Day
// in the second th add the text Classes
// Create a tr element and add two td elements inside.
// in the first td add the day Monday
// in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
// Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
// In your style.css file, add a gray 1px solid border around your table, th elements and td elements
// In your style.css file, add a rule that will center your table on the page
// Test yourself
// 🔴 The commit message should read: 
// "I realize I can make things that are increasingly more complex with greater ease. Adding order is always more effort than causing chaos."



// YEAR 5
// Things get interesting

// Break your wand! (select the element that contains your wand and remove it)
// Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your style.css file
// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
// Have your pet come back (remove your pet from the DOM, put it back in its original location)
// 🔴 The commit message should read: 
// "The days go by slowly and the years go by too fast"



// YEAR 6
// School is so fun!

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Accident! You transmogrified your pet's leash into half cabbage
// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
// add an attribute of color: chartreuse; in your style.css for all elements that have a class of cabbage
// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
// 🔴 The commit message should read: 
// "A cauliflower is a cabbage with a college education - Mark Twain"



// YEAR 7
// Though your time at Hogwarts is nearly over, your journey of learning has just begun

// Update your class schedule to read 'Fall 2018'
// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
// Add some CSS to your page. Feel free to experiment and make this page your own
// 🔴 The commit message should read: 
// "I am getting more comfortable with ambiguous instructions"



// Post-Graduation (Hungry for More - choose any)
// Research how to and then add a Favicon (ok to hard code this in your index.html)
// Refactor your code. Make it more DRY. Are there places you could have used a for loop? Functions you could have created? Any jQuery functions you could have chained?
// Clean up your code. Check indentation be sure you have plenty of comments
// Add more delays to show your pet leaving and coming back from its mission Get inspiration here
// Add CSS animations. We havn't covered them yet. Get inspiration here























