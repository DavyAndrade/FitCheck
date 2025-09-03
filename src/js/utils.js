// Função para redirecionar para a página inicial
export function returnToHome() {
  window.location.href = "index.html";
}

// Função para redirecionar para a página de Cálculo do Peso Corporal Ideal
export function redirectPCI() {
  window.location.href = "pci.html";
}

// Função para redirecionar para a página de Cálculo do Índice de Massa Corporal
export function redirectIMC() {
  window.location.href = "imc.html";
}

// Função para alternar o menu suspenso
export function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}
