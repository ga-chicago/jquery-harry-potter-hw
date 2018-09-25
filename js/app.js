

let $container = $('#container');
let $h1 = $('<h1/>').text('Hogwarts');
$container.append($h1);
let $h2 = $('<h2/>').text('Ashley')
$container.append($h2);
let $h3 = $('<h3/>').text('Slytherin')
$container.append($h3);
let $h4Pet = $('<h4/ class="pet">').text('cat')
$container.append($h4Pet);
let $h4 = $('<h4/>').text('Hawthorn, Phoenix feather core, 10 and 3/4 in length, hard flexibility');
$container.append($h4);
//Looked up list of attributes, and not sure what one I would use for storage? Used type. 
let $ul = $('<ul/ storage="trunk">').append('<li>butter beer</li><li class="secret">invisibility cloak</li><li class ="secret">Marauders map</li><li class="secret">time turner</li><li class="pet">leash</li><li>Bertie Botts Every Flavor [Jelly] Beans</li>');
$container.append($ul);
let $h5 = $('<h5/>').text('Spring 2019')
$container.append($h5);
let $table = $('</table>');
$container.append($table);
let $thead = $('<thead/>');
$container.append($thead);
let $th1 = $('<th/>').text('Day');
$container.append($th1);
let $th2 = $('<th/>').text('Classes');
$container.append($th2)
//days/classes
let $trMonday = $('<tr/>').append('<td>Monday</td><td>Herbology, Potions, Transfiguration</td>');
$container.append($trMonday);
let $trTuesday = $('<tr/>').append('<td>Tuesday</td><td>History of Magic, Charms, Defense Against the Dark Arts </td>');
$container.append($trTuesday);
let $trWednesday = $('<tr/>').append('<td>Wednesday</td><td> Potions, Ancient Runes, Care of Magical Creatures</td>');
$container.append($trWednesday);
let $trThursday = $('<tr/>').append('<td>Thursday</td><td>Divination, Herbology, Transfiguration Arithromancy</td>');
$container.append($trThursday);
let $trFriday = $('<tr/>').append('<td>Friday</td><td>Defense Against the Dark Arts, Potions, Charms</td>');
$container.append($trFriday);



$('h4:contains("Hawthorn, Phoenix feather core, 10 and 3/4 in length, hard flexibility")').remove();

$('li:contains("butter beer")').remove();


$h4 = $('<h4/>').text('Vine, Dragonstring feather core, 8 and 3/4 in length, flexible');
$h4Pet.after($h4);

$h4.css('color', 'indigo');


$('h4:contains("cat")').remove();
$h5.before($h4Pet);
$('h4:contains("cat")').remove();
$h4.before($h4Pet);

$('.secret').hide('slow').delay(2000);
$('.secret').show('slow');

$('li:contains("leash")').addClass("cabbage");
$('li:contains("leash")').removeClass("cabbage");


$('h5').remove();
$h5 = $('<h5/>').text('Fall 2018')
$ul.after($h5);

$('ul:first').prepend('<li>Butter Beer</li>');
$('ul').attr('storage', 'chest');



