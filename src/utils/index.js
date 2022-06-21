const fs = require("fs");

const addFilm = (filmObj) => {
  try {
    const stringyObj = JSON.stringify(filmObj);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const listFilms = () => {
  try {
    const filmList = fs.readFileSync("./storage.json");
    console.log(filmList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addFilm, listFilms };
