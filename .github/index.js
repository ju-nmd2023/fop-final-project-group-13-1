import Player from "./Player";
import Floor from "./Floor";
import Spike from "./Spike";

let drawable = [];

function setup() {
  const bob = new Player();
  const floor = new Floor();
  const spike = new Spike();
  drawable.push(bob);
  drawable.push(floor);
  drawable.push(spike);
}

function draw() {
  drawable.forEach(function (object) {
    object.update(drawable[0]);
    object.draw();
  });
  // get the input
}
