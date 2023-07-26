let intro = document.querySelector('.intro');

function handleDOMContentLoaded() {
    setTimeout(function playAnimation() {
        setTimeout(function applyAnimation() {
            intro.style.animation = 'splash 1.3s ease forwards 1.9s';
        }, 400);
    });
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

// Check if the animation has already been played
const animationPlayed = sessionStorage.getItem('animationPlayed');

if (!animationPlayed) {
  // Animation has not been played, play it
 handleDOMContentLoaded();
  sessionStorage.setItem('animationPlayed', 'true');
}


let navbar = document.querySelector('.navbar')
const part1 = document.querySelector('.part-0');
const part2 = document.querySelector('.part-1');

// Function to handle scroll event
function handleScroll() {
  const part1Rect = part1.getBoundingClientRect();
  const part2Rect = part2.getBoundingClientRect();

  // Check if part-1 is in the viewport
  if (part1Rect.bottom > 0 && part1Rect.top < window.innerHeight) {
    navbar.classList.remove('nav-scroll');
  }
  // Check if part-2 is in the viewport
  else if (part2Rect.bottom > 0 && part2Rect.top < window.innerHeight) {
    navbar.classList.add('nav-scroll');
  }
}


window.addEventListener('scroll', handleScroll);

