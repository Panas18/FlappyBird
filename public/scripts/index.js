pipe1 = new Pipe((startPos = 350));
pipe2 = new Pipe((startPos = 550));
pipe2.move();
pipe1.move();

bird = new Bird();
bird.fly();
// bird.drop();

document.addEventListener("keyup", (e) => {
  if (e.key == " ") {
    bird.jump();
  }
});

function genPipesObj(pipe1, pipe2) {
  pipe1top = {
    x: pipe1.x,
    y: 0,
    w: PIPEWIDTH,
    h: pipe1.topHeight,
  };

  pipe1bottom = {
    x: pipe1.x,
    y: 425 - pipe1.bottomHeight,
    w: PIPEWIDTH,
    h: pipe1.bottomHeight,
  };

  pipe2top = {
    x: pipe2.x,
    y: 0,
    w: PIPEWIDTH,
    h: pipe2.topHeight,
  };

  pipe2bottom = {
    x: pipe2.x,
    y: 425 - pipe2.bottomHeight,
    w: PIPEWIDTH,
    h: pipe2.bottomHeight,
  };
  pipes = [pipe1top, pipe1bottom, pipe2top, pipe2bottom];
  return pipes;
}

function detectCollision(pipe1, pipe2, bird) {
  let index = 0;
  setInterval(() => {
    pipesObj = genPipesObj(pipe1, pipe2);
    pipe = pipesObj[index];
    if (
      bird.x + bird.width >= pipe.x &&
      bird.x <= pipe.x + pipe.w &&
      bird.currentY + bird.height >= pipe.y &&
	  bird.currentY <=  pipe.y + pipe.h
    ) {
      console.log("collision");
    }
    index += 1;
    if (index == 4) {
      index = 0;
    }
  }, 1000 / 60);
}

detectCollision(pipe1, pipe2, bird);
