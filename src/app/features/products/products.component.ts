import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="products-page">
      <section class="section-padding">
        <div class="container-af products-header">
          <span class="badge">Ingeniería Custom</span>
          <h1 class="page-title">Soluciones de Ingeniería de Élite</h1>
          <p class="text-sub page-subtitle">
            Infraestructura escalable, desarrollo resiliente y consultoría estratégica para la era cloud.
          </p>
        </div>

        <div class="container-af">
          <div class="products-grid">

            <!-- SaaS & Web Platforms -->
            <div class="product-card card-accent-blue">
              <div class="icon-wrapper blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                </svg>
              </div>
              <h3 class="product-title">Desarrollo de SaaS</h3>
              <p class="text-sub">Plataformas multi-tenancy diseñadas para crecer orgánicamente sin deuda técnica.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>Arquitectura Multi-tenant</li>
                <li><span class="check">✓</span>Integración de Pasarelas</li>
                <li><span class="check">✓</span>Escalado Automático</li>
              </ul>
            </div>

            <!-- Cloud Migration -->
            <div class="product-card card-accent-cyan">
              <div class="icon-wrapper cyan">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3 class="product-title">Migraciones Cloud</h3>
              <p class="text-sub">Transición segura de infraestructuras Legacy y On-Premise hacia ecosistemas Cloud-Native.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>On-Premise to Multi-Cloud</li>
                <li><span class="check">✓</span>Contenerización (Docker/K8s)</li>
                <li><span class="check">✓</span>Cost Optimization</li>
              </ul>
            </div>

            <!-- AI Agents -->
            <div class="product-card card-accent-indigo">
              <div class="icon-wrapper indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.6-3.25 3.95"></path>
                  <path d="M8.24 9.95A4 4 0 0 1 12 2"></path>
                  <path d="M12 18v-4"></path>
                  <circle cx="12" cy="22" r="2"></circle>
                  <path d="M7 14h10"></path>
                  <path d="M5 10h14"></path>
                </svg>
              </div>
              <h3 class="product-title">Agentes de IA</h3>
              <p class="text-sub">Implementación de LLMs y automatización inteligente para flujos de trabajo corporativos.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>RAG Systems (Bases de Datos)</li>
                <li><span class="check">✓</span>Automatización de Soporte</li>
                <li><span class="check">✓</span>IA Generativa Aplicada</li>
              </ul>
            </div>

            <!-- Mobile & Platforms -->
            <div class="product-card card-accent-rose">
              <div class="icon-wrapper rose">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 class="product-title">Apps & Plataformas</h3>
              <p class="text-sub">Desarrollo móvil nativo y multiplataforma con enfoque en UX técnica y rendimiento.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>iOS & Android Nativo</li>
                <li><span class="check">✓</span>Progressive Web Apps</li>
                <li><span class="check">✓</span>Dashboards de Backoffice</li>
              </ul>
            </div>

            <!-- CRM & E-commerce -->
            <div class="product-card card-accent-teal">
              <div class="icon-wrapper teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 class="product-title">Sistemas de Negocio</h3>
              <p class="text-sub">Custom CRM, ERPs y tiendas en línea diseñadas para flujos de alto volumen.</p>
              <ul class="feature-list">
                <li><span class="check">✓</span>CRMs a Medida</li>
                <li><span class="check">✓</span>E-commerce de Alta Escala</li>
                <li><span class="check">✓</span>Integraciones de Terceros</li>
              </ul>
            </div>

            <!-- Cloud PBX -->
            <div class="product-card card-accent-amber">
              <div class="icon-wrapper amber">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="product-title">Conmutadores Cloud</h3>
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
            <h2 class="cta-title">¿No ves tu proyecto aquí?</h2>
            <p class="cta-text">Nuestra especialidad es resolver retos técnicos donde otros fallan. Escríbenos y analicemos tu necesidad.</p>
            <a routerLink="/contacto" class="cta-btn">Hablar con un Experto</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }

    .products-page {
      min-height: calc(100vh - 72px);
      background-color: var(--bg-app);
    }

    .products-header {
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

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .product-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: var(--radius-card);
      padding: 36px;
      box-shadow: var(--shadow-card);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.28s ease;
    }

    .product-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
    }

    .card-accent-blue::before { background: #0066ff; }
    .card-accent-cyan::before { background: #00e5ff; }
    .card-accent-indigo::before { background: #8b5cf6; }
    .card-accent-rose::before { background: #f43f5e; }
    .card-accent-teal::before { background: #00bfa5; }
    .card-accent-amber::before { background: #f59e0b; }

    .product-card:hover {
      transform: translateY(-4px);
      border-color: rgba(0, 229, 255, 0.3);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
    }

    .icon-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 22px;
    }

    .icon-wrapper.blue { background: rgba(0, 102, 255, 0.15); color: #60a5fa; }
    .icon-wrapper.cyan { background: rgba(0, 229, 255, 0.15); color: #22d3ee; }
    .icon-wrapper.indigo { background: rgba(139, 92, 246, 0.15); color: #c084fc; }
    .icon-wrapper.rose { background: rgba(244, 63, 94, 0.15); color: #fb7185; }
    .icon-wrapper.teal { background: rgba(0, 191, 165, 0.15); color: #2dd4bf; }
    .icon-wrapper.amber { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }

    .product-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-main);
      letter-spacing: -0.01em;
      margin-bottom: 10px;
    }

    .feature-list {
      padding: 0;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
    }

    .feature-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-muted);
    }

    .check {
      color: #10b981;
      font-weight: 800;
      font-size: 0.9rem;
    }

    /* CTA Section */
    .cta-section {
      text-align: center;
      padding-top: 32px;
    }

    .cta-card {
      background: linear-gradient(135deg, #091226 0%, #0047ba 50%, #009988 100%);
      border-radius: var(--radius-card);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 72px 40px;
      color: #ffffff;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
    }

    .cta-title {
      font-size: clamp(1.8rem, 3.2vw, 2.4rem);
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
      letter-spacing: -0.02em;
    }

    .cta-text {
      color: rgba(255, 255, 255, 0.85);
      font-size: 1.05rem;
      max-width: 600px;
      margin: 0 auto 32px;
      line-height: 1.6;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      border-radius: var(--radius-pill);
      background: #ffffff !important;
      color: #091026 !important;
      font-weight: 700;
      font-size: 0.96rem;
      text-decoration: none;
      transition: all 0.2s ease;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .cta-btn:hover {
      background: #e2e8f0 !important;
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .products-grid { grid-template-columns: 1fr; }
      .cta-card { padding: 48px 24px; }
    }
  `]
})
export class ProductsComponent { }
