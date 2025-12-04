document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-layer");
  if (!snowContainer) return;

  const flakes = 60;
  const symbols = ["❄", "✻", "✼", "✥"];

  for (let i = 0; i < flakes; i++) {
    const span = document.createElement("span");
    span.className = "snowflake";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const size = 10 + Math.random() * 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = 12 + Math.random() * 18;
    const sway = 6 + Math.random() * 8;

    span.style.fontSize = size + "px";
    span.style.left = left + "vw";
    span.style.animationDuration = duration + "s, " + sway + "s";
    span.style.animationDelay = "-" + delay + "s, 0s";

    snowContainer.appendChild(span);
  }
});