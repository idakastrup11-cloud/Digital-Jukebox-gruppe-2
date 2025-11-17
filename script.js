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
  const message = document.getElementById("message");// Find HTML-element til besked
  if (selectedCount < 3) {// Tjek om der er valgt mindre end 3 sange
    selectedCount++;// Øg antal valgte sange
    selectedSongs.push(songName);// Tilføj sang til listen over valgte sange

   
    const reviewBtn = document.getElementById("review-button"); // Find knappen med id "review-button"
    reviewBtn.textContent = `Review (${selectedCount})`;    // Opdater knapteksten til at vise antal valgte sange

    //Ellers giv fejlmeddelse
  } else {
    message.textContent = "You can only select 3 songs!";  // Hvis der allerede er valgt 3 sange // Vis besked til brugeren
    message.style.opacity = 1;    // Sørg for koden er synlig



    // Gør at fejlmeddelsen fader efter 1,5 sek
    setTimeout(() => {
      message.style.opacity = 0;
    }, 1500);
  }
}


// Tilføj en "click"-eventlistener til knappen med id "review-button"
// addEventListener lytter efter en bestemt hændelse (her "click")
// Når knappen klikkes, udføres den tilknyttede funktion
document.getElementById("review-button").addEventListener("click", function () {
  const panel = document.getElementById("review-panel");  // Find panelet der viser valgte sange
  const list = document.getElementById("song-list");  // Find listen hvor valgte sange skal vises
  const priceInfo = document.getElementById("price-info");  // Find element til prisinformation


  list.innerHTML = "";// Rydder indholdet af sanglisten - innerHTML = "" fjerner alle tidligere listeelementer

  // Tilføj valgte sange
  selectedSongs.forEach(song => { // Loop gennem alle valgte sange og tilføj dem til listen
    const li = document.createElement("li");  // Opret et nyt listeelement (li)
    li.textContent = song;  // Sæt sangens navn som tekst i listeelementet
    list.appendChild(li);  // Tilføj listeelementet til sanglisten i panelet
  });

  const price = calculatePrice(selectedCount);// Beregn pris baseret på antal valgte sange
  priceInfo.textContent = `Total price: ${price} DKK`;// Opdater prisinformation i panelet
  panel.style.display = "block";  // Gør at panelet vises efter man har trykket på review-knappen.

});


// Home-knap som gør vi genindlæser + man bliver spurgt om man er sikker
document.getElementById('home-button').addEventListener('click', function() {
  let confirmRefresh = confirm("Start over?");
  if (confirmRefresh) {
    location.reload();
  }
});