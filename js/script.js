document.addEventListener('DOMContentLoaded', function() {

  var video = document.getElementById('myVideo');

  var playPauseButton = document.getElementById('playPauseButton');

  var fullScreenButton = document.getElementById('fullScreenButton');



  // Update the play/pause button icon and functionality

  function updatePlayPauseIcon() {

    if (video.paused) {

      playPauseButton.innerHTML = '&#9658;'; // Play icon

      playPauseButton.classList.remove('playing');

    } else {

      playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon

      playPauseButton.classList.add('playing');

    }

  }



  // Play or pause the video when the play/pause button is clicked

  playPauseButton.addEventListener('click', function() {

    if (video.paused) {

      video.play();

    } else {

      video.pause();

    }

    updatePlayPauseIcon();

  });



  // Toggle fullscreen mode

  fullScreenButton.addEventListener('click', function() {

    if (video.requestFullscreen) {

      video.requestFullscreen();

    } else if (video.mozRequestFullScreen) { /* Firefox */

      video.mozRequestFullScreen();

    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */

      video.webkitRequestFullscreen();

    } else if (video.msRequestFullscreen) { /* IE/Edge */

      video.msRequestFullscreen();

    }

  });



  // Show the fullscreen button only if fullscreen API is supported

  if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled) {

    fullScreenButton.style.display = 'block';

  }



  // Update play/pause icon when video ends

  video.addEventListener('ended', updatePlayPauseIcon);



  // Update play/pause icon on load

  updatePlayPauseIcon();

});









// Run this function when the document is fully loaded

document.addEventListener('DOMContentLoaded', function() {

  // Get all the .faq-answer elements and set their initial display to none

  var faqAnswers = document.querySelectorAll('.faq-answer');

  faqAnswers.forEach(function(answer) {

    answer.style.display = 'none';

  });

});



function toggleFaq(id, button) {

  var answer = document.getElementById(id);

  var icon = button.querySelector('.faq-icon');

  

  // Toggle the display of the .faq-answer

  if (answer.style.display === 'none') {

    answer.style.display = 'block';

    icon.classList.remove('fa-plus');

    icon.classList.add('fa-minus');

  } else {

    answer.style.display = 'none';

    icon.classList.remove('fa-minus');

    icon.classList.add('fa-plus');

  }

}









document.addEventListener('DOMContentLoaded', function () {

  var subscribeButton = document.getElementById('subscribe-button');

  var emailInput = document.getElementById('mev-email');

  var subscriptionStatus = document.getElementById('subscription-status');

  var mevRightSection = document.getElementById('mev-right-section'); // Make sure this ID matches your HTML



  subscribeButton.onclick = function (event) {

    // Prevent form from submitting if you are using a form element

    event.preventDefault();



    // Check if the email field is valid

    if (emailInput.checkValidity()) {

      // If valid, hide the right section

      mevRightSection.style.display = "none";



      // Change the text after a brief pause to allow for a fade effect

      subscriptionStatus.style.opacity = 0; // Start the fade out effect

      setTimeout(function () {

        subscriptionStatus.textContent = 'Thanks for subscription!';

        subscriptionStatus.style.opacity = 1; // Fade in new message

      }, 500); // This matches the timeout with the CSS transition time

    } else {

      // If not valid, show an alert or some error message

      emailInput.reportValidity();

    }

  };

});