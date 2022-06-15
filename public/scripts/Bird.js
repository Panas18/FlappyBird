birdStyle = [
  "redbird-upflap.png",
  "redbird-midflap.png",
  "redbird-downflap.png",
];

class Bird {
  constructor() {
    this.element = document.createElement("div");
    gameArea.appendChild(this.element);
    this.currentY = 200;
    this.velocity = 1;
    this.angle = 0;
    this.element.style.position = "absolute";
    this.element.style.width = "34px";
    this.element.style.height = "24px";
    this.element.style.top = this.currentY + "px";
    this.element.style.left = "50px";
  }
  animate() {
    let styleIndex = 0;
    setInterval(() => {
      let image = `url('./images/${birdStyle[styleIndex]}')`;
      this.element.style.backgroundImage = image;
      styleIndex += 1;
      if (styleIndex == 3) {
        styleIndex = 0;
      }
    }, 1000 / 30);
  }

  drop() {
    setInterval(() => {
      this.currentY += 1 * this.velocity;
      this.angle += 2;
      if(this.angle >= 90){
        this.angle = 90
      }
      this.velocity += 0.2;
      this.element.style.top = this.currentY + "px";
      this.element.style.transform = `rotate(${this.angle}deg)`;
    }, 1000 / 60);
  }
}

bird = new Bird();
bird.animate();
bird.drop();
