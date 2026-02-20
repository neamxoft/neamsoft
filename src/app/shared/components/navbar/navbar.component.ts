import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="af-nav">
      <div class="nav-inner">
        <a routerLink="/" class="nav-logo">neamsoft</a>

        <div class="nav-links">
          <a routerLink="/">Inicio</a>
          <a routerLink="/productos">Productos</a>
          <a routerLink="/servicios">Servicios</a>
          <a routerLink="/metodologia">Metodología</a>
          <a routerLink="/contacto">Contacto</a>
        </div>

        <div class="nav-actions">
          <button (click)="themeService.toggleTheme()" class="theme-toggle" aria-label="Toggle Theme">
            <svg *ngIf="!themeService.isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg *ngIf="themeService.isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #eab308">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <a routerLink="/contacto" class="af-btn-primary nav-cta">Agendar Demo</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host { display: block; position: sticky; top: 0; z-index: 1000; }

    .af-nav {
      height: 80px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--af-border);
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
    }

    :host-context(.dark) .af-nav {
      background: rgba(2, 6, 23, 0.85);
    }

    .nav-inner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: var(--af-container);
      margin: 0 auto;
      padding: 0 24px;
    }

    .nav-logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--af-navy);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }

    .nav-links a {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--af-slate);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--af-navy);
    }

    .nav-actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }

    .theme-toggle {
      padding: 8px;
      border-radius: 50%;
      border: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--af-navy);
    }

    .theme-toggle:hover {
      background-color: var(--af-bg-soft);
    }

    .nav-cta {
      padding: 10px 24px !important;
      font-size: 0.875rem !important;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-cta { display: none; }
    }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
