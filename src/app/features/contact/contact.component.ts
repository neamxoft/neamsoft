import { Component, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="contact-page-wrapper">
      <section class="section-padding contact-section">
        <div class="container-af">
          <div class="contact-layout">
            <!-- Columna Izquierda: Información Corporativa -->
            <div class="contact-info-col">
              <span class="badge badge-blue">Contacto Directo</span>
              <h1 class="contact-heading">¿Listo para iniciar tu próximo proyecto de software?</h1>
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
    .contact-page-wrapper {
      min-height: calc(100vh - 72px);
      background-color: var(--bg-app);
    }
  `]
})
export class ContactComponent {
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
