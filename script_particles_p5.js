let p = [];
const renderscale = 4;
let text_random_words = ["X"];
function setup() {
  const canvas = createCanvas(
    displayWidth / renderscale,
    displayHeight / renderscale
  );
  canvas.position(0, 0, "absolute");
  canvas.style("z-index", "-100");
  canvas.style("width", "100%");
  canvas.style("height", "100%");

  //   canvas.style("filter", "blur(1px)");

  for (let i = 100; i >= 0; --i) {
    p.push(new raindrop());
  }
  for (let i = p.length - 1; i >= p.length / 2; --i) {
    p[i].y = random(height / 1.5);
  }
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  noStroke();
  fill(200, 150);
  for (let i = p.length - 1; i >= 0; --i) {
    p[i].work();
    if (p[i].y > height * 1.2 || p[i].a < 0) {
      p.splice(i, 1);
    }
  }
  if (p.length < 1000)
    for (let i = 0; i < 20; ++i) {
      if (random(100) < 80) p.push(new raindrop());
    }
}

let interval_count = 0;
const interval = setInterval(() => {
  interval_count++;
  getRandomWord().then((word) => {
    if (text_random_words.length < 200) {
      text_random_words.push(word);
    }
  });
  //   if (interval_count >= 250) {
  //     clearInterval(interval);
  //   }
}, 100);

setTimeout(() => {
  // function repeatWithTimeout(count = 0, maxRuns = 15) {
  // if (count >= maxRuns) return;
  function repeatWithTimeout() {
    setTimeout(() => repeatWithTimeout(), 150);
    text_random_words.splice(1, 1);
  }
  repeatWithTimeout();
}, 500);

class raindrop {
  constructor() {
    this.x = random(width * 1.5);
    this.y = 0;
    this.dx = -0.3;
    this.dy = 1;
    this.a = random(200);
    this.da = random(10);
    this.fallspeed = random(2);
    this.text_size = random(5);
    this.text = "/"; //String.fromCharCode(int(random(65,128)));
    this.special = random(100) < 20;
  }
  display() {
    textSize(this.text_size);
    fill(200, this.a);
    text(this.text, this.x, this.y);
    this.x += this.dx * this.fallspeed;
    this.y += this.dy * this.fallspeed;
    this.a -= this.da;
  }

  work() {
    if (this.special) {
      // if(random(100)<1)
      //   this.text = String.fromCharCode(int(random(65,128)));
      if (random(100) < 5)
        this.text =
          text_random_words[int(random(text_random_words.length - 1))];
    }
    this.display();
  }
}

async function getRandomWord() {
  const response = await fetch("https://random-word-api.herokuapp.com/word");
  const [word] = await response.json();
  return word;
}
