const fetchBreedDescription = require('./breedFetcher');
const readline = require('readline');

process.stdin.setEncoding('utf8');

const breedArg = process.argv.slice(2, 3);

const breedCallback = (error, breedDescription) => {
  if (error) {
    console.error(error);
    return error;
  } else {
    console.log(breedDescription);
    return (breedDescription);
  }
};

const fetchBreed = (breed, callback) => {
  fetchBreedDescription(breed, callback);
};

fetchBreed(breedArg, breedCallback);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log('Attempting to access breed: ', input);
  fetchBreed(input, breedCallback);
});