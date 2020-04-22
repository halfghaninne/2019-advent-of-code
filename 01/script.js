const fs = require('fs');
const readline = require('readline');
const path = require('path');
let total = 0;

// Hello!

const readStream = fs.createReadStream(path.join(__dirname, '/input.txt'), { emitClose: true });
    const rl = readline.createInterface({
      input: readStream
    });
    rl.on('line', (line) => {
      incrementTotal(calculateFuelForModuleandFuel(line))
    });
    rl.on('close', () => {
      console.log(`total fuel required is ${total}`);
    });

// function calculateFuelForModuleandFuel(mass) {
//   fuelMass = calculateFuel(mass);
//   recursivelyCalculateFuel(fuelMass)
// }

// function calculateFuel(mass) {
//   return Math.floor(parseInt(mass)/3) - 2;
// }
// function recursivelyCalculateFuel(fuelMass) {
//   if (fuelMass<=0) return;
//   if (fuelMass>0) return calculateFuel(fuelMass);
//   return recursivelyCalculateFuel(fuelMass);
// }

// function calculateFuelForModuleandFuel(mass) {
//   const fuelMass = calculateFuel(mass);
//   const fuelForFuel = recursivelyCalculateFuel(fuelMass)
//   return fuelForFuel
// }

function calculateFuelForModuleandFuel(mass) {
  const fuelMass = calculateFuel(mass);
  const fuelForFuel = recursivelyCalculateFuel(fuelMass)
  return fuelForFuel
}

function calculateFuel(mass) {
  return Math.floor(parseInt(mass)/3) - 2;
}

function recursivelyCalculateFuel(fuelMass) {
  if (calculateFuel(fuelMass)<=0) return fuelMass;
  return fuelMass + recursivelyCalculateFuel(calculateFuel(fuelMass));
}

function incrementTotal(fuel) {
  return total = total + fuel;
}

function calculateFuel(mass) {
  return Math.floor(parseInt(mass)/3) - 2;
}

// function recursivelyCalculateFuel(fuelMass) {
//   if (calculateFuel(fuelMass)<=0) return parseInt(fuelMass);
//   return (parseInt(fuelMass) + parseInt(recursivelyCalculateFuel(calculateFuel(fuelMass))));
// }

// ['14', '1969'].forEach(n => incrementTotal(calculateFuelForModuleandFuel(n)));

// console.log(total);