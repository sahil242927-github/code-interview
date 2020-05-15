const pubsub = require("./pubsub");

const Actor = {
  list: [],
  add: function (name) {
    this.list.push(name);
    pubsub.subscribe("MovieAdded", (name) => {
      console.log(
        `Hello I am Actor, thanks to let me know Movie: "${name}" is added!`
      );
    });
    pubsub.publish("ActorAdded", `Actor: ${name}`);
  },
};

module.exports = Actor;
