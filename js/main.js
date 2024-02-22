//////////////////////////////////////////////////////////////// preloader start/////////////////////////////////////////////////////////////////////
  var loader = document.getElementById("pre-loader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// ///////////////////////////////////////////////////////////////preloader end////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////menu/////////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById("toggleButton").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  let menuicon = document.getElementsByClassName("menuicon")[0];
  menu.classList.toggle("active");
  menuicon.classList.toggle("active");
  console.log("hello");
});

 // Get the path element color chnaging of menu icon onclick
  var path = document.getElementById('mypath');

  // Get the toggle button
  var toggleButton = document.getElementById('toggleButton');

  // Initialize the current color variable
  var currentColor = 'black'; // Initial color

  // Add click event listener to the toggle button
  toggleButton.addEventListener('click', function() {
    // Toggle between black and white
    if (path.style.background === 'black') {
      // Set white and update the current color
      currentColor = path.style.fill;
      path.style.background = 'white';
    } else {
      // Set black and update the current color
      currentColor = path.style.fill;
      path.style.background = 'black';
    }
  });


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementById("header");
  if (window.pageYOffset > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////video poup start/////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.querySelector(".open-popup-btn");
    const closeBtn = document.querySelector(".close-popup-btn");
    const video = document.querySelector(".popup-content");
    const body = document.querySelector("body");

    openBtn.addEventListener("click", function() {
        video.style.display = "block";
        video.play();
        let hedersec = document.getElementById('header');
        hedersec.style.zIndex = "1"
        body.style.overflow = "hidden";
        closeBtn.style.display ="block"
    });

    closeBtn.addEventListener("click", function() {
        video.pause();
        let hedersec = document.getElementById('header');
        hedersec.style.zIndex = "99"
        video.style.display = "none";
        body.style.overflow = "";
        closeBtn.style.display ="none"

    });
});
// /////////////////////////////////////////////////////////////////////////////////////////////////video poup end/////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////background img change on li hover start /////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.background__images img');
    const totalImages = images.length;

    // Function to change the background image
    function changeBackgroundImage(imageIndex) {
        images.forEach(img => img.classList.remove('active'));
        images[imageIndex].classList.add('active');
    }

    // Event listeners for hovering over li elements
    const liElements = document.querySelectorAll('.expertisewrap li');
    liElements.forEach((li, index) => {
        li.addEventListener('mouseover', function() {
            changeBackgroundImage(index);
        });
        li.addEventListener('mouseleave', function() {
            images.forEach(img => img.classList.remove('active'));
        });
    });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////background img change on li hover end /////////////////////////////////////////////////////////////
