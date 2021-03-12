const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      const data = JSON.parse(body)[0]; // gives object corresponding to cat breed details
      if (!data) {
        callback((`Breed, ${breed}, not found. Please try again.`)); // return error if breed not found
      } else {
        callback(error, data.description); // if connection succeeded and breed exists, callback function
      }
    }
  });
};

module.exports = fetchBreedDescription;