// Find the paragraph element on the webpage
const para = document.querySelector('p');

// Set the initial count of balls to zero
let count = 0;

// Find the canvas element on the webpage
const canvas = document.querySelector("canvas");

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext("2d");

// Set the width of the canvas to match the width of the window
const width = canvas.width = window.innerWidth;

// Set the height of the canvas to match the height of the window
const height = canvas.height = window.innerHeight;

// Function to generate a random number within a specified range
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// Function to generate a random RGB color value
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Define a shape class to represent basic properties of shapes
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x; 
    this.y = y; 
    this.velX = velX; 
    this.velY = velY; // velocity of the shape along the y-axis
  }
}

// Define a ball class 
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color; // color of the ball
    this.size = size; // size of the ball
    this.exist = true; // flag to determine if the ball exists
  }

  // Method to draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Method to update the position of the ball
  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // Method to detect collisions between balls
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exist) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Define an EvilCircle class
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = 'white'; // color of the EvilCircle
    this.size = 10; // size of the EvilCircle

    // Event listener to control the movement of EvilCircle 
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  // Method to draw the EvilCircle on the canvas
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // Method to keep the EvilCircle within the bounds of the canvas
  checkBound() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.x -= this.velX;
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.y -= this.velY;
    }
  }

  // Method to detect collisions between EvilCircle and balls
  collisionDetect() {
    for (const ball of balls) {
      if (ball.exist) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exist = false; // Set the existence of the ball to false
          count--; // Decrement the count of balls
          para.textContent = 'ball count ' + count; // Update the paragraph text with the new ball count
        }
      }
    }
  }
}

const balls = []; // Array to store ball objects

// Generate random balls and add them to the balls array
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball); // Add ball to the array
  count++; // Increment the ball count
  para.textContent = 'ball count ' + count; // Update the paragraph text with the new ball count
}

// Create an EvilCircle object with random initial position
const evilCircle = new EvilCircle(random(0, width), random(0, height));

// Function to continuously update the canvas
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; // Set the fill style with a semi-transparent black color
  ctx.fillRect(0, 0, width, height); // Fill the canvas with the specified color

  // Loop through each ball to draw, update its position
  for (const ball of balls) {
    if (ball.exist) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  // Draw the EvilCircle, check its bounds, and detect collisions with balls
  evilCircle.draw();
  evilCircle.checkBound();
  evilCircle.collisionDetect();

  // Request animation frame 
  requestAnimationFrame(loop);
}

// Start the loop
loop();  





