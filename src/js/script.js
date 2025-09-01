// Carregando Componentes e verificando script
window.addEventListener("load", () => {
  document.getElementById("navbar").innerHTML = loadNavbar();
  document.getElementById("footer").innerHTML = loadFooter();
  console.log("Script loaded successfully!");
});

// Navbar Dropdown
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

// Navbar Component
function loadNavbar() {
  return `
          <nav class="navbar">
            <a href="index.html" class="navbar__logo">
                <i class="fa-solid fa-heart-pulse"></i> FitCheck
            </a>

            <!-- Apenas Mobile -->
            <button class="navbar__toggle" onclick="toggleDropdown()" aria-expanded="false" aria-controls="dropdownMenu"
                id="mobile">
                <span class="sr-only">Abrir menu</span>
                <i class="fa-solid fa-bars" aria-hidden="true"></i>
            </button>

            <div class="navbar__dropdown" id="dropdownMenu">
                <ul class="navbar__links" id="mobile">
                    <li class="navbar__item"><a href="index.html" class="navbar__link">Início</a></li>
                    <li class="navbar__item"><a href="imc.html" class="navbar__link">Calculadora IMC</a></li>
                    <li class="navbar__item"><a href="pci.html" class="navbar__link">Calculadora PCI</a></li>
                </ul>

                <div class="navbar__soon" id="mobile">
                    <p class="navbar__soon-title">Em breve:</p>
                    <ul class="navbar__soon-container">
                        <li class="navbar__soon-item">Taxa Metabólica Basal</li>
                        <li class="navbar__soon-item">Calculadora de Hidratação</li>
                    </ul>
                </div>
            </div>

            <!-- Apenas Desktop -->
            <ul class="navbar__links" id="desktop">
                <li class="navbar__item"><a href="index.html" class="navbar__link">Início</a></li>
                <li class="navbar__item"><a href="imc.html" class="navbar__link">Calculadora IMC</a></li>
                <li class="navbar__item"><a href="pci.html" class="navbar__link">Calculadora PCI</a></li>
                <div class="navbar__dropdown--desktop">
                    <li class="navbar__item" tabindex="0">Mais cálculos <i class="fa-solid fa-chevron-down"></i></li>
                    <div class="navbar__dropdown-content">
                        <ul class="navbar__dropdown-list">
                            <p class="navbar__soon-title">Em breve:</p>
                            <li class="navbar__dropdown-item">• Taxa Metabólica Basal</li>
                            <li class="navbar__dropdown-item">• Calculadora de Hidratação</li>
                        </ul>
                    </div>
                </div>
            </ul>
        </nav>
        `;
}

// Footer Component
function loadFooter() {
  return `
        <!-- Info Section -->
        <section class="footer__info">
            <h3 class="footer__info-title">FitCheck</h3>
            <p class="footer__info-description">Sua plataforma confiável para monitoramento de saúde e bem-estar.
                Ferramentas simples e precisas para
                cuidar da sua
                saúde.
            </p>
            <div class="footer__info-links">
                <a href="#" class="footer__info-link" aria-label="Facebook do FitCheck"><i class="fa-brands fa-facebook"
                        aria-hidden="true"></i></a>
                <a href="#" class="footer__info-link" aria-label="Instagram do FitCheck"><i
                        class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="footer__info-link" aria-label="X/Twitter do FitCheck"><i
                        class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
                <a href="#" class="footer__info-link" aria-label="LinkedIn do FitCheck"><i class="fa-brands fa-linkedin"
                        aria-hidden="true"></i></a>
            </div>
        </section>

        <!-- Links Section -->
        <section class="footer__links">
            <h4 class="footer__links-title">Links Úteis</h4>
            <div class="footer__links-items">
                <a class="footer__links-link" href="index.html">Início</a>
                <a class="footer__links-link" href="imc.html">Calculadora IMC</a>
                <a class="footer__links-link" href="pci.html">Calculadora PCI</a>
            </div>
        </section>

        <!-- Support Section -->
        <section class="footer__support">
            <h4 class="footer__support-title">Suporte</h4>
            <div class="footer__support-items">
                <a class="footer__support-link" href="#">FAQ</a>
                <a class="footer__support-link" href="#">Contato</a>
                <a class="footer__support-link" href="#">Privacidade</a>
            </div>
        </section>

        <!-- Copyright Section -->
        <div class="footer__copyright">
            <p class="footer__copyright-text">© 2025 FitCheck. Todos os direitos reservados. Desenvolvido para fins
                educacionais.</p>
        </div>
  `;
}

function returnToHome() {
  window.location.href = "index.html";
}

function redirectPCI() {
  window.location.href = "pci.html";
}

function redirectIMC() {
  window.location.href = "imc.html";
}
