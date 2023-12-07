// Attach the 'myFunction' function to the window's scroll event
window.onscroll = function () {
  myFunction();
};

// Define the 'myFunction' function
function myFunction() {
  // Get the current vertical scroll position in pixels (for cross-browser compatibility)
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calculate the total height that can be scrolled (the total height of the document minus the height of the viewport)
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Calculate the percentage of how far the user has scrolled
  let scrolled = (winScroll / height) * 100;

  // Set the width of the progress bar element based on the calculated percentage
  document.getElementById("myBar").style.width = scrolled + "%";
}
