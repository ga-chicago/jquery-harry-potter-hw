console.log("works");

const $container = $("#container");
// console.log($container);

const $h1 = $("<h1/>");
$('#container').append('<h1>Hogwarts</h1>')
// console.log($h1);
const $h2 = $("<h2/>");
// console.log($h2);
$('#container').append('<h2>Fil</h1>')
const $h3 = $("<h3/>");
// console.log($h3);
$('#container').append('<h3>Slytherin</h3>')
const $h4 = $("<h4/>");
$('#container').append("<h4>Mac</h4>")
$('h4').addClass("cat")
// console.log($h4);
const $h4wand = $("<h4/>")
$('#container').append("<h4>Awesome Wand</h4>")
//--------  Year 3

const $ul = $('<ul/>')
$("#container").append("<ul></ul>")
$('#ul').attr('storage')
$('#ul').val('trunk')
// console.log($ul);
// $('#ul').append("<li>butterbeer</li>")

const $li = $('<li/>')
$('ul').append("<li>butterbeer</li>")
$('ul').append("<li>invisibility</li>").addClass('secret')
$('ul').append("<li>magic map</li>").addClass('secret')
$('ul').append("<li>time turner</li>").addClass('secret')
$('ul').append("<li>leash</li>").addClass('cat')
$('ul').apped("<li>Bertie Bott's Every Flavor[Jelly] Beans </li>")
$('container').append("ul")