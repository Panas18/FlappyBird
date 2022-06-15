birdStyle = [
  "redbird-upflap.png",
  "redbird-midflap.png",
  "redbird-downflap.png",
];

class Bird {
  constructor() {
    this.element = document.createElement("div");
    gameArea.appendChild(this.element);
    this.element.style.position = "absolute";
    this.element.style.width = "34px";
    this.element.style.height = "24px";
    this.element.style.top = "50%";
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
}

bird = new Bird();
bird.animate();
