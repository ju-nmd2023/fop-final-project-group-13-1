class Player {
  // constructor
  constructor() {
    this.x = 100;
    this.y = 350;
    this.hp = 100;
    this.yVelocity = 0;
    this.size = 50;
  }

  draw() {
    // draw an actual character
    fill(255, 255, 255);
    rect(this.x, this.y, this.size, this.size);
  }

  changeSize(newSize) {
    this.size = newSize;
  }

  update() {}

  getHitbox() {
    return {
      x: this.x,
      y: this.y,
      width: this.size,
      height: this.size,
    };
  }
}
