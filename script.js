console.log("script chargé");

const NAME = "Hadil";

const NO_MESSAGES = [
  "Tu es sûre ? 🥺",
  "Réfléchis encore un peu 😌",
  "Je te promets de te rendre heureuse ✨",
  "Allez… dis oui 😭",
  "Dernière chance 😳"
];
const MAX_NO = 5;

const GIFS = [
  "https://media.tenor.com/E90r971nBbIAAAAm/kiss-lip-kiss.webp",
  "https://media.tenor.com/pmDABQ5c8ZwAAAAm/sappy-sappy-seals.webp",
  "https://media.tenor.com/s9JMdKB5mV8AAAAm/y%C3%AAuu.webp",
  "https://media.tenor.com/PQUnS1_hprEAAAAm/pengu-pudgy.webp",
  "https://media1.tenor.com/m/LGXVwQg0cb0AAAAd/%EB%AA%A8%EC%B0%8C%EB%83%A5.gif",
  "https://media.tenor.com/06lgodZaTagAAAAm/witch-watch.webp"
];

const sceneEnvelope = document.getElementById("sceneEnvelope");
const sceneQuestion = document.getElementById("sceneQuestion");
const sceneYay = document.getElementById("sceneYay");

const envelope = document.getElementById("envelope");
const titleEl = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gifGrid = document.getElementById("gifGrid");

const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

const hackOverlay = document.getElementById("hackOverlay");
const hackBox = document.getElementById("hackBox");
const hackText = document.getElementById("hackText");
const hackBarFill = document.getElementById("hackBarFill");
const hackFooter = document.getElementById("hackFooter");

function show(scene){
  [sceneEnvelope, sceneQuestion, sceneYay].forEach(s => s.classList.remove("active"));
  scene.classList.add("active");
}

titleEl.textContent = `${NAME}, veux-tu être ma Valentine ?`;
yesBtn.classList.add("disabled");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => show(sceneQuestion), 650);
});

let noCount = 0;
subtitle.textContent = NO_MESSAGES[0];

noBtn.addEventListener("click", () => {
  noCount++;
  subtitle.textContent = NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)];

  const scale = 1 + Math.min(0.45, noCount * 0.1);
  yesBtn.style.transform = `scale(${scale})`;

  if (noCount >= MAX_NO){
    noBtn.classList.add("hidden");
    yesBtn.classList.remove("disabled");
    subtitle.textContent = "Bon… il ne reste que OUI 😌💖";
  }
});

function buildGrid(){
  gifGrid.innerHTML = "";
  GIFS.slice(0,6).forEach(src => {
    const cell = document.createElement("div");
    cell.className = "cell";
    const img = document.createElement("img");
    img.src = src;
    cell.appendChild(img);
    gifGrid.appendChild(cell);
  });
}

yesBtn.addEventListener("click", () => {
  if (yesBtn.classList.contains("disabled")) return;
  show(sceneYay);
  buildGrid();
});
