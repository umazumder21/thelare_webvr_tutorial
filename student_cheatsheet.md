Shell Commands

ls - list files
mkdir ${dirname}- make directory
rmdir ${dirname} - remove directory
touch ${filename}- create file
rm ${filename}- remove file
pwd - print current path
open ${filename} (opens based on extension, html will be opened in the browser)
. - current location
.. - one leve up
executables
cd ${dirname}- change directory

HTML

<tag> </tag> - Syntax to add elements to a HTML page

<script src="${filename}.js"></script> // This embeds a javascript file to the html page.

<div id="class-name-for-element"></div> // Create an element


<br> </br> - Line break

Javascript

var variableName = "foo" // This is a string

var variableName = 45 // This is an integer

var variableName = function () {
  console.log("This is printed out.")
  alert("This shows a pop up");
};

// Call a function on a HTML element
var variableName = new VRView.Player('#class-name-for-element', {
  width: '100%',
  height: '100%',
});

Key bindings

cmd + tab - To switch between apps

cmd + shift + p - To access atom's command palette

cmd + space - To open apps
