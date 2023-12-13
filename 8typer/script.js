const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
    } else {
        setTimeout(erase, 1000); // Wait for a second before starting to erase
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust the erasing speed here (in milliseconds)
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Wait for half a second before starting to type the next word
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Kick off the typing process
    setTimeout(type, 500);
});

// Optional: Add a blinking cursor
setInterval(() => {
    cursor.style.display = cursor.style.display === 'none' ? 'inline-block' : 'none';
}, 500);
