const gradientBox = document.getElementById("gradient");
const regenerateButton = document.getElementById("regenerate");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const headline = document.getElementById("headline");

let finalColor;

const generateGradient = function () {
  let gradientAngle = Math.floor(Math.random() * 360);
  let r1 = Math.floor(Math.random() * 256);
  let g1 = Math.floor(Math.random() * 256);
  let b1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let g2 = Math.floor(Math.random() * 256);
  let b2 = Math.floor(Math.random() * 256);

  finalColor = `linear-gradient(${gradientAngle}deg, rgb(${r1},${g1},${b1}) 0%, rgb(${r2},${g2},${b2}) 100%)`;

  gradientBox.style.background = finalColor;

  output.value = finalColor;
  copyButton.innerHTML = "Copy CSS";

  return finalColor;
};

const copyStyles = function () {
  output.select();
  document.execCommand("copy");
  copyButton.innerHTML = "✔ CSS copied";
};

generateGradient();

regenerateButton.addEventListener("click", function () {
  generateGradient();
});

output.addEventListener("click", function () {
  copyStyles();
});

copyButton.addEventListener("click", function () {
  copyStyles();
});
