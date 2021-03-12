const fetchBreedDescription = require('./breedFetcher');
const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const breedArg = process.argv.slice(2, 3);

const breedCallback = (error, body, breedInput) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Breed, ${breedInput}, not found. Please try again.`);
    return;
  }
  console.log(data);
};

const fetchBreed = (breed, callback) => {
  fetchBreedDescription(breed, callback);
};

fetchBreed(breedArg, breedCallback);

rl.on('line', (input) => {
  console.log('Attempting to access breed: ', input);
  fetchBreed(input, breedCallback);
});