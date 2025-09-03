import loadNavbar from "./navbar.js";
import loadFooter from "./footer.js";

// Carregando Componentes e verificando script
window.addEventListener("load", () => {
  document.getElementById("navbar").innerHTML = loadNavbar();
  document.getElementById("footer").innerHTML = loadFooter();
  console.log("Script loaded successfully!");
});
