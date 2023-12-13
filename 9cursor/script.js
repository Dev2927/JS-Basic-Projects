const cursor = document.querySelector(".cursor");
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  const colorIndex = Math.floor((x / window.innerWidth) * colors.length);
  cursor.style.backgroundColor = colors[colorIndex];
});

cursor.style.transition = "background-color 0.2s ease-out";
