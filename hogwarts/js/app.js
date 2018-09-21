console.log('It is linked');

const $container = $("#container");

const $h1 = $("<h1>Hogwarts</h1>")

const $h2 = $("<h2>Chris</h2>");

const $h3 = $("<h3>Slytherin</h3>");

const $petH4 = $("<h4 class='toad'>Citizen Cane</h4>")

const $h4 = $("<h4>Red Mahogany Wand with Dragon Heartstring Core</h4>");

// const $ul = $("<ul> <li>Butter Beer</li><li class='secret'>Marauder's Map</li> <li class='secret'>Invisibility Cloak</li> <li class ='secret'>Time Turner</li> <li class='toad'>leash</li><li>Bertie Bott's Every Flavor Beans</li></ul>")

const $h5 = $("<h5>Spring 2017</h5>")

const $table = $("<table> <tr><th>Day</th><th>Classes</th></tr> <tr><th>Monday</th><th>Transfiguration, Charms</th></tr> <tr><th>Tuesday</th><th> Divination, History of Magic</th></tr> <tr><th>Wednesday</th><th>Transfiguration, Charms</th></tr></tr> <tr><th>Thursday</th><th>Herbology, Potions</th></tr> <tr><th>Friday</th><th>Defense Against the Dark Arts</th></tr> </table>")

const $li1 = $("<li>Butter Beer</li>")

const $li2 = $("<li class='secret'>Marauder's Map</li>")

const $li3 = $("<li class='secret'>Invisibility Cloak</li>")

const $li4 = $("<li class ='secret'>Time Turner</li>")

const $li5 = $("<li class='toad'>leash</li>")

const $li6 = $("<li>Bertie Bott's Every Flavor Beans</li>")

// This doesnt change the html console...

$container.append($h1)
$container.append($h2)
$container.append($h3)
$container.append($petH4)
$container.append($h4)
$container.append($li1)
$container.append($li2)
$container.append($li3)
$container.append($li4)
$container.append($li5)
$container.append($li6)
$container.append($h5)
$container.append($table)


// This code doesn't change the html console either...

// console.log($h1);

// $h2.text("Chris");

// $h3.text("Slytherin");

// $petH4.text("Citizen Cane")

// $h4.text("Birch Wand with a Phoenix Feather Core")

// $h4.remove()

$li1.remove()

$h4.css("color", "red")

// $("head").append($petH4)






