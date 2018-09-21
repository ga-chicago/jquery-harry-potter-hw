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
$('#container').append('<h3>Ravenclaw</h3>')
// h4 element with your pet's name
const $h4 = $('<h4/>')
$('#container').append('<h4>Theodore</h4>')
//this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
$('h4').addClass('dog')
console.log($h4)
// h4 element with your wand
const $h4wand = $('<h4/>')
$('#container').append('<h4>Elder Wand</h4>')



//----------------YEAR 3

// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
const $ul = $('<ul/>');
$('#container').append('<ul></ul>')
console.log($ul)
$('ul').attr('storage')
$('ul').val('trunk')

const $li = $('<li/>')
$('ul').append('<li>butter beer</li>')
// $('ul').append('<li>invisibility</li>')
const $liInvis = $('<li/>')
$('ul').append('<li>Invisibility cloak</li>')
$('li').addClass('secret')
// $('ul').append('<li>magic map</li>')
const $liMap = $('<li/>')
$('ul').append('<li>Magic Map</li>')
$('li').addClass('secret')
$('ul').append('<li>time turner</li>')
$('ul').append('<li>leash</li>')
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
const $table = $('<table/>')
$('#container').append('<table></table>')
$('table').append('<thead></thead>')
//Inside the table add a thead element
const $th1 = $('<th/>')
$('thead').append('<th>Day</th>')
const $th2 = $('<th/>')
$('thead').append('<th>Classes</th>')
$('thead').append('<tr/>')
// Inside the thead element add two th elements
const $td1 = $('<td/>')
$('tr').append('<td>Monday</td>')
const $td2 = $('<td/>')
$('tr').append('<td>Herbology, Divination, Potions.')


// $('thead').append('</tr>')
const $td3 = $('<td/>')
$('tr').append('<td>Tuesday</td>')
const $td4 = $('<td/>')
$('tr').append('<td>Defense Against the Dark Arts, Quidditch practice')


// $('thead').append('</tr>')
const $td5 = $('<td/>')
$('tr').append('<td>Wednesday</td>')
const $td6 = $('<td/>')
$('tr').append('<td>History of Magic.')


// $('thead').append('</tr>')
const $td7 = $('<td/>')
$('tr').append('<td>Thursday</td>')
const $td8 = $('<td/>')
$('tr').append('<td> Herbology, Divination, Potions.')


// $('thead').append('</tr>')
const $td9 = $('<td/>')
$('tr').append('<td>Friday</td>')
const $td10 = $('<td/>')
$('tr').append('<td>Defense Against the Dark Arts, Quidditch practice')



