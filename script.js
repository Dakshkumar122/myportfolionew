// Cursor-reactive blob parallax
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  b1.style.transform = `translate(calc(${x * 100}% - 50%), calc(${y * 100}% - 50%))`;
  b2.style.transform = `translate(calc(${x * 120}% - 50%), calc(${y * 80}% - 50%))`;
  b3.style.transform = `translate(calc(${x * 60}% - 50%), calc(${y * 140}% - 50%))`;
});

// Simple form handling
document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault();
  alert('Thanks! Message not actually sent in this demo.');
});




// Toggle navbar on small screens
document.getElementById("hamburger").addEventListener("click", function () {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
});







// Gradient list (aap chaho to aur add kar sakte ho)
const gradients = [
  'linear-gradient(270deg, #ff6a00, #ee0979, #43cea2, #185a9d, #fc00ff, #00dbde)',
  'linear-gradient(270deg, #f7971e, #ffd200, #21d4fd, #00c3ff, #ffff1c)',
  'linear-gradient(270deg, #f953c6, #b91d73, #30cfd0, #330867)',
  'linear-gradient(270deg, #43e97b, #38f9d7, #fa709a, #fee140)',
  'linear-gradient(270deg, #667eea, #764ba2, #ff5858, #f09819)'
];

// Add dynamic style (CSS via JS)
const style = document.createElement("style");
style.innerHTML = `
  @keyframes waveGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

// Apply wave gradient to all headings
document.querySelectorAll("h1,h2").forEach(h => {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  h.style.background = randomGradient;
  h.style.backgroundSize = "400% 400%";
  h.style.webkitBackgroundClip = "text";
  h.style.backgroundClip = "text";
  h.style.color = "transparent";
  h.style.webkitTextFillColor = "transparent";
  h.style.animation = "waveGradient 12s ease infinite";
});




// Wait until page is loaded
window.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector(".btn.primary");

  if (!exploreBtn) return; // agar button hi na ho

  // Inject required CSS directly from JS
  const style = document.createElement("style");
  style.textContent = `
    .btn.primary {
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .particle {
      position: absolute;
      width: 6px;
      height: 6px;
      background: radial-gradient(circle, #ff6a00, #ff0000, transparent);
      border-radius: 50%;
      pointer-events: none;
      animation: fly 0.8s forwards ease-out;
    }

    @keyframes fly {
      from { transform: translate(0,0) scale(1); opacity: 1; }
      to   { transform: translate(var(--x), var(--y)) scale(0.2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Particle trail on hover
  exploreBtn.addEventListener("mousemove", e => {
    const rect = exploreBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const particle = document.createElement("span");
    particle.className = "particle";

    // Random blast direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 40;
    const xMove = Math.cos(angle) * distance + "px";
    const yMove = Math.sin(angle) * distance + "px";

    particle.style.setProperty("--x", xMove);
    particle.style.setProperty("--y", yMove);
    particle.style.left = x + "px";
    particle.style.top = y + "px";

    exploreBtn.appendChild(particle);

    setTimeout(() => particle.remove(), 800);
  });

  // Click blast effect
  exploreBtn.addEventListener("click", () => {
    exploreBtn.style.transform = "scale(1.2) rotate(2deg)";
    exploreBtn.style.boxShadow = "0 0 40px rgba(0, 200, 255, 0.8)";
    setTimeout(() => {
      exploreBtn.style.transform = "scale(1)";
      exploreBtn.style.boxShadow = "none";
    }, 400);
  });
});










// contact form emailling process


// Initialize EmailJS
emailjs.init("jR20TzzbQzjTLybTR"); // Replace with your EmailS user ID
// Form submission handler
document.getElementById('contact-form'). addEventListener ('submit', function (event) {
event .preventDefault(); // Prevent the default form submission
// Send email using EmailJS
emailjs.sendForm("service_mkqv9eg", "template_lutgqgv", this)
-then (function(response) {
alert ('Message sent successfully!');
}, function (error) {
alert( 'Failed to send message. Please try again.');
console. log (error);
}) ;
});







