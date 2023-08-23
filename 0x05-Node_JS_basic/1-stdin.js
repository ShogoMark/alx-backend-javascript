const readline = require('readline');
const { spawn } = require('child_process');

function runProgram() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to Holberton School, what is your name?');

  rl.on('line', (name) => {
    if (name.toLowerCase() === 'exit') {
      console.log('This important software is now closing');
      rl.close();
    } else {
      const ls = spawn('ls', ['-lh', '/usr']);
      // eslint-disable-next-line no-unused-vars
      ls.stdout.on('data', (data) => {
        console.log(`Your name is: ${name}`);
      });
    }
  });
}

module.exports = runProgram;

if (require.main === module) {
  runProgram();
}
