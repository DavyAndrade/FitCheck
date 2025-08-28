const resultBox = document.getElementById("resultBox");
const formIMC = document.getElementById("form-imc");

// Teste de verificação
formIMC.addEventListener("submit", (e) => {
  e.preventDefault();

  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  peso = parseFloat(peso);
  altura = parseFloat(altura) / 100;

  if (peso <= 0 || altura <= 0) {
    console.log("Por favor, insira valores válidos");
  }

  let imc = (peso / Math.pow(altura, 2)).toFixed(1);
  let classificacao = getClassificacao(imc);

  if (classificacao == "Abaixo do Peso") {
    resultBox.innerHTML = `
      <h3 class="box__title">${imc}</h3>
      <p class="box__subtitle box__subtitle--blue">${classificacao}</p>
      <p class="box__description">Seu IMC indica: ${classificacao}</p>
    `;
  }

  if (classificacao == "Peso Normal") {
    resultBox.innerHTML = `
      <h3 class="box__title">${imc}</h3>
      <p class="box__subtitle box__subtitle--green">${classificacao}</p>
      <p class="box__description">Seu IMC indica: ${classificacao}</p>
    `;
  }

  if (classificacao == "Sobrepeso") {
    resultBox.innerHTML = `
      <h3 class="box__title">${imc}</h3>
      <p class="box__subtitle box__subtitle--yellow">${classificacao}</p>
      <p class="box__description">Seu IMC indica: ${classificacao}</p>
    `;
  }

  if (classificacao == "Obesidade") {
    resultBox.innerHTML = `
      <h3 class="box__title">${imc}</h3>
      <p class="box__subtitle box__subtitle--red">${classificacao}</p>
      <p class="box__description">Seu IMC indica: ${classificacao}</p>
    `;
  }
});

function getClassificacao(imc) {
  if (imc < 18.5) {
    return "Abaixo do Peso";
  }

  if (imc < 25) {
    return "Peso Normal";
  }

  if (imc < 30) {
    return "Sobrepeso";
  }

  if (imc >= 30) {
    return "Obesidade";
  }
}
