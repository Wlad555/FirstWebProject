let startZeit = 0;
let endZeit = 0;
let output = document.getElementById("ZeitWert");
let intervalId;
let speicher = [];

let running = false;

const starteZeit = () => {
  if (running) {
    // Schalter mit boolean
    return;
  }
  startZeit = Date.now();
  intervalId = setInterval(() => {
    endZeit = Date.now() - startZeit;
    output.innerHTML = formatTime(endZeit);
  }, 1);
  running = true;
};

const stoppeZeit = () => {
  running = false; // Schalter arbeitet mit oben zsm.
  clearInterval(intervalId);
  if ((speicher.length = 2)) {
    speicher.unshift(endZeit);
    
  }
  let speicherung = document.getElementById("Speicher");
  let werte = "";
  for (let i = 0; i < speicher.length; i++) {
    let item = speicher[i];
    if (item === undefined) continue;
    werte += `<div>Letze Runde ${formatTime(item)}</div>`;
  }
  speicherung.innerHTML = werte;
};

function formatTime(milliseconds) {
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  let millis = milliseconds % 1000;

  // Führende Nullen hinzufügen, falls nötig
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  millis = millis.toString().padStart(3, "0");

  return `${minutes}:${seconds}:${millis}`;
}
