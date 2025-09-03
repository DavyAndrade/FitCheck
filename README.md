# FitCheck 🩺

## Visão Geral
O **FitCheck** é uma plataforma web responsiva para monitoramento de saúde, com foco em privacidade, usabilidade e resultados baseados em padrões médicos reconhecidos. O projeto é 100% client-side, sem backend, e foi desenvolvido para portfólio/currículo.

## Acesso Online
Você pode acessar o FitCheck diretamente pelo navegador, sem instalar nada, através do GitHub Pages:

👉 **[Acesse FitCheck Online](https://davyandrade.github.io/FitCheck/)**

## Instalação Local
1. Clone ou baixe este repositório:
	```bash
	git clone https://github.com/DavyAndrade/FitCheck.git
	```
2. Acesse a pasta do projeto:
	```bash
	cd FitCheck
	```
3. Abra o arquivo `index.html` no navegador de sua preferência.

## Funcionalidades
- **Página Inicial:** Apresentação do projeto, navegação rápida para as calculadoras e destaques de benefícios.
- **Calculadora de IMC:** Permite calcular o Índice de Massa Corporal, exibe classificação (Abaixo do Peso, Peso Normal, Sobrepeso, Obesidade) e dicas.
- **Calculadora de Peso Corporal Ideal (PCI):** Calcula o peso ideal com base na altura e sexo, usando a fórmula de Devine, e mostra a faixa recomendada.
- **Navegação Dinâmica:** Navbar e Footer são componentes dinâmicos carregados via JavaScript, evitando repetição de código e facilitando manutenção.
- **Privacidade:** Todos os cálculos são feitos localmente, sem coleta ou armazenamento de dados pessoais.
- **Responsividade:** Layout adaptável para mobile, tablet e desktop.

## Como Usar
1. Acesse o site online ou abra `index.html` localmente.
2. Use o menu para navegar entre as calculadoras de IMC e PCI.
3. Preencha os formulários e visualize os resultados instantaneamente.

## Estrutura do Projeto
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
│       ├── script.js         # Carrega Navbar/Footer dinamicamente e listeners
│       ├── imc.js            # Lógica da calculadora de IMC
│       ├── pci.js            # Lógica da calculadora de PCI
│       ├── navbar.js         # Componente Navbar (HTML dinâmico)
│       ├── footer.js         # Componente Footer (HTML dinâmico)
│       └── utils.js          # Funções utilitárias (redirecionamento, toggle, etc)
└── ...
```

## Tecnologias Utilizadas
- **HTML5** — Estruturação das páginas
- **CSS3** — Estilização, responsividade e layout moderno
- **JavaScript** — Funcionalidades interativas e cálculos dinâmicos
- **FontAwesome** — Ícones para melhor experiência visual

## Organização do Código
- **Componentização:** Navbar e Footer são carregados dinamicamente via JavaScript.
- **Separação de responsabilidades:** Cada funcionalidade/calculadora possui seu próprio arquivo JS e CSS.
- **Padrão BEM:** Nomenclatura CSS para facilitar manutenção e escalabilidade.

## Padrão Visual e Responsividade
- **Minimalista, verde:** Visual limpo, moderno e acessível.
- **Mobile First:** Layout adaptável para diferentes tamanhos de tela (mobile, tablet, desktop, large desktop).
- **Acessibilidade:** Uso de ícones, contraste e navegação por teclado.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção:
	```bash
	git checkout -b minha-feature
	```
3. Commit suas alterações e envie um pull request.

## Licença
Projeto desenvolvido para fins educacionais. Sinta-se livre para usar, modificar e compartilhar!
