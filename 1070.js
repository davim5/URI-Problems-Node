const readline = require('readline');

var read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question('', resp = N => {

  let n = parseInt(N);

  if (n % 2 === 0) n = n + 1;

  for (let x = 0; x <= 5;x+=1) {
    console.log(n + 2 * x);
    
  }
  read.close();
});