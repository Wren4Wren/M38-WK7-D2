const yargs = require("yargs");

const { addFilm, listFilms } = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    addFilm({ title: yargsObj.title, actor: yargsObj.actor });
  } else if (yargsObj.list) {
    //   Call list as we aren't inputing any data, but calling on input as a list
    listFilms();
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
