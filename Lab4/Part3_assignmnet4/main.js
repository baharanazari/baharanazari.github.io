// Set up the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Function to generate a random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x; // X-coordinate of the ball
    this.y = y; // Y-coordinate of the ball
    this.velX = velX; // Horizontal speed of the ball
    this.velY = velY; // Vertical speed of the ball
    this.color = color; // Color of the ball
    this.size = size; // Size of the ball (radius)
  }
  
  // Check if the ball has collided with other balls
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB(); // Change color if there's a collision
        }
      }
    }
  }
  
  // Update the position and speed of the ball
  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX); // Reverse horizontal speed if the ball hits the canvas edges
    }
  
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY); // Reverse vertical speed if the ball hits the canvas edges
    }
  
    this.x += this.velX; // Update the horizontal position of the ball
    this.y += this.velY; // Update the vertical position of the ball
  }
  
  // Draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  } 
}

const balls = [];

// Create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // Position the ball randomly within the canvas
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7), // Random horizontal speed
    random(-7, 7), // Random vertical speed
    randomRGB(), // Random color
    size // Random size (radius)
  );

  balls.push(ball);
}

// Animation loop
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)"; // Semi-transparent black background
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw(); // Draw each ball
    ball.update(); // Update each ball's position and speed
    ball.collisionDetect(); // Check for collisions with other balls
  }

  requestAnimationFrame(loop); // Request the next animation frame
}

loop(); // Start the animation loop





