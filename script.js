let selectedCount = 0;
let selectedSongs = [];

// Prisregler
function calculatePrice(count) {
  if (count === 0) return 0;
  if (count === 1) return 2;
  if (count === 2) return 4;
  if (count >= 3) return 5;
}

function selectSong(songName) {
  const message = document.getElementById("message");
  if (selectedCount < 3) {
    selectedCount++;
    selectedSongs.push(songName);

    // Opdater review-knappen
    const reviewBtn = document.getElementById("review-button");
    reviewBtn.textContent = `Review (${selectedCount})`;

  } else {
    message.textContent = "You can only select 3 songs!";
    message.style.opacity = 1;

    setTimeout(() => {
      message.style.opacity = 0;
    }, 1500);
  }
}


// Når man trykker på REVIEW-knappen
document.getElementById("review-button").addEventListener("click", function () {
  const panel = document.getElementById("review-panel");
  const list = document.getElementById("song-list");
  const priceInfo = document.getElementById("price-info");

  // Tøm listen
  list.innerHTML = "";

  // Tilføj valgte sange
  selectedSongs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    list.appendChild(li);
  });

  // Beregn pris
  const price = calculatePrice(selectedCount);
  priceInfo.textContent = `Total price: ${price} DKK`;

  // Vis panelet
  panel.style.display = "block";
});


// Home-knap (samme som før)
document.getElementById('home-button').addEventListener('click', function() {
  let confirmRefresh = confirm("Vil du nulstille siden?");
  if (confirmRefresh) {
    location.reload();
  }
});