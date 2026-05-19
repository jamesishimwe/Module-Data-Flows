// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble

// 3. Make a cow that takes a string
let topLine = '_';
let bottomLine = '-';
let saying = '';

const cow = (saying) => {
    // how did you make the cow before?
    saying = ' '+saying+' ';
    for(let i=1;i<saying.length;i++)
{
    topLine += "_"; 
    bottomLine+='-';
}

 let cow =` ${topLine}\n<${saying}>\n ${bottomLine}\n         \\    ^__^\n          \\   (oo)\\_______\n              (__)\\       )\\/\\ \n                 ||----w |\n                 ||     ||`;
    console.log(cow);
}


// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
const readLineSync = require('readline-sync');
const response = readLineSync.question('Write something:');
cow(response);