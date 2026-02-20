import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-page">
      <div class="container-af">
        <div class="services-header">
          <span class="badge">Nuestras Capacidades</span>
          <h1>Soluciones de Ingeniería de Precisión</h1>
          <p class="text-sub" style="max-width: 640px; margin: 0 auto;">Arquitecturas diseñadas para la evolución continua en ecosistemas digitales complejos.</p>
        </div>

        <div class="services-grid">
          <!-- Desarrollo a Medida -->
          <div class="af-card service-card">
            <div class="icon-wrapper blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
            </div>
            <h3>Software a Medida</h3>
            <p class="text-sub">
              Ingeniería centrada en el dominio del negocio. Construimos sistemas robustos, testeables y evolucionables.
            </p>
            <ul class="feature-list">
              <li><span class="dot"></span>Microservicios y sistemas distribuidos</li>
              <li><span class="dot"></span>Desarrollo basado en pruebas (TDD)</li>
            </ul>
          </div>

          <!-- Cloud Services -->
          <div class="af-card service-card">
            <div class="icon-wrapper cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3>Infraestructura Cloud</h3>
            <p class="text-sub">
              Arquitecturas resilientes y escalables. Implementamos IaC con un enfoque agnóstico de nube.
            </p>
            <ul class="feature-list">
              <li><span class="dot"></span>Automatización de infraestructura (IaC)</li>
              <li><span class="dot"></span>Multi-cloud y Cloud-native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 100px;
      background: rgba(0, 74, 173, 0.08);
      color: #004aad;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 24px;
    }

    .services-page {
      min-height: 100vh;
      padding: 80px 0 80px;
      background: var(--af-bg-soft);
    }

    .services-header {
      text-align: center;
      margin-bottom: 64px;
    }

    .section-label {
      display: block;
      color: #004aad;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.8rem;
      margin-bottom: 12px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .service-card {
      border: none !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .icon-wrapper.blue {
      background: rgba(0, 74, 173, 0.08);
      color: #004aad;
    }

    .icon-wrapper.cyan {
      background: rgba(0, 168, 232, 0.08);
      color: #00a8e8;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }

    .feature-list {
      padding: 0;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .feature-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #004aad;
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      .services-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ServicesComponent { }
