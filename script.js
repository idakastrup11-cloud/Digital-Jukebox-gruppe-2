let selectedCount = 0;

function selectSong() {
  const status = document.getElementById("status");
  const message = document.getElementById("message");

  if (selectedCount < 3) {
    selectedCount = selectedCount + 1;
    status.textContent = "You have selected " + selectedCount + " songs.";
    message.textContent = "";
  } else {
    message.textContent = "You can only select 3 songs!";
  }
}

// Funktion til overskiften 'Jukebox' som genindlæser siden
document.getElementById('home-button').addEventListener('click', function() {
  let confirmRefresh = confirm("Vil du nulstille siden?");
  if(confirmRefresh) {
    location.reload(); // refresher siden
  }
});