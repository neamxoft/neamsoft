import { Component, inject, signal, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <main>
      <!-- Hero Section -->
      <section class="section-padding overflow-hidden text-center">
        <div class="container-af">
          <div class="hero-content mx-auto">
            <span class="badge">Elite Software Engineering</span>
            <h1>Ingeniería de Software de Primera Clase</h1>
            <p class="text-sub mb-10" style="font-size: 1.15rem;">
              Diseñamos ecosistemas digitales escalables y resilientes. Consultoría técnica agnóstica para organizaciones que exigen excelencia operativa.
            </p>
            <div class="hero-btns mx-auto">
              <a href="#soluciones" class="af-btn-primary">Nuestra Solución</a>
              <a routerLink="/contacto" class="af-btn-secondary">Contactar Expertos</a>
            </div>
          </div>

          <!-- Hero Graphic (Terminal Style) -->
          <div class="terminal">
             <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
             </div>
             <div class="terminal-body">
                <p><span style="color: #64748b">$</span> neamsoft init --platform cloud-agnostic</p>
                <p style="color: #4ade80">✓ Architecture discovery complete</p>
                <p style="color: #4ade80">✓ Continuous delivery pipeline established</p>
                <p style="color: #ffffff">🚀 Initializing precision engineering...</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Solutions Grid -->
      <section class="section-padding bg-soft" id="soluciones">
        <div class="container-af">
          <div style="margin-bottom: 48px; text-align: center;">
            <h2>Soluciones de Próxima Generación</h2>
            <p class="text-sub" style="max-width: 640px; margin: 0 auto;">Arquitecturas diseñadas para la evolución continua.</p>
          </div>

          <div class="af-grid-3">
            <div class="af-card solution-card">
              <span class="solution-icon">☁️</span>
              <h3 style="font-size: 1.35rem; margin-top: 0;">Cloud-Native Framework</h3>
              <p class="text-sub">Estructuras resilientes optimizadas para cualquier entorno de nube, eliminando la dependencia de proveedores.</p>
            </div>

            <div class="af-card solution-card">
              <span class="solution-icon">⚡</span>
              <h3 style="font-size: 1.35rem; margin-top: 0;">Inteligencia Aumentada</h3>
              <p class="text-sub">Integración de modelos avanzados para potenciar la seguridad y la velocidad de desarrollo en cada fase.</p>
            </div>

            <div class="af-card solution-card">
              <span class="solution-icon">🛡️</span>
              <h3 style="font-size: 1.35rem; margin-top: 0;">Escalabilidad Garantizada</h3>
              <p class="text-sub">Sistemas diseñados para soportar el crecimiento masivo sin degradación de rendimiento ni estabilidad.</p>
            </div>
          </div>

          <!-- Expanded Solutions -->
          <div class="expanded-grid">
            <div class="af-card solution-card">
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
              <h3 style="font-size: 1.35rem; margin-top: 0;">Vibe Coding</h3>
              <p class="text-sub">Potenciamos la ingeniería con IA como copiloto estratégico. Nuestros expertos definen la arquitectura y la IA acelera la implementación bajo supervisión técnica senior continua.</p>
            </div>

            <div class="af-card solution-card">
              <div class="icon-wrapper cyan">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-top: 0;">IaaS & Servidores</h3>
              <p class="text-sub">Infrastructure as a Service: servidores virtuales, redes privadas, almacenamiento elástico y balanceo de carga gestionados.</p>
            </div>

            <div class="af-card solution-card">
              <div class="icon-wrapper rose">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-top: 0;">DevSecOps</h3>
              <p class="text-sub">Seguridad integrada en cada etapa del ciclo de vida: análisis estático, escaneo de dependencias y políticas de compliance automatizadas.</p>
            </div>

            <div class="af-card solution-card">
              <div class="icon-wrapper amber">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-top: 0;">Consultoría Estratégica</h3>
              <p class="text-sub">Arquitectura de soluciones, auditorías técnicas y roadmaps de modernización para organizaciones en transición digital.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why neamsoft -->
      <section class="section-padding">
        <div class="container-af">
          <div class="af-grid-2" style="align-items: center; gap: 48px;">
            <div>
              <span class="section-label">Nuestra Diferencia</span>
              <h2>¿Por qué elegir neamsoft?</h2>
              <p class="text-sub" style="margin-bottom: 32px;">Tecnología de punta al alcance de todos. Somos socios arquitectónicos que democratizan la innovación, llevando soluciones enterprise a organizaciones de todo tamaño.</p>

              <ul class="benefit-list">
                <li>
                  <span class="benefit-dot"></span>
                  <span>Independencia Tecnológica Total</span>
                </li>
                <li>
                  <span class="benefit-dot"></span>
                  <span>Estrategia Trunk-Based Development</span>
                </li>
                <li>
                  <span class="benefit-dot"></span>
                  <span>Seguridad Embebida (DevSecOps)</span>
                </li>
              </ul>
            </div>
            <div class="af-card" style="padding: 0; overflow: hidden; border: none;">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Tech Excellence" class="why-image">
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section-padding contact-section" id="contacto">
        <div class="container-af">
          <div class="af-grid-2" style="align-items: start; gap: 48px;">
            <div>
              <span class="section-label" style="color: #60a5fa;">Contacto Directo</span>
              <h2 style="color: #ffffff;">¿Listo para escalar tu infraestructura?</h2>
              <p style="color: #94a3b8; margin-bottom: 40px; font-size: 1.1rem; line-height: 1.7;">
                Habla con nuestros ingenieros senior. Sin comerciales, solo soluciones técnicas directas para retos complejos.
              </p>

              <div class="contact-info-list">
                <div class="contact-info-item">
                  <div class="contact-info-icon">✉️</div>
                  <div>
                    <h4 style="color: #fff; font-weight: 700; margin-bottom: 4px;">Escríbenos</h4>
                    <p style="color: #94a3b8;">contacto&#64;neamsoft.com.mx</p>
                  </div>
                </div>

                <div class="contact-info-item">
                  <div class="contact-info-icon">📍</div>
                  <div>
                    <h4 style="color: #fff; font-weight: 700; margin-bottom: 4px;">Ubicación</h4>
                    <p style="color: #94a3b8;">Monterrey, MX</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="af-card contact-form-card">
              <form (ngSubmit)="enviarCorreo()" class="contact-form">
                <div class="form-group">
                  <label class="af-label">Nombre Completo</label>
                  <input type="text" class="af-input" [(ngModel)]="form.nombre" name="nombre" placeholder="Ej. Juan Pérez" required>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="af-label">Email Corporativo</label>
                    <input type="email" class="af-input" [(ngModel)]="form.email" name="email" placeholder="juan&#64;empresa.com" required>
                  </div>
                  <div class="form-group">
                    <label class="af-label">Asunto</label>
                    <input type="text" class="af-input" [(ngModel)]="form.asunto" name="asunto" placeholder="Migración Cloud" required>
                  </div>
                </div>
                <div class="form-group">
                  <label class="af-label">Mensaje o Requerimientos</label>
                  <div class="editor-container">
                    <div class="editor-toolbar">
                      <div class="toolbar-group">
                        <button type="button" class="toolbar-btn" title="Negrita" (click)="execCmd('bold')">
                          <strong>B</strong>
                        </button>
                        <button type="button" class="toolbar-btn" title="Cursiva" (click)="execCmd('italic')">
                          <em>I</em>
                        </button>
                        <button type="button" class="toolbar-btn" title="Subrayado" (click)="execCmd('underline')">
                          <span style="text-decoration: underline;">U</span>
                        </button>
                      </div>
                      <div class="toolbar-separator"></div>
                      <div class="toolbar-group">
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Título" (click)="execCmd('formatBlock', 'h3')">
                          H
                        </button>
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Subtítulo" (click)="execCmd('formatBlock', 'h4')">
                          h
                        </button>
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Párrafo" (click)="execCmd('formatBlock', 'p')">
                          ¶
                        </button>
                      </div>
                      <div class="toolbar-separator"></div>
                      <div class="toolbar-group">
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Lista" (click)="execCmd('insertUnorderedList')">
                          • ≡
                        </button>
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Lista Numerada" (click)="execCmd('insertOrderedList')">
                          1. ≡
                        </button>
                      </div>
                      <div class="toolbar-separator"></div>
                      <div class="toolbar-group">
                        <input type="color" class="color-picker" value="#004aad" title="Color de Texto" (input)="execCmd('foreColor', $any($event.target).value)">
                        <button type="button" class="toolbar-btn toolbar-btn-sm" title="Limpiar Formato" (click)="execCmd('removeFormat')">
                          ✕
                        </button>
                      </div>
                    </div>
                    <div #editorArea
                         class="editor-area"
                         contenteditable="true"
                         (input)="onEditorInput()"
                         (paste)="onEditorPaste($event)"
                         data-placeholder="Describe tu reto técnico con formato..."
                    ></div>
                  </div>
                </div>

                <!-- Vista previa del email HTML -->
                <div *ngIf="form.nombre && form.email && form.mensaje" class="preview-toggle">
                  <button type="button" class="preview-btn" (click)="mostrarPreview = !mostrarPreview">
                    {{ mostrarPreview ? '🔽 Ocultar' : '👁️ Vista previa' }} del correo HTML
                  </button>
                </div>
                <div *ngIf="mostrarPreview && form.nombre" class="preview-container" [innerHTML]="getPreviewHtml()"></div>

                <!-- Errores -->
                <p *ngIf="emailError" class="form-error">{{ emailError }}</p>
                <p *ngIf="emailExito" class="form-success">{{ emailExito }}</p>

                <button type="submit" class="af-btn-primary" style="width: 100%;" [disabled]="enviando">
                  {{ enviando ? 'Enviando...' : 'Enviar Mensaje Directo' }}
                </button>
              </form>
            </div>
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

    .section-label {
      display: block;
      color: #004aad;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.8rem;
      margin-bottom: 12px;
    }

    /* Terminal */
    .terminal {
      margin-top: 64px;
      background: #0f172a;
      border-radius: var(--af-radius);
      padding: 16px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .terminal-dots {
      display: flex;
      gap: 8px;
      padding: 8px 8px 16px;
    }
    .dot { width: 12px; height: 12px; border-radius: 50%; display: block; }
    .dot-red { background: rgba(239, 68, 68, 0.5); }
    .dot-yellow { background: rgba(234, 179, 8, 0.5); }
    .dot-green { background: rgba(34, 197, 94, 0.5); }
    .terminal-body {
      padding: 16px 24px 24px;
      font-family: 'SF Mono', 'Fira Code', monospace;
      color: #60a5fa;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .terminal-body p { margin: 0; }

    /* Solution cards */
    .solution-card {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .solution-icon {
      font-size: 2rem;
      line-height: 1;
    }

    /* Expanded solutions grid */
    .expanded-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 32px;
    }
    .icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }
    .icon-wrapper.indigo { background: rgba(99, 102, 241, 0.08); color: #6366f1; }
    .icon-wrapper.cyan { background: rgba(0, 168, 232, 0.08); color: #00a8e8; }
    .icon-wrapper.rose { background: rgba(244, 63, 94, 0.08); color: #f43f5e; }
    .icon-wrapper.amber { background: rgba(245, 158, 11, 0.08); color: #f59e0b; }

    /* Benefits */
    .benefit-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0;
    }
    .benefit-list li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 14px;
      font-weight: 600;
    }
    .benefit-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #004aad;
      flex-shrink: 0;
    }
    .why-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition: filter 0.5s ease;
    }
    .why-image:hover { filter: grayscale(0%); }

    /* Contact */
    .contact-section {
      background: #091026;
      color: #fff;
      overflow: hidden;
    }
    .contact-info-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .contact-info-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 16px;
    }
    .contact-info-icon {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      flex-shrink: 0;
    }
    .contact-form-card {
      background: var(--af-bg-light);
      padding: 40px !important;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    /* Preview */
    .preview-toggle { text-align: right; }
    .preview-btn {
      background: none;
      border: 1px solid var(--af-border);
      border-radius: 8px;
      padding: 6px 14px;
      font-size: 0.8rem;
      color: var(--af-slate);
      cursor: pointer;
      font-family: inherit;
    }
    .preview-btn:hover { background: var(--af-bg-soft); }
    .preview-container {
      border: 1px solid var(--af-border);
      border-radius: 12px;
      padding: 16px;
      background: #f8fafc;
      max-height: 300px;
      overflow-y: auto;
    }

    .form-error {
      color: #ef4444;
      font-size: 0.85rem;
      margin: 0;
      padding: 8px 12px;
      background: #fef2f2;
      border-radius: 8px;
    }
    .form-success {
      color: #22c55e;
      font-size: 0.85rem;
      margin: 0;
      padding: 8px 12px;
      background: #f0fdf4;
      border-radius: 8px;
    }

    /* Rich Text Editor */
    .editor-container {
      border: 1px solid var(--af-border);
      border-radius: 12px;
      overflow: hidden;
      background: var(--af-bg-light);
      transition: border-color 0.2s;
    }
    .editor-container:focus-within {
      border-color: #004aad;
    }
    .editor-toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 12px;
      background: var(--af-bg-soft);
      border-bottom: 1px solid var(--af-border);
      flex-wrap: wrap;
    }
    .toolbar-group {
      display: flex;
      gap: 2px;
    }
    .toolbar-separator {
      width: 1px;
      height: 24px;
      background: var(--af-border);
      margin: 0 6px;
    }
    .toolbar-btn {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 6px;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-family: inherit;
      color: var(--af-navy);
      transition: background 0.15s;
    }
    .toolbar-btn:hover {
      background: rgba(0, 74, 173, 0.08);
    }
    .toolbar-btn-sm {
      font-size: 0.75rem;
    }
    .color-picker {
      width: 28px;
      height: 28px;
      border: 1px solid var(--af-border);
      border-radius: 6px;
      padding: 2px;
      cursor: pointer;
      background: transparent;
    }
    .editor-area {
      min-height: 140px;
      max-height: 300px;
      overflow-y: auto;
      padding: 16px;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--af-navy);
      outline: none;
    }
    .editor-area:empty::before {
      content: attr(data-placeholder);
      color: var(--af-slate);
      pointer-events: none;
    }
    .editor-area h3 { font-size: 1.25rem; margin: 8px 0; }
    .editor-area h4 { font-size: 1.1rem; margin: 6px 0; }
    .editor-area ul, .editor-area ol { padding-left: 24px; margin: 8px 0; }
    .editor-area li { margin-bottom: 4px; }

    @media (max-width: 1024px) {
      .expanded-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .form-row { grid-template-columns: 1fr; }
      .expanded-grid { grid-template-columns: 1fr; }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  themeService = inject(ThemeService);
  emailService = inject(EmailService);

  @ViewChild('editorArea') editorAreaRef!: ElementRef<HTMLDivElement>;

  form = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviando = false;
  emailError = '';
  emailExito = '';
  mostrarPreview = false;

  ngAfterViewInit() {
    // Focus the editor on click
  }

  execCmd(command: string, value: string = '') {
    document.execCommand(command, false, value);
    this.editorAreaRef?.nativeElement.focus();
  }

  onEditorInput() {
    const html = this.editorAreaRef?.nativeElement.innerHTML || '';
    this.form.mensaje = html;
  }

  onEditorPaste(event: ClipboardEvent) {
    // Pegar solo texto plano para evitar estilos externos
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
  }

  getPreviewHtml(): string {
    return this.emailService.buildHtmlMessage(
      this.form.nombre,
      this.form.email,
      this.form.asunto || 'Sin asunto',
      this.form.mensaje
    );
  }

  enviarCorreo() {
    this.emailError = '';
    this.emailExito = '';

    // Sync editor content
    this.onEditorInput();

    // Validaciones
    const plainText = this.editorAreaRef?.nativeElement.innerText?.trim() || '';
    if (!this.form.nombre.trim() || !this.form.email.trim() || !plainText) {
      this.emailError = 'Por favor completa todos los campos requeridos.';
      return;
    }

    if (!this.emailService.isValidEmail(this.form.email)) {
      this.emailError = 'Por favor ingresa un correo electrónico válido.';
      return;
    }

    this.enviando = true;

    const htmlMessage = this.emailService.buildHtmlMessage(
      this.form.nombre,
      this.form.email,
      this.form.asunto || 'Contacto desde neamsoft.com.mx',
      this.form.mensaje
    );

    this.emailService.sendMail({
      to_email: this.form.email,
      subject: this.form.asunto || 'Contacto desde neamsoft.com.mx',
      message: htmlMessage,
      isHTML: true
    }).subscribe({
      next: () => {
        this.emailExito = '✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.';
        this.form = { nombre: '', email: '', asunto: '', mensaje: '' };
        if (this.editorAreaRef) {
          this.editorAreaRef.nativeElement.innerHTML = '';
        }
        this.enviando = false;
        this.mostrarPreview = false;
      },
      error: (err) => {
        this.emailError = '❌ Error al enviar el mensaje. Intenta nuevamente o escríbenos directamente a contacto@neamsoft.com.mx';
        this.enviando = false;
        console.error('Error en EmailService:', err);
      }
    });
  }
}
