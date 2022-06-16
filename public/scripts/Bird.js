class Bird {
  constructor() {
    this.element = document.createElement("div");
    gameArea.appendChild(this.element);
    this.currentY = 100;
    this.x = 50;
    this.velocity = 1;
    this.angle = 0;
    this.width = 34;
    this.height = 24;
    this.element.style.position = "absolute";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.top = this.currentY + "px";
    this.element.style.left = this.x + "px";
    this.isjumping = false;
    this.iscolliding = false;
  }

  fly() {
    let styleIndex = 0;
    let flyAnimation = setInterval(() => {
      let image = `url('./images/${birdStyle[styleIndex]}')`;
      this.element.style.backgroundImage = image;
      styleIndex += 1;
      if (styleIndex == 3) {
        styleIndex = 0;
      }
      if (this.iscolliding) {
        clearInterval(flyAnimation);
        this.drop();
      }
    }, 1000 / 30);
  }

  drop() {
    let dropAnimation = setInterval(() => {
      this.currentY += 1 * this.velocity;
      this.angle += 2;
      if (this.angle >= 90) {
        this.angle = 90;
      }
      this.velocity += 0.3;
      this.element.style.top = this.currentY + "px";
      this.element.style.transform = `rotate(${this.angle}deg)`;
      if (this.currentY >= 385) {
        this.iscolliding = true;
      }
      if (this.isjumping || this.currentY >= 385) {
        clearInterval(dropAnimation);
      }
    }, 1000 / 60);
  }

  jump() {
    this.velocity = 0;
    this.isjumping = true;
    this.angle = -30;
    let change = 0;
    let jumpAnimation = setInterval(() => {
      this.currentY -= 10;
      change += 10;
      this.element.style.top = this.currentY + "px";
      this.element.style.transform = `rotate(${this.angle}deg)`;
      if (change >= 50 || this.currentY <= 20) {
        clearInterval(jumpAnimation);
        this.isjumping = false;
        this.drop();
      }
    }, 1000 / 60);
  }
}
