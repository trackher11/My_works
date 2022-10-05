// refer here https://nodejs.org/api/events.html

import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  console.log("Switch of the tap!");
  setTimeout(() => {
    console.log("reminder to turn of the tap.");
  }, 3000);
});
console.log("log 1");
myEmitter.emit("WaterFull");
console.log("log 2");
