// hero page typewritter library
var typed5 = new Typed("#typewriter", {
  strings: ["a Coder...", "an IT Specialist", "a Web Designer"],
  cursorChar: "<span style:'color:white;'>_</span>",
  // shuffle: false,
  smartBackspace: false,
  backSpeed: 60,
  typeSpeed: 60,
  startDelay: 60,
  backDelay: 1000,
  loop: true,
});
// END FOR TYPEWRITER
// NAVBAR SHRINK AND CHANGE COLOR
window.onscroll = function () {
  windowonscrollFunc();
};

// function window onscroll
function windowonscrollFunc() {
  // console.log(window.scrollY);
  if (window.scrollY > 200) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.backgroundColor = "#fc5356";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "";
  }
}

// SKILLS
// progress bar function js
const skillsSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    // console.log(value);
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    // console.log("show progress");
    showProgress();
  } else {
    // console.log("hide progress");
    hideProgress();
  }
});

// logo slider
console.log("sample");
