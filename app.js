const thumbnails = document.querySelectorAll(".thumbnails img"); // array of images
const displayImage = document.getElementById("displayImage"); // an image tag
const announcer = document.getElementById("announcer");
const button = document.getElementById("button");

//function for the alt text to be spoken aloud - tried various things, did a LOT of Googling
function speakAltText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}
// loop through our thumbnails
// add an eventLister to each one
// so when it is clicked
// displayImage is changed
let currentIndex = 0;

thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    displayImage.src = thumb.src;
    displayImage.alt = thumb.alt;
    currentIndex = index;
    announcer.textContent = thumb.alt;

    //and then speak it
    speakAltText(thumb.alt);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    displayImage.src = thumbnails[currentIndex].src;
    displayImage.alt = thumbnails[currentIndex].alt;
  } else if (event.key == "ArrowRight") {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    displayImage.src = thumbnails[currentIndex].src;
    displayImage.alt = thumbnails[currentIndex].alt;
    speakAltText(thumbnails[currentIndex].alt);
  }
});
