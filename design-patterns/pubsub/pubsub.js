const pubsub = {
  events: {},
  subscribe: function (eventName, fn) {
    console.log(`PUBSUB : someone just subscribe to know about ${eventName}`);

    // add an event with a name or to existing list
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  publish: function (eventName, data) {
    console.log(`PUBSUB : making a broadcast about ${eventName} with ${data}`);
    // emit / publish the event to anyone who is subscribed
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => {
        f(data);
      });
    }
  },
  unsubscribe: function (eventName, data) {
    console.log(`PUBSUB: someone just UNsubscribed from ${eventName}`);
    //remove an event function by name
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((f) => f !== fn);
    }
  },
};

module.exports = pubsub;
