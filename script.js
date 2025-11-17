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

// Funktion til overskiften 'Jukebox' som genindlæser siden
document.getElementById('home-button').addEventListener('click', function() {
  let confirmRefresh = confirm("Vil du nulstille siden?");
  if(confirmRefresh) {
    location.reload(); // refresher siden
  }
});

// Review funktioner
let selectedSongs = [];
const maxSongs = 3;

function selectSong(songName) {
    if (selectedSongs.length >= maxSongs) {
        alert("Du har allerede valgt maksimalt antal sange (3).");
        return;
    }

    selectedSongs.push(songName);
    updateReviewCounter();
    updateSongList();
}

function updateReviewCounter() {
    const reviewSpan = document.querySelector(".review-text");
    reviewSpan.textContent = `Review (${selectedSongs.length})`;
}

function updateSongList() {
    const list = document.getElementById("songList");
    list.innerHTML = "";

    selectedSongs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        list.appendChild(li);
    });
}

function toggleReviewDropdown() {
    const dropdown = document.getElementById("reviewDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// Gør review-teksten klikbar:
document.querySelector(".review-text").addEventListener("click", toggleReviewDropdown);

// Payment-knap (placeholder)
document.getElementById("paymentButton").addEventListener("click", () => {
    alert("Her kommer betaling-siden senere!");
});
// Review funktioner