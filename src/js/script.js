console.log("Script loaded successfully!");

function exibirDropdown() {
  const dropdownMenu = document.getElementById("navbar__dropdown");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}