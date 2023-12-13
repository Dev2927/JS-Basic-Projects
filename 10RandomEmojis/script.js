const btn = document.querySelector("#emoji");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

btn.addEventListener("mouseover", function () {
  const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomEmojiIndex];
  btn.textContent = randomEmoji;
});

btn.addEventListener("mouseout", function () {
  btn.style.filter = "grayscale(100%)";
});

btn.addEventListener("mouseenter", function () {
  btn.style.filter = "grayscale(0%)";
});

btn.addEventListener("mouseleave", function () {
  btn.style.filter = "grayscale(100%)";
});
