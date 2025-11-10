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