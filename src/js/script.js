import loadNavbar from "./navbar.js";
import loadFooter from "./footer.js";
import {
  returnToHome,
  redirectIMC,
  redirectPCI,
  toggleDropdown,
} from "./utils.js";

const redirectToHome = document.getElementById("redirectHome");
const redirectToIMC = document.getElementById("redirectIMC");
const redirectToPCI = document.getElementById("redirectPCI");

// Carregando Componentes
window.addEventListener("load", () => {
  document.getElementById("navbar").innerHTML = loadNavbar();
  document.getElementById("footer").innerHTML = loadFooter();

  const toggleButton = document.getElementById("toggleButton");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      toggleDropdown();
    });
  }
});

if (redirectToIMC) {
  redirectToIMC.addEventListener("click", () => {
    redirectIMC();
  });
}

if (redirectToPCI) {
  redirectToPCI.addEventListener("click", () => {
    redirectPCI();
  });
}

if (redirectToHome) {
  redirectToHome.addEventListener("click", () => {
    returnToHome();
  });
}

