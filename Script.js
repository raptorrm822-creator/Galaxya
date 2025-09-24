const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 700;

const colors = [
  "rgba(255, 200, 255, 0.8)",
  "rgba(100, 200, 255, 0.8)",
  "rgba(180, 100, 255, 0.8)",
  "rgba(255, 150, 200, 0.8)",
  "rgba(200, 200, 255, 0.8)"
];

for (let i = 0; i < numStars; i++) {
  stars.push({
    angle: Math.random() * Math.PI * 2,
    radius: Math.random() * (canvas.width / 2),
    speed: 0.0003 + Math.random() * 0.002,
    size: Math.random() * 2.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 20, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let star of stars) {
    star.angle += star.speed;

    const x = centerX + Math.cos(star.angle) * star.radius;
    const y = centerY + Math.sin(star.angle) * star.radius;

    ctx.beginPath();
    ctx.arc(x, y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
