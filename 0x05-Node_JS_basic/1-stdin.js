const readline = require('readline');

function runProgram() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to Holberton School, what is your name?');

  if (process.stdin.isTTY) {
    rl.on('line', (name) => {
      if (name.trim() === '') {
        console.log('This important software is now closing');
        rl.close();
      } else {
        console.log(`Your name is: ${name}`);
        console.log('This important software is now closing');
        rl.close();
      }
    });
  } else {
    rl.on('line', (name) => {
      console.log(`Your name is: ${name}`);
      console.log('This important software is now closing');
      rl.close();
    });
  }
}

module.exports = runProgram;

if (require.main === module) {
  runProgram();
}
