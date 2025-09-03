

# FitCheck — Documentação Oficial 🏥

## Visão Geral 🩺
O **FitCheck** é uma plataforma web responsiva para monitoramento de saúde, oferecendo ferramentas como calculadora de IMC e calculadora de Peso Corporal Ideal (PCI). O projeto prioriza privacidade, usabilidade e resultados baseados em padrões médicos reconhecidos.

---

## Índice 📑
- [Visão Geral](#visão-geral-)
- [Funcionalidades](#funcionalidades-)
- [Instalação](#instalação-)
- [Como Usar ](#como-usar-)
- [Estrutura do Projeto](#estrutura-do-projeto-)
- [Tecnologias Utilizadas](#tecnologias-utilizadas-)
- [Organização do Código](#organização-do-código-)
- [Contribuição](#contribuição-)
- [Licença](#licença-)

---


## Funcionalidades ⚙️

- **Calculadora de IMC:**
	- Permite ao usuário calcular o Índice de Massa Corporal, exibindo classificação e dicas de saúde.
- **Calculadora de Peso Corporal Ideal (PCI):**
	- Calcula o peso ideal com base em altura, sexo e idade, mostrando faixa recomendada.
- **Interface Responsiva:**
	- Layout adaptável para dispositivos móveis e desktop, com navegação intuitiva.
- **Privacidade:**
	- Todos os cálculos são realizados localmente no navegador, sem coleta de dados pessoais.

---


## Instalação 💻

1. Clone ou baixe este repositório:
	 ```bash
	 git clone https://github.com/DavyAndrade/FitCheck.git
	 ```
2. Acesse a pasta do projeto:
	 ```bash
	 cd FitCheck
	 ```
3. Abra o arquivo `index.html` no seu navegador preferido.

---


## Como Usar 🧑‍💻

1. Acesse a landing page principal (`index.html`).
2. Navegue pelo menu para acessar as calculadoras de IMC e PCI.
3. Preencha os formulários com seus dados e visualize os resultados instantaneamente.

---


## Estrutura do Projeto 🗂️

```
FitCheck/
│
├── index.html                # Landing page principal
├── imc.html                  # Página da calculadora de IMC
├── pci.html                  # Página da calculadora de PCI
├── public/
│   └── FitCheck-logo.svg     # Logo do projeto
├── src/
│   ├── css/
│   │   ├── base/
│   │   │   └── reset.css
│   │   ├── components/
│   │   │   ├── navbar.css
│   │   │   └── footer.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── imc.css
│   │       └── pci.css
│   └── js/
│       ├── script.js         # Navbar/Footer dinâmicos
│       ├── imc.js            # Lógica da calculadora de IMC
│       └── pci.js            # Lógica da calculadora de PCI
└── ...
```

---


## Tecnologias Utilizadas 🛠️

- **HTML5** — Estruturação das páginas.
- **CSS3** — Estilização, responsividade e layout moderno.
- **JavaScript** — Funcionalidades interativas e cálculos dinâmicos.
- **FontAwesome** — Ícones para melhor experiência visual.

---


## Organização do Código 🧩

- **Componentização:**
	- Navbar e Footer são carregados dinamicamente via JavaScript para evitar repetição de código.
- **BEM:**
	- A nomenclatura CSS segue o padrão BEM para facilitar manutenção e escalabilidade.
- **Separação de responsabilidades:**
	- Cada funcionalidade/calculadora possui seu próprio arquivo JS e CSS.

---


## Contribuição 🤝

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção:
	 ```bash
	 git checkout -b minha-feature
	 ```
3. Commit suas alterações e envie um pull request.

---


## Licença 📄

Projeto desenvolvido para fins educacionais. Sinta-se livre para usar, modificar e compartilhar!