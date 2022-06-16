class Pipe {
  constructor(startPos) {
    this.x = startPos;
    this.topHeight = genRandomInt(275, 0);
    this.bottomHeight = 425 - GAP - this.topHeight;
    this.topPipe = document.createElement("div");
    this.bottomPipe = document.createElement("div");
    this.colliding = false;
    gameArea.appendChild(this.topPipe);
    gameArea.appendChild(this.bottomPipe);
    this.topPipe.style.backgroundImage = "url('./images/pipe-green.png')";
    this.topPipe.style.backgroundRepeat = "no-repeat";
    this.topPipe.style.width = PIPEWIDTH + "px";
    this.topPipe.style.height = `${this.topHeight}px`;
    this.topPipe.style.transform = "rotate(180deg)";
    this.topPipe.style.position = "absolute";
    this.topPipe.style.left = `${this.x}px`;

    this.bottomPipe.style.backgroundImage = "url('./images/pipe-green.png')";
    this.bottomPipe.style.backgroundRepeat = "no-repeat";
    this.bottomPipe.style.width = PIPEWIDTH + "px";
    this.bottomPipe.style.height = `${this.bottomHeight}px`;
    this.bottomPipe.style.position = "absolute";
    this.bottomPipe.style.bottom = "0px";
    this.bottomPipe.style.left = `${this.x}px`;
  }

  move() {
    this.x -= 1;
    this.topPipe.style.left = `${this.x}px`;
    this.bottomPipe.style.left = `${this.x}px`;
    if (this.x <= -52) {
      this.x = RESTARTPOS;
      this.topHeight = genRandomInt(275, 0);
      this.bottomHeight = 425 - GAP - this.topHeight;
      this.topPipe.style.height = `${this.topHeight}px`;
      this.bottomPipe.style.height = `${this.bottomHeight}px`;
      this.bottomPipe.style.left = `${RESTARTPOS}px`;
      this.topPipe.style.left = `${RESTARTPOS}px`;
    }
  }
}
