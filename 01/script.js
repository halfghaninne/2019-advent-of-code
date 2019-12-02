const fs = require('fs');
const readline = require('readline');
const path = require('path');
let total = 0;

const readStream = fs.createReadStream(path.join(__dirname, '/input.txt'), { emitClose: true });
    const rl = readline.createInterface({
      input: readStream
    });
    rl.on('line', (line) => { 
      incrementTotal(
        calculateFuel(line)
      );
    });
    rl.on('close', () => {
      console.log(`total fuel required is ${total}`);
    });

function calculateFuel(mass) {
  return Math.floor(parseInt(mass)/3) - 2;
}

function incrementTotal(fuel) {
  total = total + fuel;
}