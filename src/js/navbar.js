// Navbar Component
export default function loadNavbar() {
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
