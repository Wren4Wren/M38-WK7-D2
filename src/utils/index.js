const fs = require("fs");

const addFilm = (filmObj) => {
  try {
    //   We use JSON.stringyfy to turn the object into a string
    const stringyObj = JSON.stringify(filmObj);
    // We use file sync package [fs] to create a file called storage.json and add whatever data we pass into our terminal
    fs.writeFileSync("./storage.json", stringyObj);
    // catch any errors that may occur in try block
  } catch (error) {
    console.log(error);
  }
};

const listFilms = () => {
  try {
    //   We use fs and the built in readFileSync to read the data in the .json file
    const filmList = fs.readFileSync("./storage.json");
    //   parse the data to be readable
    const list = JSON.parse(filmList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addFilm, listFilms };
