// Função para redirecionar para a página inicial
function returnToHome() {
  window.location.href = "index.html";
}

// Função para redirecionar para a página de Cálculo do Peso Corporal Ideal
function redirectPCI() {
  window.location.href = "pci.html";
}

// Função para redirecionar para a página de Cálculo do Índice de Massa Corporal
function redirectIMC() {
  window.location.href = "imc.html";
}

// Função para alternar o menu suspenso
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}
