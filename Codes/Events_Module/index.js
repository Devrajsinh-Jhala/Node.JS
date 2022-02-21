// Always on() must be before emit()
const EventEmitter = require("events");
const event = new EventEmitter();

// Emitted event called multiple times
event.on("Hello", () => {
  console.log("Hello 👋");
});

event.on("Hello", () => {
  console.log("Hello 👋");
});

// Parameterized Listener
event.on("checkPage", (sc, msg) => {
  console.log(`Status Code: ${sc} and Page Condition: ${msg}`);
});

// Created an event
event.emit("Hello");
event.emit("checkPage", 200, "ok");
