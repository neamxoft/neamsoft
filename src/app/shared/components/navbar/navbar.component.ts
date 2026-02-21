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
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">neamsoft</a>

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

          <!-- Botón Hamburguesa para Mobile -->
          <button class="mobile-toggle" (click)="toggleMenu()" aria-label="Menu">
            <svg *ngIf="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg *ngIf="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Overlay de Menú Mobile estilo Terminal -->
    <div class="mobile-menu-overlay" [class.open]="isMenuOpen">
      <div class="mobile-terminal">
        <div class="terminal-header">
           <div class="terminal-dots">
              <span class="dot dot-red" (click)="closeMenu()"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
           </div>
           <span class="terminal-title">neamsoft-cli</span>
        </div>
        <div class="terminal-body">
           <div class="mobile-links">
             <a routerLink="/" (click)="closeMenu()"><span class="cmd">~ $</span> cd /inicio</a>
             <a routerLink="/productos" (click)="closeMenu()"><span class="cmd">~ $</span> cd /productos</a>
             <a routerLink="/servicios" (click)="closeMenu()"><span class="cmd">~ $</span> cd /servicios</a>
             <a routerLink="/metodologia" (click)="closeMenu()"><span class="cmd">~ $</span> cd /metodologia</a>
             <a routerLink="/contacto" (click)="closeMenu()"><span class="cmd">~ $</span> cd /experto</a>
           </div>
           
           <div class="mobile-actions">
             <p style="color: #64748b; font-size: 0.8rem; margin-bottom: 8px;">> _ running system check...</p>
             <p style="color: #22c55e; font-size: 0.8rem; margin-bottom: 16px;">> All systems operational.</p>
             <a routerLink="/contacto" (click)="closeMenu()" class="af-btn-primary" style="display: block; width: 100%; text-align: center;">./agendar-demo.sh</a>
           </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; position: sticky; top: 0; z-index: 1000; }

    .af-nav {
      height: 80px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--af-border);
      background: var(--af-nav-bg, rgba(255, 255, 255, 0.85));
      backdrop-filter: blur(12px);
      position: relative;
      z-index: 1001; /* Asegura que quede arriba del menu */
    }

    :host-context(.dark) .af-nav {
      --af-nav-bg: rgba(2, 6, 23, 0.85);
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

    /* Ocultamos toggle de movil por defecto */
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--af-navy);
      cursor: pointer;
      padding: 6px;
    }

    /* ---- Menú Mobile Overlay ---- */
    .mobile-menu-overlay {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      height: calc(100vh - 80px);
      background: var(--af-bg); /* Adopta el color del theme actual */
      padding: 24px;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .mobile-menu-overlay.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .mobile-terminal {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
      overflow: hidden;
    }

    .terminal-header {
      background: #1e293b;
      padding: 16px;
      display: flex;
      align-items: center;
      position: relative;
    }

    .terminal-dots {
      display: flex;
      gap: 8px;
    }
    
    .dot { width: 12px; height: 12px; border-radius: 50%; display: block; cursor: pointer; }
    .dot-red { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green { background: #28c840; }

    .terminal-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
      font-size: 0.8rem;
      color: #94a3b8;
    }

    .terminal-body {
      padding: 32px 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    .mobile-links {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-top: 16px;
    }

    .mobile-links a {
      font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
      font-size: 1.25rem;
      color: #e2e8f0;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .mobile-links a:hover,
    .mobile-links a:active {
      color: #60a5fa;
    }

    .cmd {
      color: #22c55e;
      margin-right: 16px;
      font-weight: 700;
    }

    .mobile-actions {
      margin-top: auto;
      padding-top: 48px;
      padding-bottom: 24px;
      font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-cta { display: none; }
      .mobile-toggle { display: block; }
    }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevenir scroll en el body cuando el menú está abierto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}
