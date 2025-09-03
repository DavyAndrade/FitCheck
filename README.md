# FitCheck — Documentação Oficial 🏥

## Visão Geral

O **FitCheck** é uma plataforma web responsiva e minimalista para monitoramento de saúde, com foco em privacidade, usabilidade e resultados baseados em padrões médicos reconhecidos. O projeto é totalmente client-side, sem backend, e foi desenvolvido para portfólio/currículo.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Organização do Código](#organização-do-código)
- [Padrão Visual e Responsividade](#padrão-visual-e-responsividade)
- [Próximos Passos](#próximos-passos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades ⚙️

- **Calculadora de IMC:**
  - Calcula o Índice de Massa Corporal, exibe classificação e dicas de saúde.
- **Calculadora de Peso Corporal Ideal (PCI):**
  - Calcula o peso ideal com base em altura e sexo, mostrando faixa recomendada.
- **Interface Responsiva:**
  - Layout adaptável para mobile, tablet e desktop.
- **Componentização Dinâmica:**
  - Navbar e Footer são carregados via JavaScript, evitando repetição de código.
- **Privacidade:**
  - Todos os cálculos são feitos localmente, sem coleta de dados pessoais.

## Acesso Online 🚀

Você pode acessar o FitCheck diretamente pelo navegador, sem instalar nada, através do GitHub Pages:

**[Acesse FitCheck Online](https://davyandrade.github.io/FitCheck/)**

## Instalação Local (Opcional) 💻

Se preferir rodar localmente:

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/DavyAndrade/FitCheck.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd FitCheck
   ```
3. Abra o arquivo `index.html` no navegador de sua preferência.

## Como Usar

1. Abra `index.html` para acessar a página inicial.
2. Use o menu para navegar entre as calculadoras de IMC e PCI.
3. Preencha os formulários e visualize os resultados instantaneamente.

## Estrutura do Projeto 🗂️

```
FitCheck/
│
├── index.html                # Página inicial (landing page)
├── imc.html                  # Calculadora de IMC
├── pci.html                  # Calculadora de Peso Corporal Ideal
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
│       ├── script.js         # Carrega Navbar/Footer dinamicamente
│       ├── imc.js            # Lógica da calculadora de IMC
│       ├── pci.js            # Lógica da calculadora de PCI
│       ├── navbar.js         # Componente Navbar
│       ├── footer.js         # Componente Footer
│       └── utils.js          # Funções utilitárias
└── ...
```

## Tecnologias Utilizadas 🛠️

- **HTML5** — Estruturação das páginas
- **CSS3** — Estilização, responsividade e layout moderno
- **JavaScript** — Funcionalidades interativas e cálculos dinâmicos
- **FontAwesome** — Ícones para melhor experiência visual

## Organização do Código 🧩

- **Componentização:** Navbar e Footer são carregados dinamicamente via JavaScript (SPA-like experience)
- **Separação de responsabilidades:** Cada funcionalidade/calculadora possui seu próprio arquivo JS e CSS
- **Padrão BEM:** Nomenclatura CSS para facilitar manutenção e escalabilidade

## Padrão Visual e Responsividade 🎨

- **Minimalista, azul/verde:** Visual limpo, moderno e acessível
- **Mobile First:** Layout adaptável para diferentes tamanhos de tela (mobile, tablet, desktop, large desktop)
- **Acessibilidade:** Uso de ícones, contraste e navegação por teclado

## Próximos Passos 🚧

- Melhorar responsividade para tablets e desktops
- Refatorar e limpar CSS de componentes semelhantes
- Ajustar detalhes do padrão BEM
- Adicionar novas calculadoras: Taxa Metabólica Basal, Hidratação (em breve)

## Contribuição 🤝

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações e envie um pull request.

## Licença 📄

Projeto desenvolvido para fins educacionais. Sinta-se livre para usar, modificar e compartilhar!
