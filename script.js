let selectedCount = 0; // Starter med 0 valgte sange

function selectSong() {
  const status = document.getElementById("status");
  const message = document.getElementById("message");
  const box = document.querySelector(".box");

  if (selectedCount < 3) {
    selectedCount++;
    status.textContent = "You have selected " + selectedCount + " songs.";
    message.style.opacity = 0; // skjul besked, hvis den var der fra før

    box.classList.add("highlight");
    setTimeout(() => {
      box.classList.remove("highlight");
    }, 300);

  } else {
    message.textContent = "You can only select 3 songs!";// Vis beskeden
    message.style.opacity = 1; // gør den synlig
    
    setTimeout(() => {// Fade beskeden ud efter 1,5 sekund
      message.style.opacity = 0;
    }, 1500);
  }
}