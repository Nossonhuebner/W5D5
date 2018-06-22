const readline = require('readline');

 reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0 ) {
    reader.question('what number would you like to add?', (res) => {
      let num = parseInt(res);
      sum += num;
      console.log(`the current sum is ${sum}`);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  } else if (numsLeft === 0 ) {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
