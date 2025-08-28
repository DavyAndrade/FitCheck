const resultBox = document.getElementById("resultado");
const formPCI = document.getElementById("form-pci");

formPCI.addEventListener("submit", (e) => {
  e.preventDefault();

  let altura = document.getElementById("altura").value;
  let sexo = document.getElementById("sexo").value;

  altura = parseFloat(altura) / 2.54;

  if (sexo == "masculino") {
    let pci = (50 + 2.3 * (altura - 60)).toFixed(1);
    let minKg = pci - (pci * 0.1).toFixed(0);
    let maxKg = pci + (pci * 0.1).toFixed(0);

    resultBox.innerHTML = `
    <div>
        <p class="calculator__result-title">${pci} kg</p>
        <p class="calculator__result-subtitle">Peso Corporal Ideal</p>
    </div>
    <div class="calculator__result calculator__result--secondary">
        <strong class="calculator__result-text">Faixa Recomendável:</strong>
        <p class="calculator__result-text">${minKg} kg - ${maxKg} kg</p>
        <p class="calculator__result-text--info">(&#177;10% do PCI considerando variações individuais)</p>
    </div>
  `;
  } else {
    let pci = (45.5 + 2.3 * (altura - 60)).toFixed(1);
    let minKg = pci - (pci * 0.1).toFixed(0);
    let maxKg = pci + (pci * 0.1).toFixed(0);

    resultBox.innerHTML = `
    <div>
        <p class="calculator__result-title">${pci} kg</p>
        <p class="calculator__result-subtitle">Peso Corporal Ideal</p>
    </div>
    <div class="calculator__result calculator__result--secondary">
        <strong class="calculator__result-text">Faixa Recomendável:</strong>
        <p class="calculator__result-text">${minKg} kg - ${maxKg} kg</p>
        <p class="calculator__result-text--info">(&#177;10% do PCI considerando variações individuais)</p>
    </div>
  `;
  }
});
