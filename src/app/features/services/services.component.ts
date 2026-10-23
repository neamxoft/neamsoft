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
          <h1 class="page-title">Soluciones de Ingeniería de Precisión</h1>
          <p class="text-sub page-subtitle">
            Arquitecturas diseñadas para la evolución continua en ecosistemas digitales complejos.
          </p>
        </div>

        <div class="services-grid">
          <!-- Software a Medida -->
          <div class="service-card card-blue">
            <div class="icon-wrapper blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
            </div>
            <h3 class="service-title">Software a Medida</h3>
            <p class="text-sub">
              Ingeniería centrada en el dominio del negocio. Construimos sistemas robustos, testeables y evolucionables.
            </p>
            <ul class="feature-list">
              <li><span class="feature-dot blue"></span>Microservicios y sistemas distribuidos</li>
              <li><span class="feature-dot blue"></span>Desarrollo basado en pruebas (TDD)</li>
            </ul>
          </div>

          <!-- Infraestructura Cloud -->
          <div class="service-card card-cyan">
            <div class="icon-wrapper cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3 class="service-title">Infraestructura Cloud</h3>
            <p class="text-sub">
              Arquitecturas resilientes y escalables. Implementamos IaC con un enfoque agnóstico de nube.
            </p>
            <ul class="feature-list">
              <li><span class="feature-dot cyan"></span>Automatización de infraestructura (IaC)</li>
              <li><span class="feature-dot cyan"></span>Multi-cloud y Cloud-native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .services-page {
      min-height: calc(100vh - 72px);
      padding: 96px 0 120px;
      background-color: var(--bg-app);
      position: relative;
    }

    .services-header {
      text-align: center;
      margin-bottom: 64px;
    }

    .page-title {
      font-size: clamp(2.2rem, 3.8vw, 3rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-main);
      margin: 16px 0 14px;
    }

    .page-subtitle {
      max-width: 660px;
      margin: 0 auto;
      font-size: 1.1rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .service-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: var(--radius-card);
      padding: 44px;
      box-shadow: var(--shadow-card);
      transition: all 0.28s ease;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
    }

    .card-blue::before { background: linear-gradient(90deg, #0066ff, #00e5ff); }
    .card-cyan::before { background: linear-gradient(90deg, #00bfa5, #00e5ff); }

    .service-card:hover {
      transform: translateY(-4px);
      border-color: rgba(0, 229, 255, 0.35);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
    }

    .icon-wrapper {
      width: 54px;
      height: 54px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .icon-wrapper.blue { background: rgba(0, 102, 255, 0.15); color: #60a5fa; }
    .icon-wrapper.cyan { background: rgba(0, 229, 255, 0.15); color: #22d3ee; }

    .service-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.015em;
      margin-bottom: 12px;
    }

    .feature-list {
      padding: 0;
      margin-top: 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      list-style: none;
    }

    .feature-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-muted);
    }

    .feature-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .feature-dot.blue { background: #3b82f6; box-shadow: 0 0 8px rgba(59, 130, 246, 0.6); }
    .feature-dot.cyan { background: #00e5ff; box-shadow: 0 0 8px rgba(0, 229, 255, 0.6); }

    @media (max-width: 860px) {
      .services-grid { grid-template-columns: 1fr; }
      .service-card { padding: 32px; }
      .services-page { padding: 64px 0 80px; }
    }
  `]
})
export class ServicesComponent { }
