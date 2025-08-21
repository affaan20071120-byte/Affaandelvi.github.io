
function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  drawer.style.width = drawer.style.width === "250px" ? "0" : "250px";
}
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
