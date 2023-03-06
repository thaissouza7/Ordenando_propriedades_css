const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let cssProperties = [];

function printSortedProperties() {
  cssProperties.sort();
  console.log(cssProperties.join('\n'));
}


function askProperties() {
  rl.question('Digite uma propriedade CSS ou SAIR para finalizar:\n', (answer) => {
    if (answer.toUpperCase() === 'SAIR') {
      printSortedProperties();
      rl.close();
    } else {
      cssProperties.push(answer);
      askProperties();
    }
  });
}


askProperties();
