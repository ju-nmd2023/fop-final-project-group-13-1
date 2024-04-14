class Spike {
  constructor() {
    this.x = 150;
    this.y = 400;
    this.width = 50;
    this.height = 50;
    this.xVelocity = -1;
  }

  draw() {
    fill(0, 200, 0);
    let a = {
      x: this.x,
      y: this.y,
    };
    let b = {
      x: this.x + this.width,
      y: this.y,
    };
    let c = {
      x: this.x + this.width / 2,
      y: this.y - this.height,
    };
    triangle(a.x, a.y, b.x, b.y, c.x, c.y);
  }

  update(player) {
    this.x = this.x + this.xVelocity;

    if (this.isHitting(player.getHitbox())) {
      this.xVelocity = 0;
      console.log("haha u looser");
    }
  }

  // h = player hitbox
  isHitting(h) {
    let x1 = this.x <= h.x + h.width && h.x <= this.x + this.width;
    let y1 = this.y <= h.y + h.height && h.y + h.height <= this.y + this.height;

    let x2 = this.y - this.height <= h.y && h.y <= this.y;
    let y2 = this.x <= h.x + h.width && h.x + h.width <= this.x + this.width;

    return (x1 && y1) || (x2 && y2);
  }
}
