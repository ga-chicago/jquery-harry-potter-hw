console.log('hogwarts')

//----------------YEAR 1

// Query for your div with the id of container and set it to a variable named $container
const $container = $('#container');
// console.log $container
console.log($container)
// Create an <h1> element and set it to a variable called $h1 and console log it
const $h1 = $('<h1/>')
console.log($h1);
$('#container').append('<h1>Hogwarts</h1>')
console.log($h1)
// Add some text inside the h1 element. Example text: 'Hogwarts'
const $h2 = $('<h2/>')
console.log($h2)


//---------------YEAR 2


//h2 element with your name
$('#container').append('<h2>Josh Hepworth</h2>')
console.log($h2)
//h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $('<h3/>')
console.log($h3)
$container.append('<h3>Ravenclaw</h3>')
// h4 element with your pet's name
const $h4 = $('<h4/>')
$('#container').append('<h4>Theodore</h4>')
//this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
$('h4').addClass('dog')
console.log($h4)
// h4 element with your wand
const $h4wand = $('<h4/>')
$('#container').append('<h4>Elder Wand</h4>')
$("h4").last().addClass('wand');
//add class to wand so i can remove it



//----------------YEAR 3

// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
const $ul = $('<ul/>');
$('#container').append('<ul></ul>')
console.log($ul)
$('ul').attr('storage')
$('ul').val('trunk')

const $li = $('<li/>')
$('ul').prepend('<li>butter beer</li>')
// $('ul').append('<li>invisibility</li>')
const $liInvis = $('<li/>')
$('ul').append('<li class="secret">Invisibility cloak</li>')
// $('li').addClass('secret')
// $('ul').append('<li>magic map</li>')
const $liMap = $('<li/>')
$('ul').append('<li class="secret">Magic Map</li>')
// $('li').addClass('secret')
$('ul').append('<li class="secret">time turner</li>')
$( "li" ).eq( 1 ).addClass( 'secret' );
$('ul').append('<li>leash</li>')
$( "li" ).eq( 2 ).addClass( 'secret' );

$('ul').append('<li>Bertie Botts Every Flavor [Jelly] Beans.</li>')
//HOW TO ADD CLASSES..
//when i addClass() it gives the UL a class instead of the LI

console.log($li)


//------------------YEAR 4

// <table>
//     <thead>
//         <tr>
//             <th colspan="2">The table header</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>The table body</td>
//             <td>with two columns</td>
//         </tr>
//     </tbody>
//     <tfoot>
//         <tr>
//             <td colspan="2">The table footer</td>
//         </tr>
//     </tfoot>
// </table>

// Right above your table add an h5 that says 'Spring 2017'
const $h5 = $('<h5/>')
$('#container').append('<h5>Spring 2017</h5>')
$container.append('<table><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Herbology, History of Magic</td></tr><tr><td>Tuesday</td><td>Charms, Shenanigans with the squad</td></tr><tr><td>Wednesday</td><td>Defense Against the Dark Arts</td></tr><tr><td>Thursday</td><td>Quidditch practice</td></tr><tr><td>Friday</td><td>Potions, Herbology</td></tr></table>');


//------------------YEAR 5

// Break your wand! (select the element that contains your wand and remove it)
$('.wand').remove()
//Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
$('li').first().remove();
//Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
// const $h4newWand = $('<h4/>')
$('h4').after('<h4>Wand of Destruction</h4>')
$('h4:last').addClass('newWand')
// $('h4:last')
// $('$h4newWand').last()
// $("h4").last().addClass('newWand');
//having some trouble with classes

// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your style.css file

$('.newWand').css('color','indigo')

// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
let clone = $(".dog").clone(); // making zeh' clones!
$(".dog").remove();            // original is gone
//Theodore went to the Forbidden Forest

// Have your pet come back (remove your pet from the DOM, put it back in its original location)

$("h3").append(clone); 
//he back....or is he


//--------------------YEAR 6

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)


$('.secret').hide('slow')

// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
$('.secret').hide('slow').delay(2000)


// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)

$('.secret').hide('slow').show('slow')

//Accident! You transmogrified your pet's leash into half cabbage
//add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected

// $('ul li').children().eq(2).addClass('cabbage');
//still having trouble with these classes

$( "li" ).eq( 3 ).addClass( 'cabbage' );
// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)

$( "li" ).eq( 3 ).removeClass( 'cabbage' );

//------------------YEAR 7


// Though your time at Hogwarts is nearly over, your journey of learning has just begun

// Update your class schedule to read 'Fall 2018'
$('h5').text('Fall 2018')

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
$('ul').prepend('<li>More Butter Beer</li>')

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
$('ul').attr('storage','chest');

// Add some CSS to your page. Feel free to experiment and make this page your own
































