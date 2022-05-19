/*
 - Create a variable that should NOT have its value reasigned --> const profileDataArg
 - Equal this variable to "process.argv" --> This property returns an array containing the command-line arguments passed when the Node.js process was launched.
    * Process is a global object that represents everything in a particular app. Like "document" or "window" in the browser
    * argv (a property of process) --> an ARRAY that holds exactly what was typed in the command line
    * .slice(2) --> returns a new array based on process.argv astarting a the THIRD index (2)
    * process.argv.length --> iteration as per the process.argv
 */
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
const fs = require('fs');

console.log(profileDataArgs);

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

/*
- accessint the file system
- using the writeFile functionality
- 3 arguments inside: 1- name of the file, 2- the data that's beeing written, 3- callback for errors
 */
FileSystem.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output');
});


