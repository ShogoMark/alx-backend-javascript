const readline = require('readline');
const { spawn } = require('child_process');

console.log("Welcome to Holberton School, what is your name?");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (name) => {
  if (name.toLowerCase() === 'exit') {
    console.log("This important software is now closing");
    rl.close();
  } else {
    const ls = spawn('ls', ['-lh', '/usr']);
    ls.stdout.on('data', (data) => {
      console.log(`Your name is: ${name}`);
    });
  }
});
