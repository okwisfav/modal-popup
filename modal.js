let openModalButton = document.getElementById('Join');
let modalTwo = document.getElementById('modal-container-two');
let closeModalButton = document.getElementById('modal-close-button-two');

openModalButton.onclick = function() {
  modalTwo.style.display = "block";
}

closeModalButton.onclick = function() {
  modalTwo.style.display = "none";
}