let intervalId

document.getElementById("start").addEventListener("click", function () {
  intervalId = setInterval(() => {
    function r() {
      return Math.floor(Math.random() * 256);
    }
    const color = "rgb(" + r() + "," + r() + "," + r() + ")";

    document.body.style.backgroundColor = `${color}`;
  }, 1000);
});


document.getElementById('stop').addEventListener('click', function(){
    clearInterval(intervalId)
    document.body.style.backgroundColor = 'gray'
})