"use strict";

import fs from "fs";
import fetch from "node-fetch";

let rawdata = fs.readFileSync("movies.json");
let movies = JSON.parse(rawdata);

// tt2106476

(async () => {
  for (let i in movies.items) {
    fetch(`https://imdb-api.com/pl/API/Title/k_p4uej9vf/${movies.items[i].id}`).then(res => res.json()).then(d => {
        movies.items[i] = {...movies.items[i], ...d};
          fs.writeFileSync("movies2.json", JSON.stringify(movies));
    });
  }
})();
