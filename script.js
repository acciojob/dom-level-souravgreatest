//your JS code here. If required.
// script.js
let element = document.getElementById("level");
let level = 0;
while (element) {
  level++;
  element = element.parentElement;
}
alert("The level of the element is: " + level);
