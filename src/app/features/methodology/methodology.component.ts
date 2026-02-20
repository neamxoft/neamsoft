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
        <h1>Ingeniería de Entrega Continua</h1>
        <p class="text-sub" style="max-width: 640px; margin: 0 auto;">
          Nuestros procesos están diseñados para garantizar la calidad sin comprometer la velocidad.
        </p>
      </div>

      <div class="container-af">
        <!-- Bloque 1: Cultura de Ingeniería -->
        <div class="expertise-block">
          <div class="expertise-text">
            <h3>Cultura de Ingeniería</h3>
            <p class="text-sub">
              Fomentamos un enfoque basado en Trunk-based Development y la integración continua
              para reducir drásticamente el "lead time" y asegurar la estabilidad absoluta del sistema.
            </p>
          </div>
          <div class="expertise-image">
            <img [src]="themeService.isDarkMode() ? 'images/engineering-culture.png' : 'images/engineering-culture-light.png'"
                 alt="Flujo de Ingeniería Continua - Trunk Based Development">
          </div>
        </div>

        <!-- Bloque 2: Automatización Radical -->
        <div class="expertise-block reverse">
          <div class="expertise-text">
            <h3>Automatización Radical</h3>
            <p class="text-sub">
              La IA y la automatización no son solo herramientas, son pilares de nuestra estrategia
              para maximizar la precisión y eliminar errores humanos en tareas críticas.
            </p>
          </div>
          <div class="expertise-image">
            <img [src]="themeService.isDarkMode() ? 'images/automation-core.png' : 'images/automation-core-light.png'"
                 alt="Pipeline de Automatización con IA - Vibe Coding">
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

    .expertise-page {
      min-height: 100vh;
      padding: 80px 0 80px;
      background: var(--af-bg-soft);
    }

    .header-area {
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
      background: var(--af-bg-light);
      border-radius: var(--af-radius);
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .expertise-text h3 {
      font-size: 1.75rem;
      margin-bottom: 16px;
    }

    .expertise-image {
      border-radius: var(--af-radius);
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
    }

    .expertise-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: opacity 0.3s ease;
    }

    @media (max-width: 768px) {
      .expertise-block,
      .expertise-block.reverse {
        grid-template-columns: 1fr;
        direction: ltr;
      }
    }
  `]
})
export class MethodologyComponent {
  themeService = inject(ThemeService);
}
