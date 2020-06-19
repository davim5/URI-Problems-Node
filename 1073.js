const readline = require('readline');

var read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question('',resp = N => {
  for (let x = 2; x <= N; x += 2) {
    console.log(x + '^2 = ' + x*x)
  }
  read.close();
});