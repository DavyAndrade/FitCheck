console.log("Script loaded successfully!");

function showDropdown() {
  const dropdownMenu = document.getElementById("navbar-dropdown");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

document.getElementById("form-imc").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Estou funcionando!");
});
