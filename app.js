
/*
 - Create a variable that should NOT have its value reasigned --> const profileDataArg
 - Equal this variable to "process.argv" --> This property returns an array containing the command-line arguments passed when the Node.js process was launched.
    * Process is a global object that represents everything in a particular app. Like "document" or "window" in the browser
    * argv (a property of process) --> an ARRAY that holds exactly what was typed in the command line
    * .slice(2) --> returns a new array based on process.argv astarting a the THIRD index (2)
    * process.argv.length --> iteration as per the process.argv
 */
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const fs = require('fs');
//inporting from the page-template.js the html frame
const generatePage = require('./src/page-template.js');

/*
- accessint the file system
- using the writeFile functionality
- 3 arguments inside: 1- name of the file, 2- the data that's beeing written, 3- callback for errors
 */
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output');
});


