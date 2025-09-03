// Footer Component
export default function loadFooter() {
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
