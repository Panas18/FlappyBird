const PIPEWIDTH = 52;
const GAP = 80;
const RESTARTPOS = -60;

class Pipe {
  constructor(startPos) {
    this.x = startPos;
    this.topHeight = genRandomInt(320, 70);
    this.bottomHeight = 425 - GAP - this.topHeight;
    this.topPipe = document.createElement("div");
    this.bottomPipe = document.createElement("div");
    gameArea.appendChild(this.topPipe);
    gameArea.appendChild(this.bottomPipe);
    this.topPipe.style.backgroundImage = "url('./images/pipe-green.png')";
    this.topPipe.style.backgroundRepeat = "no-repeat";
    this.topPipe.style.width = PIPEWIDTH + "px";
    this.topPipe.style.height = `${this.topHeight}px`;
    this.topPipe.style.transform = "rotate(180deg)";
    this.topPipe.style.position = "absolute";
    this.topPipe.style.right = `${this.x}px`;

    this.bottomPipe.style.backgroundImage = "url('./images/pipe-green.png')";
    this.bottomPipe.style.backgroundRepeat = "no-repeat";
    this.bottomPipe.style.width = PIPEWIDTH + "px";
    this.bottomPipe.style.height = `${this.bottomHeight}px`;
    this.bottomPipe.style.position = "absolute";
    this.bottomPipe.style.bottom = "0px";
    this.bottomPipe.style.right = `${this.x}px`;
  }

  move() {
    setInterval(() => {
      this.x += 1;
      this.topPipe.style.right = `${this.x}px`;
      this.bottomPipe.style.right = `${this.x}px`;
      if (this.x >= 350) {
        this.x = RESTARTPOS;
        this.topHeight = genRandomInt(320, 70);
        this.bottomHeight = 425 - GAP - this.topHeight;
        this.topPipe.style.height = `${this.topHeight}px`;
        this.bottomPipe.style.height = `${this.bottomHeight}px`;
        this.bottomPipe.style.right = `${RESTARTPOS}px`;
        this.topPipe.style.right = `${RESTARTPOS}px`;
      }
    }, 1000 / 60);
  }
}

pipe1 = new Pipe((startPos = -56));
pipe2 = new Pipe((startPos = -250));
pipe1.move();
pipe2.move();
