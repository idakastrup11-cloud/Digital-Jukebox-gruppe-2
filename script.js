let selectedCount = 0; //Starter med 0 valgte sange


function selectSong() { // Funktionen der kørern når man klikker på select/add song
    
  const status = document.getElementById("status"); //Finder tekstfelterne i html
  const message = document.getElementById("message"); //Finder tekstfelterne i html
  
  if (selectedCount < 3) { //Hvis der er valgt færre end 3 sange
    
    selectedCount = selectedCount + 1; //Lægger en til tælleren
    
    status.textContent = "You have selected " + selectedCount + " songs."; //Opdater teskten
    message.textContent = ""; //Slet evt. gammel besked
} 
  
  else {
    message.textContent = "You can only select 3 songs!"; //Hvis selected count er større end 3, giv beskeden:
  }
}

// Funktion til overskiften 'Jukebox' som genindlæser siden
document.getElementById('home-button').addEventListener('click', function() {
  let confirmRefresh = confirm("Vil du nulstille siden?");
  if(confirmRefresh) {
    location.reload(); // refresher siden
  }
});