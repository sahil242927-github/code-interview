const pubsub = require("./pubsub");

const Movie = {
  list: [],
  add: function (name) {
    this.list.push(name);

    console.log("Hello I am Movie, just to inform that I have added a movie");
    pubsub.publish("MovieAdded", `Movie: ${name}`);
  },
};

module.exports = Movie;
