import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="top-nav-bar">
      <div class="nav-container">
        <!-- Logo con brand mark -->
        <a routerLink="/" class="brand-logo" (click)="closeMenu()">
          <span class="logo-text" style="font-family: 'AristotelicaDisplayDemiBold', sans-serif;">&#123; neamsoft &#125;</span>
          <span class="brand-submark">software & cloud</span>
        </a>

        <!-- Enlaces tipo Pill Navigation como en el dashboard -->
        <nav class="nav-pill-group">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="pill-nav-item">Inicio</a>
          <a routerLink="/servicios" routerLinkActive="active" class="pill-nav-item">Servicios</a>
          <a routerLink="/productos" routerLinkActive="active" class="pill-nav-item">Soluciones</a>
          <a routerLink="/metodologia" routerLinkActive="active" class="pill-nav-item">Metodología</a>
          <a routerLink="/contacto" routerLinkActive="active" class="pill-nav-item">Contacto</a>
        </nav>

        <!-- Acciones: Status + Theme Toggle + CTA -->
        <div class="nav-end-actions">
          <!-- Status pill -->
          <div class="pill-badge pill-green status-pill d-none-mobile">
            <span class="status-dot"></span>
            <span>Uptime 99.99%</span>
          </div>

          <!-- Selector de Modo Oscuro / Claro -->
          <button (click)="themeService.toggleTheme()" class="theme-icon-btn" aria-label="Cambiar tema">
            <svg *ngIf="!themeService.isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg *ngIf="themeService.isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #fbbf24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <!-- Botón de Agendar / Contactar -->
          <a routerLink="/contacto" class="btn-primary nav-cta">
            <span>Contactar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <!-- Botón Móvil -->
          <button class="mobile-toggle-btn" (click)="toggleMenu()" aria-label="Abrir Menú">
            <svg *ngIf="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg *ngIf="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Overlay de Menú Mobile estilo Terminal SRE -->
    <div class="mobile-menu-overlay" [class.open]="isMenuOpen">
      <div class="mobile-terminal-card">
        <div class="terminal-bar">
          <div class="terminal-dots">
            <span class="dot dot-red" (click)="closeMenu()"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <span class="terminal-tag">neamsoft-consulting</span>
        </div>
        <div class="terminal-content">
          <div class="mobile-nav-links">
            <a routerLink="/" (click)="closeMenu()"><span class="cmd-prompt">~/</span> inicio</a>
            <a routerLink="/servicios" (click)="closeMenu()"><span class="cmd-prompt">~/</span> servicios</a>
            <a routerLink="/productos" (click)="closeMenu()"><span class="cmd-prompt">~/</span> soluciones</a>
            <a routerLink="/metodologia" (click)="closeMenu()"><span class="cmd-prompt">~/</span> metodologia</a>
            <a routerLink="/contacto" (click)="closeMenu()"><span class="cmd-prompt">~/</span> contacto</a>
          </div>
          <div class="mobile-footer-actions">
            <div class="status-line">
              <span class="status-dot"></span>
              <span>All AWS infrastructure operational</span>
            </div>
            <a routerLink="/contacto" (click)="closeMenu()" class="btn-primary" style="width: 100%; justify-content: center;">
              Contactar Ingenieros
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
