import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="expertise-page">
      <div class="container-af header-area">
        <span class="badge">Cómo Operamos</span>
        <h1 class="page-title">Ingeniería de Entrega Continua</h1>
        <p class="text-sub page-subtitle">
          Nuestros procesos están diseñados para garantizar la calidad sin comprometer la velocidad.
        </p>
      </div>

      <div class="container-af">
        <!-- Bloque 1: Cultura de Ingeniería -->
        <div class="expertise-block">
          <div class="expertise-text">
            <span class="block-badge cyan">Trunk-Based Delivery</span>
            <h3 class="block-title">Cultura de Ingeniería</h3>
            <p class="text-sub">
              Fomentamos un enfoque basado en Trunk-based Development y la integración continua
              para reducir drásticamente el "lead time" y asegurar la estabilidad absoluta del sistema.
            </p>
          </div>
          <div class="expertise-image-card">
            <div class="card-titlebar">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="card-bar-title">trunk-based-flow.svg</span>
            </div>
            <div class="card-img-body">
              <img [src]="themeService.isDarkMode() ? 'images/engineering-culture.png' : 'images/engineering-culture-light.png'"
                   alt="Flujo de Ingeniería Continua - Trunk Based Development">
            </div>
          </div>
        </div>

        <!-- Bloque 2: Automatización Radical -->
        <div class="expertise-block reverse">
          <div class="expertise-text">
            <span class="block-badge purple">AI Augmentation</span>
            <h3 class="block-title">Automatización Radical</h3>
            <p class="text-sub">
              La IA y la automatización no son solo herramientas, son pilares de nuestra estrategia
              para maximizar la precisión y eliminar errores humanos en tareas críticas.
            </p>
          </div>
          <div class="expertise-image-card">
            <div class="card-titlebar">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="card-bar-title">automation-pipeline.svg</span>
            </div>
            <div class="card-img-body">
              <img [src]="themeService.isDarkMode() ? 'images/automation-core.png' : 'images/automation-core-light.png'"
                   alt="Pipeline de Automatización con IA - Vibe Coding">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .expertise-page {
      min-height: calc(100vh - 72px);
      padding: 96px 0 120px;
      background-color: var(--bg-app);
    }

    .header-area {
      text-align: center;
      margin-bottom: 72px;
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

    .expertise-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
      margin-bottom: 64px;
    }

    .expertise-block.reverse {
      direction: rtl;
    }
    .expertise-block.reverse > * {
      direction: ltr;
    }

    .expertise-text {
      padding: 48px;
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-card);
      display: flex;
      flex-direction: column;
      gap: 14px;
      transition: all 0.28s ease;
    }

    .expertise-text:hover {
      border-color: rgba(0, 229, 255, 0.3);
      transform: translateY(-3px);
    }

    .block-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      align-self: flex-start;
      margin-bottom: 4px;
    }

    .block-badge.cyan {
      background: rgba(0, 229, 255, 0.12);
      color: var(--color-cyan);
      border: 1px solid rgba(0, 229, 255, 0.3);
    }

    .block-badge.purple {
      background: rgba(139, 92, 246, 0.12);
      color: var(--color-purple);
      border: 1px solid rgba(139, 92, 246, 0.3);
    }

    .block-title {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.02em;
      margin: 0;
    }

    .expertise-image-card {
      background: #080d1a;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-card);
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
      transition: all 0.28s ease;
    }

    .expertise-image-card:hover {
      border-color: rgba(0, 229, 255, 0.35);
      transform: translateY(-3px);
    }

    .card-titlebar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 18px;
      background: #050811;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .card-bar-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: #64748b;
      margin-left: 8px;
    }

    .card-img-body {
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-img-body img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      display: block;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.4));
    }

    @media (max-width: 860px) {
      .expertise-block,
      .expertise-block.reverse {
        grid-template-columns: 1fr;
        direction: ltr;
        gap: 32px;
      }
      .expertise-text { padding: 32px; }
      .expertise-page { padding: 64px 0 80px; }
    }
  `]
})
export class MethodologyComponent {
  themeService = inject(ThemeService);
}
