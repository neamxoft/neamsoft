import { Component, inject, ViewEncapsulation, ChangeDetectorRef, NgZone } from '@angular/core';
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
      <!-- Hero Section con estilo comercial y paleta fresca de la referencia -->
      <section class="hero-banner text-center">
        <div class="container-af">
          <div class="hero-content mx-auto">
            <div class="breadcrumbs mx-auto">
              <span class="status-dot"></span>
              <span>neamsoft // SRE Console // Node: us-east-1 [Active]</span>
            </div>
            <h1 class="hero-title">Ingeniería de Software & Arquitectura Cloud</h1>
            <p class="hero-subtitle mx-auto">
              Ecosistemas digitales resilientes, microservicios serverless y entrega continua para sistemas que exigen alta concurrencia y máxima disponibilidad.
            </p>
            <div class="hero-btns mx-auto">
              <a href="#servicios" class="af-btn-primary">Nuestros Servicios</a>
              <a href="#contacto" class="btn-glass">Contactar Expertos</a>
            </div>
          </div>

          <!-- Hero Graphic (Terminal Style) -->
          <div class="terminal mx-auto">
             <div class="terminal-header">
                <div class="terminal-dots">
                   <span class="dot dot-red"></span>
                   <span class="dot dot-yellow"></span>
                   <span class="dot dot-green"></span>
                </div>
                <span class="terminal-filename">neamsoft-engine.sh</span>
                <div class="terminal-header-spacer"></div>
             </div>
             <div class="terminal-body">
                <p><span class="terminal-prompt">$</span> neamsoft init --platform cloud-agnostic</p>
                <p style="color: #34d399">✓ Architecture discovery complete</p>
                <p style="color: #34d399">✓ Continuous delivery pipeline established</p>
                <p style="color: #ffffff">🚀 Initializing precision engineering...</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Métricas Reales de Impacto en Negocio -->
      <section class="metrics-bar">
        <div class="container-af">
          <div class="metrics-grid">
            <div class="metric-item">
              <span class="metric-value text-cyan">99.99%</span>
              <span class="metric-label">Uptime en Producción</span>
            </div>
            <div class="metric-item">
              <span class="metric-value text-teal">-40%</span>
              <span class="metric-label">Costos de Infraestructura Cloud</span>
            </div>
            <div class="metric-item">
              <span class="metric-value text-coral">Zero</span>
              <span class="metric-label">Downtime en Despliegues CI/CD</span>
            </div>
            <div class="metric-item">
              <span class="metric-value text-purple">100%</span>
              <span class="metric-label">Código Inmutable del Cliente</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Servicios Centrales de Desarrollo y Consultoría -->
      <section class="section-padding" id="servicios">
        <div class="container-af">
          <div class="section-header text-center">
            <span class="badge">Capacidades de Consultoría</span>
            <h2 class="section-heading">Ingeniería de Software & Soluciones Cloud</h2>
            <p class="text-sub mx-auto" style="max-width: 680px;">
              Diseñamos, desarrollamos y modernizamos sistemas de misión crítica con altos estándares de calidad, arquitectura desacoplada y entrega continua.
            </p>
          </div>

          <div class="services-pillars-grid">
            <!-- Pilar 1: Desarrollo a Medida -->
            <div class="af-card pillar-card pillar-blue">
              <div class="pillar-header">
                <div class="icon-wrapper blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                </div>
                <span class="pillar-tag">Custom Dev</span>
              </div>
              <h3 class="pillar-title">Desarrollo de Software a Medida</h3>
              <p class="text-sub">
                Construimos plataformas web escalables, portales empresariales y soluciones SaaS con arquitecturas orientadas al dominio que eliminan la deuda técnica.
              </p>
              <ul class="pillar-bullets">
                <li><span class="bullet-dot blue"></span>Frontend moderno con Angular 21, TypeScript y diseño responsivo</li>
                <li><span class="bullet-dot blue"></span>Backends de alto rendimiento con Python, Node.js y APIs REST/GraphQL</li>
                <li><span class="bullet-dot blue"></span>Clean Architecture, diseño modular y pruebas unitarias exhaustivas</li>
              </ul>
              <div class="tech-tag-row">
                <span class="tech-tag">Angular 21</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">APIs REST</span>
              </div>
            </div>

            <!-- Pilar 2: Arquitectura Cloud & Serverless -->
            <div class="af-card pillar-card pillar-cyan">
              <div class="pillar-header">
                <div class="icon-wrapper cyan">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <span class="pillar-tag">Cloud Native</span>
              </div>
              <h3 class="pillar-title">Arquitectura Cloud & Serverless</h3>
              <p class="text-sub">
                Estructuras cloud en AWS administradas 100% mediante Infraestructura como Código (Terraform), asegurando escalabilidad elástica y costos óptimos.
              </p>
              <ul class="pillar-bullets">
                <li><span class="bullet-dot cyan"></span>Microservicios Serverless con AWS Lambda, API Gateway y SES</li>
                <li><span class="bullet-dot cyan"></span>Provisionamiento inmutable con Terraform (IaC) sin intervención manual</li>
                <li><span class="bullet-dot cyan"></span>Estrategias FinOps para reducir hasta un 40% el gasto en nube</li>
              </ul>
              <div class="tech-tag-row">
                <span class="tech-tag">AWS Lambda</span>
                <span class="tech-tag">Terraform</span>
                <span class="tech-tag">CloudFront</span>
                <span class="tech-tag">FinOps</span>
              </div>
            </div>

            <!-- Pilar 3: Modernización Legacy -->
            <div class="af-card pillar-card pillar-rose">
              <div class="pillar-header">
                <div class="icon-wrapper rose">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <span class="pillar-tag">Migration</span>
              </div>
              <h3 class="pillar-title">Modernización de Sistemas Legacy</h3>
              <p class="text-sub">
                Transformamos monolitos y aplicaciones obsoletas en ecosistemas modulares sin interrumpir la operación ni provocar pérdidas de datos.
              </p>
              <ul class="pillar-bullets">
                <li><span class="bullet-dot rose"></span>Migración gradual con patrón Strangler Fig y cero downtime</li>
                <li><span class="bullet-dot rose"></span>Desacoplamiento de bases de datos relacionales y optimización SQL</li>
                <li><span class="bullet-dot rose"></span>Auditorías de seguridad, refactorización y eliminación de cuellos de botella</li>
              </ul>
              <div class="tech-tag-row">
                <span class="tech-tag">Zero-Downtime</span>
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">Microservicios</span>
                <span class="tech-tag">Auditoría</span>
              </div>
            </div>

            <!-- Pilar 4: DevSecOps & SRE -->
            <div class="af-card pillar-card pillar-purple">
              <div class="pillar-header">
                <div class="icon-wrapper indigo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <span class="pillar-tag">CI/CD & SRE</span>
              </div>
              <h3 class="pillar-title">DevSecOps & Entrega Continua</h3>
              <p class="text-sub">
                Procesos de ingeniería automatizados para entregar valor a producción diariamente con total confianza, pruebas continuas y seguridad embebida.
              </p>
              <ul class="pillar-bullets">
                <li><span class="bullet-dot purple"></span>Estrategia Trunk-Based Development con despliegues automatizados</li>
                <li><span class="bullet-dot purple"></span>Pipelines de CI/CD con análisis estático y escaneo de vulnerabilidades</li>
                <li><span class="bullet-dot purple"></span>Observabilidad continua con métricas, logs centralizados y alertas SRE</li>
              </ul>
              <div class="tech-tag-row">
                <span class="tech-tag">CI/CD Pipelines</span>
                <span class="tech-tag">Trunk-Based</span>
                <span class="tech-tag">Vitest</span>
                <span class="tech-tag">CloudWatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Metodología de Trabajo Transparente -->
      <section class="section-padding bg-alt">
        <div class="container-af">
          <div class="section-header text-center">
            <span class="badge">Cómo Trabajamos</span>
            <h2 class="section-heading">Proceso de Ingeniería de 4 Pasos</h2>
            <p class="text-sub mx-auto" style="max-width: 640px;">
              Metodología ágil y predecible que garantiza resultados técnicos medibles desde el primer sprint.
            </p>
          </div>

          <div class="process-grid">
            <div class="process-card">
              <div class="process-number">01</div>
              <h4>Discovery & Arquitectura</h4>
              <p class="text-sub">
                Analizamos tu modelo de negocio, detectamos dependencias críticas y diseñamos el blueprint técnico y la topología cloud adecuada.
              </p>
            </div>

            <div class="process-card">
              <div class="process-number">02</div>
              <h4>Prototipado & Contratos</h4>
              <p class="text-sub">
                Especificamos contratos de API, diseñamos esquemas de datos y validamos la experiencia de usuario antes de codificar la lógica central.
              </p>
            </div>

            <div class="process-card">
              <div class="process-number">03</div>
              <h4>Desarrollo Iterativo CI/CD</h4>
              <p class="text-sub">
                Sprints quincenales con entregas continuas a staging, pruebas automatizadas en cada push y visibilidad total para los stakeholders.
              </p>
            </div>

            <div class="process-card">
              <div class="process-number">04</div>
              <h4>Despliegue & Soporte SRE</h4>
              <p class="text-sub">
                Salida a producción sin interrupciones con Terraform, rollback automático ante anomalías y monitoreo proactivo 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Nuestra Diferencia (Por qué elegir neamsoft) -->
      <section class="section-padding why-section">
        <div class="container-af">
          <div class="why-grid">
            <div class="why-info">
              <span class="badge">Nuestra Diferencia</span>
              <h2 class="section-heading">Socios de Ingeniería, no solo proveedores</h2>
              <p class="text-sub" style="margin-bottom: 28px; font-size: 1.05rem;">
                En neamsoft no subcontratamos ni creamos dependencias artificiales. Nos integramos a tu visión técnica con transparencia absoluta y código limpio.
              </p>

              <div class="benefit-box-list">
                <div class="benefit-box">
                  <div class="benefit-icon-wrap">💎</div>
                  <div>
                    <h5>Propiedad Intelectual 100% Inmutable</h5>
                    <p class="text-sub">Todo el código, configuración de Terraform y documentación son propiedad exclusiva de tu empresa desde el día uno.</p>
                  </div>
                </div>

                <div class="benefit-box">
                  <div class="benefit-icon-wrap">🛡️</div>
                  <div>
                    <h5>Cero Deuda Técnica por Diseño</h5>
                    <p class="text-sub">Desarrollo guiado por pruebas (TDD) y tipado estricto que aseguran estabilidad y mantenibilidad a largo plazo.</p>
                  </div>
                </div>

                <div class="benefit-box">
                  <div class="benefit-icon-wrap">⚡</div>
                  <div>
                    <h5>Comunicación Directa con Ingenieros Senior</h5>
                    <p class="text-sub">Sin intermediarios comerciales. Hablas directamente con arquitectos y desarrolladores que resuelven los retos técnicos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="why-graphic-card">
              <div class="graphic-terminal-header">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
                <span class="graphic-title">engineering-culture // trunk-based.sh</span>
              </div>
              <div class="graphic-body">
                <img [src]="themeService.isDarkMode() ? 'images/engineering-culture.png' : 'images/engineering-culture-light.png'"
                     alt="Cultura de Ingeniería - Entrega Continua"
                     class="why-img-fluid"
                >
                <div class="graphic-caption">
                  <span class="caption-pill">Continuous Delivery</span>
                  <span class="caption-text">Flujo Trunk-Based con validación automatizada de código.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Formulario Comercial de Contacto Limpio y Profesional -->
      <section class="section-padding contact-section" id="contacto">
        <div class="container-af">
          <div class="contact-layout">
            <!-- Columna Izquierda: Información Corporativa -->
            <div class="contact-info-col">
              <span class="badge badge-blue">Contacto Directo</span>
              <h2 class="contact-heading">¿Listo para iniciar tu próximo proyecto de software?</h2>
              <p class="contact-sub">
                Conversa directamente con nuestros ingenieros senior. Analizaremos tu requerimiento y te presentaremos una propuesta arquitectónica y económica sin compromiso.
              </p>

              <div class="contact-cards-group">
                <div class="contact-detail-card">
                  <div class="contact-detail-icon">✉️</div>
                  <div>
                    <span class="detail-label">Correo Electrónico</span>
                    <a href="mailto:contacto@neamsoft.com.mx" class="detail-link">contacto&#64;neamsoft.com.mx</a>
                  </div>
                </div>

                <div class="contact-detail-card">
                  <div class="contact-detail-icon">📞</div>
                  <div>
                    <span class="detail-label">Teléfono Directo</span>
                    <a href="tel:+528119172261" class="detail-link">(81) 1917 2261</a>
                  </div>
                </div>

                <div class="contact-detail-card">
                  <div class="contact-detail-icon">📍</div>
                  <div>
                    <span class="detail-label">Sede Corporativa</span>
                    <span class="detail-text">Monterrey, Nuevo León, México</span>
                  </div>
                </div>

                <div class="contact-detail-card">
                  <div class="contact-detail-icon">⏱️</div>
                  <div>
                    <span class="detail-label">Tiempo de Respuesta</span>
                    <span class="detail-text">Menos de 24 horas hábiles garantizadas</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Columna Derecha: Tarjeta de Formulario Profesional -->
            <div class="contact-form-col">
              <div class="af-card contact-form-card">
                <div class="form-card-header">
                  <h3>Envíanos un Mensaje</h3>
                  <p class="text-sub">Completa los datos y te responderemos a la brevedad.</p>
                </div>

                <form (ngSubmit)="enviarCorreo()" class="commercial-form">
                  <!-- Fila: Nombre y Email -->
                  <div class="form-row-2">
                    <div class="form-field">
                      <label class="field-label">Nombre Completo *</label>
                      <input type="text"
                             class="field-input"
                             [(ngModel)]="form.nombre"
                             name="nombre"
                             placeholder="Ej. Juan Pérez"
                             required>
                    </div>

                    <div class="form-field">
                      <label class="field-label">Correo Corporativo *</label>
                      <input type="email"
                             class="field-input"
                             [(ngModel)]="form.email"
                             name="email"
                             placeholder="juan&#64;empresa.com"
                             required>
                    </div>
                  </div>

                  <!-- Fila: Empresa y Servicio -->
                  <div class="form-row-2">
                    <div class="form-field">
                      <label class="field-label">Empresa / Organización</label>
                      <input type="text"
                             class="field-input"
                             [(ngModel)]="form.empresa"
                             name="empresa"
                             placeholder="Ej. TechCorp MX">
                    </div>

                    <div class="form-field">
                      <label class="field-label">Servicio de Interés</label>
                      <select class="field-input field-select" [(ngModel)]="form.servicio" name="servicio">
                        <option value="Desarrollo de Software a Medida">Desarrollo de Software a Medida</option>
                        <option value="Arquitectura Cloud & AWS">Arquitectura Cloud & AWS</option>
                        <option value="Modernización de Sistemas Legacy">Modernización de Sistemas Legacy</option>
                        <option value="DevSecOps & CI/CD">DevSecOps & CI/CD</option>
                        <option value="Consultoría Técnica General">Consultoría Técnica General</option>
                      </select>
                    </div>
                  </div>

                  <!-- Asunto -->
                  <div class="form-field">
                    <label class="field-label">Asunto del Mensaje *</label>
                    <input type="text"
                           class="field-input"
                           [(ngModel)]="form.asunto"
                           name="asunto"
                           placeholder="Ej. Cotización para nueva plataforma web / Migración AWS"
                           required>
                  </div>

                  <!-- Mensaje Amplio y Limpio -->
                  <div class="form-field">
                    <label class="field-label">Detalles del Proyecto o Reto Técnico *</label>
                    <textarea class="field-textarea"
                              [(ngModel)]="form.mensaje"
                              name="mensaje"
                              rows="5"
                              placeholder="Describe brevemente el alcance de tu proyecto, tecnologías actuales, tiempos estimados o requerimientos clave..."
                              required></textarea>
                  </div>

                  <!-- Alertas de Estado -->
                  <div *ngIf="emailError" class="alert-box alert-error">
                    <span>⚠️ {{ emailError }}</span>
                  </div>

                  <div *ngIf="emailExito" class="alert-box alert-success">
                    <span>{{ emailExito }}</span>
                  </div>

                  <!-- Botón de Envío -->
                  <button type="submit"
                          class="af-btn-primary form-submit-btn"
                          [disabled]="enviando">
                    <span *ngIf="!enviando">Enviar Mensaje a Ingeniería</span>
                    <span *ngIf="enviando">Enviando mensaje...</span>
                    <svg *ngIf="!enviando" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>

                  <p class="form-privacy-note">
                    🔒 Tu información es confidencial. Nunca compartimos tus datos con terceros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  themeService = inject(ThemeService);
  emailService = inject(EmailService);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  form = {
    nombre: '',
    email: '',
    empresa: '',
    servicio: 'Desarrollo de Software a Medida',
    asunto: '',
    mensaje: ''
  };

  enviando = false;
  emailError = '';
  emailExito = '';

  enviarCorreo() {
    this.emailError = '';
    this.emailExito = '';

    if (!this.form.nombre.trim() || !this.form.email.trim() || !this.form.mensaje.trim()) {
      this.emailError = 'Por favor completa todos los campos requeridos (*).';
      return;
    }

    if (!this.emailService.isValidEmail(this.form.email)) {
      this.emailError = 'Por favor ingresa un correo electrónico válido.';
      return;
    }

    this.enviando = true;

    // Construir contenido enriquecido para el correo
    const contenidoCompleto = `
      <p><strong>Servicio de interés:</strong> ${this.form.servicio}</p>
      ${this.form.empresa ? `<p><strong>Empresa:</strong> ${this.form.empresa}</p>` : ''}
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      <p style="white-space: pre-wrap;">${this.form.mensaje.replace(/\n/g, '<br/>')}</p>
    `;

    const asuntoFinal = this.form.asunto.trim()
      ? `[${this.form.servicio}] ${this.form.asunto}`
      : `Nuevo contacto web - ${this.form.servicio}`;

    const htmlMessage = this.emailService.buildHtmlMessage(
      this.form.nombre,
      this.form.email,
      asuntoFinal,
      contenidoCompleto
    );

    this.emailService.sendMail({
      message: htmlMessage
    }).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.emailExito = '✅ Mensaje recibido con éxito. Nos pondremos en contacto contigo en menos de 24 horas.';
          this.form = {
            nombre: '',
            email: '',
            empresa: '',
            servicio: 'Desarrollo de Software a Medida',
            asunto: '',
            mensaje: ''
          };
          this.enviando = false;
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.emailError = 'No se pudo enviar el mensaje automáticamente. Por favor escríbenos directamente a contacto@neamsoft.com.mx';
          this.enviando = false;
          this.cdr.detectChanges();
          console.error('Error enviando correo:', err);
        });
      }
    });
  }
}
