
// /*
//  (DELETED) - Create a variable that should NOT have its value reasigned --> const profileDataArg
//  (DELETED)- Equal this variable to "process.argv" --> This property returns an array containing the command-line arguments passed when the Node.js process was launched.
//     * Process is a global object that represents everything in a particular app. Like "document" or "window" in the browser
//     * argv (a property of process) --> an ARRAY that holds exactly what was typed in the command line
//     * .slice(2) --> returns a new array based on process.argv astarting a the THIRD index (2)
//     * process.argv.length --> iteration as per the process.argv
//  */

const inquirer = require('inquirer') 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])

// //CONST FS will open path to the body of content for packages
// const fs = require('fs');
// //inporting from the page-template.js the html frame
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
// /*
// - accessint the file system
// - using the writeFile functionality
// - 3 arguments inside: 1- name of the file, 2- the data that's beeing written, 3- callback for errors
//  */
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output');
// });


