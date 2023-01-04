let startZeit = 0;
let endZeit = 0;
let output = document.getElementById("ZeitWert");
let intervalId;

const starteZeit = () => {
  startZeit = Date.now();

  intervalId = setInterval(() => {
    endZeit = (Date.now() - startZeit) / 1000;
    output.innerHTML = endZeit;
  }, 1);
};

const stoppeZeit = () => {
  clearInterval(intervalId);
};
