console.log('It is linked');

const $container = $("#container");

const $h1 = $("<h1>Hogwarts</h1>").append("#container");

const $h2 = $("<h2>Chris</h2>");

const $h3 = $("<h3>Slytherin</h3>");

const $petH4 = $("<h4 class='toad'>Citizen Cane</h4>")
const $h4 = $("<h4>Birch Wand with a Phoenix Feather Core</h4>");

const $ul = $("<ul> <li>Butter Beer</li><li class='secret'>Marauder's Map</li> <li class='secret'>Invisibility Cloak</li> <li>Time Turner</li> <li class='toad'>leash</li><li>Bertie Bott's Every Flavor Beans</li></ul>")

// This doesnt change the html console...

$container.append($h1)
$container.append($h2)
$container.append($h3)
$container.append($petH4)
$container.append($h4)
$container.append($ul)

$h1.text("Hogwarts")

// This code doesn't change the html console either...

// console.log($h1);

// $h2.text("Chris");

// $h3.text("Slytherin");

// $petH4.text("Citizen Cane")

// $h4.text("Birch Wand with a Phoenix Feather Core")






