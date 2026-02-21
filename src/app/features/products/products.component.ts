import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="products-page">
      <section>
        <div class="container-af products-header">
          <span class="badge">Ingeniería Custom</span>
          <h1>Soluciones de Ingeniería de Élite</h1>
          <p class="text-sub" style="max-width: 640px; margin: 0 auto;">
            Infraestructura escalable, desarrollo resiliente y consultoría estratégica para la era cloud.
          </p>
        </div>

        <div class="container-af">
          <div class="products-grid">

            <!-- SaaS & Web Platforms -->
            <div class="af-card product-card">
              <div class="card-accent blue"></div>
              <div class="icon-wrapper blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                </svg>
              </div>
              <h3>Desarrollo de SaaS</h3>
              <p class="text-sub">Plataformas multi-tenancy diseñadas para crecer orgánicamente sin deuda técnica.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>Arquitectura Multi-tenant</li>
                <li><span class="check">✓</span>Integración de Pasarelas</li>
                <li><span class="check">✓</span>Escalado Automático</li>
              </ul>
            </div>

            <!-- Cloud Migration -->
            <div class="af-card product-card">
              <div class="card-accent cyan"></div>
              <div class="icon-wrapper cyan">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3>Migraciones Cloud</h3>
              <p class="text-sub">Transición segura de infraestructuras Legacy y On-Premise hacia ecosistemas Cloud-Native.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>On-Premise to Multi-Cloud</li>
                <li><span class="check">✓</span>Contenerización (Docker/K8s)</li>
                <li><span class="check">✓</span>Cost Optimization</li>
              </ul>
            </div>

            <!-- AI Agents -->
            <div class="af-card product-card">
              <div class="card-accent indigo"></div>
              <div class="icon-wrapper indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.6-3.25 3.95"></path>
                  <path d="M8.24 9.95A4 4 0 0 1 12 2"></path>
                  <path d="M12 18v-4"></path>
                  <circle cx="12" cy="22" r="2"></circle>
                  <path d="M7 14h10"></path>
                  <path d="M5 10h14"></path>
                </svg>
              </div>
              <h3>Agentes de IA</h3>
              <p class="text-sub">Implementación de LLMs y automatización inteligente para flujos de trabajo corporativos.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>RAG Systems (Bases de Datos)</li>
                <li><span class="check">✓</span>Automatización de Soporte</li>
                <li><span class="check">✓</span>IA Generativa Aplicada</li>
              </ul>
            </div>

            <!-- Mobile & Platforms -->
            <div class="af-card product-card">
              <div class="card-accent slate"></div>
              <div class="icon-wrapper slate">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3>Apps & Plataformas</h3>
              <p class="text-sub">Desarrollo móvil nativo y multiplataforma con enfoque en UX técnica y rendimiento.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>iOS & Android Nativo</li>
                <li><span class="check">✓</span>Progressive Web Apps</li>
                <li><span class="check">✓</span>Dashboards de Backoffice</li>
              </ul>
            </div>

            <!-- CRM & E-commerce -->
            <div class="af-card product-card">
              <div class="card-accent violet"></div>
              <div class="icon-wrapper violet">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3>Sistemas de Negocio</h3>
              <p class="text-sub">Custom CRM, ERPs y tiendas en línea diseñadas para flujos de alto volumen.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>CRMs a Medida</li>
                <li><span class="check">✓</span>E-commerce de Alta Escala</li>
                <li><span class="check">✓</span>Integraciones de Terceros</li>
              </ul>
            </div>

            <!-- Cloud PBX -->
            <div class="af-card product-card">
              <div class="card-accent navy"></div>
              <div class="icon-wrapper navy">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Conmutadores Cloud</h3>
              <p class="text-sub">Infraestructura de comunicaciones IP y telefonía especializada para empresas.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>Centrales Virtuales</li>
                <li><span class="check">✓</span>Integración VoIP</li>
                <li><span class="check">✓</span>Alta Disponibilidad</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-padding cta-section">
        <div class="container-af">
          <div class="cta-card">
            <h2 style="color: #fff;">¿No ves tu proyecto aquí?</h2>
            <p>Nuestra especialidad es resolver retos técnicos donde otros fallan. Escríbenos y analicemos tu necesidad.</p>
            <a routerLink="/contacto" class="af-btn-primary cta-btn">Hablar con un Experto</a>
          </div>
        </div>
      </section>
    </main>
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

    .products-page {
      min-height: 100vh;
      padding-top: 80px;
      background: var(--af-bg-soft);
    }

    .products-header {
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

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .product-card {
      position: relative;
      overflow: hidden;
      border: none !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .card-accent {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }
    .card-accent.blue { background: #004aad; }
    .card-accent.cyan { background: #00a8e8; }
    .card-accent.indigo { background: #6366f1; }
    .card-accent.slate { background: #64748b; }
    .card-accent.violet { background: #7c3aed; }
    .card-accent.navy { background: #1e3a5f; }

    .icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .icon-wrapper.blue { background: rgba(0, 74, 173, 0.08); color: #004aad; }
    .icon-wrapper.cyan { background: rgba(0, 168, 232, 0.08); color: #00a8e8; }
    .icon-wrapper.indigo { background: rgba(99, 102, 241, 0.08); color: #6366f1; }
    .icon-wrapper.slate { background: rgba(100, 116, 139, 0.08); color: #64748b; }
    .icon-wrapper.violet { background: rgba(124, 58, 237, 0.08); color: #7c3aed; }
    .icon-wrapper.navy { background: rgba(30, 58, 95, 0.08); color: #1e3a5f; }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }

    .feature-list {
      padding: 0;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .feature-list li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    .check {
      color: #22c55e;
      font-weight: 700;
      font-size: 0.8rem;
    }

    /* CTA */
    .cta-section { text-align: center; }
    .cta-card {
      background: #004aad;
      border-radius: var(--af-radius);
      padding: 80px 40px;
      color: #fff;
    }
    .cta-card p {
      color: rgba(255,255,255,0.8);
      max-width: 560px;
      margin: 0 auto 32px;
    }
    .cta-btn {
      background: #fff !important;
      color: #004aad !important;
    }

    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProductsComponent { }
