import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-section">
      <div class="container-bento">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="footer-logo" style="font-family: 'AristotelicaDisplayDemiBold', sans-serif;">&#123; neamsoft &#125;</span>
            <p class="footer-desc">
              Consultoría de ingeniería de software y arquitectura cloud. Diseñamos infraestructuras inmutables, microservicios serverless y pipelines automatizados de alto rendimiento.
            </p>
            <div class="footer-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contacto&#64;neamsoft.com.mx</span>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Ecosistema</h4>
            <ul>
              <li><a routerLink="/servicios">Arquitectura Cloud</a></li>
              <li><a routerLink="/productos">Microservicios Serverless</a></li>
              <li><a routerLink="/servicios">DevSecOps & Trunk-Based</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Organización</h4>
            <ul>
              <li><a routerLink="/metodologia">Metodología</a></li>
              <li><a routerLink="/contacto">Consola de Contacto</a></li>
              <li><a href="https://github.com/neamsoft" target="_blank" rel="noopener">GitHub Repos</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {{ currentYear }} neamsoft Engineering Services. Monterrey, MX. Todos los derechos reservados.</p>
          <span class="footer-tagline">Cloud-Native // SRE Resilience // High Throughput</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }

    .footer-section {
      background-color: #060812;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      color: #ffffff;
      padding: 64px 0 32px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
    }

    .footer-logo {
      font-size: 1.6rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      display: block;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .footer-desc {
      color: #94a3b8;
      max-width: 380px;
      margin-bottom: 20px;
      line-height: 1.6;
      font-size: 0.88rem;
    }

    .footer-email {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--color-cyan, #00e5ff);
      font-weight: 600;
      font-size: 0.88rem;
      font-family: 'JetBrains Mono', monospace;
    }

    .footer-heading {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #60a5fa;
      margin-bottom: 20px;
    }

    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-col a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.88rem;
      transition: color 0.2s ease;
    }

    .footer-col a:hover {
      color: #ffffff;
    }

    .footer-bottom {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      color: #64748b;
      font-size: 0.8rem;
    }

    .footer-tagline {
      color: #64748b;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: 'JetBrains Mono', monospace;
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 36px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 14px;
        text-align: center;
      }
    }

    /* Light Mode Overrides */
    html:not(.dark) .footer-section {
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      color: #0f172a;
    }

    html:not(.dark) .footer-logo {
      color: #0f172a;
    }

    html:not(.dark) .footer-desc {
      color: #64748b;
    }

    html:not(.dark) .footer-col a {
      color: #475569;
    }

    html:not(.dark) .footer-col a:hover {
      color: #0066ff;
    }

    html:not(.dark) .footer-bottom {
      border-top: 1px solid #e2e8f0;
    }

    html:not(.dark) .footer-bottom p,
    html:not(.dark) .footer-tagline {
      color: #94a3b8;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
