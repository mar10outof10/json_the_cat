const breedArg = process.argv.slice(2,3);

const request = require('request');
const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const requestBreed = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed, ${breed}, not found. Please try again.`);
      return;
    }
    console.log(data);
    console.log(data[0]["id"]);
  });
};

rl.on('line', (input) => {
  console.log('Attempting to access breed: ', input);
  requestBreed(input);
});

requestBreed(breedArg);