import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container-af">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="footer-logo">&#123; neamsoft &#125;</span>
            <p class="footer-desc">
              Consultoría de ingeniería de software de élite. Transformamos desafíos complejos en soluciones resilientes y escalables de clase mundial.
            </p>
            <div class="footer-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contacto&#64;neamsoft.com.mx</span>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Servicios</h4>
            <ul>
              <li><a routerLink="/servicios">Desarrollo a Medida</a></li>
              <li><a routerLink="/productos">Ingeniería Custom</a></li>
              <li><a routerLink="/servicios">Infraestructura Cloud</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Compañía</h4>
            <ul>
              <li><a routerLink="/metodologia">Metodología</a></li>
              <li><a routerLink="/contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© {{ currentYear }} neamsoft Engineering Services. Todos los derechos reservados.</p>
          <span class="footer-tagline">Precision Engineering</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }

    .footer {
      background-color: #091026;
      color: #ffffff;
      padding: 80px 0 40px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
    }

    .footer-logo {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      display: block;
      margin-bottom: 20px;
    }

    .footer-desc {
      color: #94a3b8;
      max-width: 360px;
      margin-bottom: 24px;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    .footer-email {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }

    .footer-heading {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #60a5fa;
      margin-bottom: 24px;
    }

    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .footer-col a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .footer-col a:hover {
      color: #ffffff;
    }

    .footer-bottom {
      margin-top: 64px;
      padding-top: 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      color: #64748b;
      font-size: 0.85rem;
    }

    .footer-tagline {
      color: #64748b;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-family: monospace;
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
