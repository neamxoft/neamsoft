import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-page">
      <div class="container-af">
        <div class="contact-grid">

          <div>
            <span class="section-label">Contacto</span>
            <h1>Iniciemos la Transformación</h1>
            <p class="text-sub" style="margin-bottom: 40px; font-size: 1.1rem;">
              Nuestros expertos están listos para analizar sus desafíos técnicos y proponer soluciones de ingeniería de alto impacto.
            </p>

            <div class="info-list">
              <div class="info-item">
                <span class="info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p class="text-sub">contacto [at] neamsoft [dot] com [dot] mx</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p class="text-sub">Monterrey, MX</p>
                </div>
              </div>
            </div>
          </div>

          <div class="af-card form-card">
            <form (ngSubmit)="enviarCorreo()" class="form-body">
              <div class="form-group">
                <label class="af-label">Nombre Completo</label>
                <input type="text" name="name" [(ngModel)]="formData.name" class="af-input" placeholder="Juan Pérez" required>
              </div>
              <div class="form-group">
                <label class="af-label">Correo Corporativo</label>
                <input type="email" name="email" [(ngModel)]="formData.email" class="af-input" placeholder="juan.perez&#64;empresa.com" required>
              </div>
              <div class="form-group">
                <label class="af-label">Asunto</label>
                <input type="text" name="subject" [(ngModel)]="formData.subject" class="af-input" placeholder="Migración Cloud">
              </div>
              <div class="form-group">
                <label class="af-label">Mensaje</label>
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
                       data-placeholder="Describa su desafío técnico con formato..."
                  ></div>
                </div>
              </div>

              <p *ngIf="emailError" class="msg-error">{{ emailError }}</p>
              <p *ngIf="emailExito" class="msg-success">{{ emailExito }}</p>

              <button type="submit" class="af-btn-primary submit-btn" [disabled]="enviando">
                {{ enviando ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .contact-page {
      min-height: 100vh;
      padding: 120px 0 80px;
      background: var(--af-bg-soft);
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: start;
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    .info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 14px;
    }

    .info-icon {
      font-size: 1.25rem;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: rgba(0, 74, 173, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info-item h4 { font-size: 0.95rem; margin-bottom: 2px; }
    .info-item .text-sub { font-size: 0.9rem; }

    .form-card {
      padding: 40px !important;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    }

    .form-body {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .submit-btn {
      width: 100%;
      margin-top: 4px;
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
    .toolbar-btn-sm { font-size: 0.75rem; }
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

    .msg-error {
      color: #ef4444;
      font-size: 0.85rem;
      margin: 0;
      padding: 8px 12px;
      background: #fef2f2;
      border-radius: 8px;
    }

    .msg-success {
      color: #22c55e;
      font-size: 0.85rem;
      margin: 0;
      padding: 8px 12px;
      background: #f0fdf4;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent implements AfterViewInit {
  emailService = inject(EmailService);

  @ViewChild('editorArea') editorAreaRef!: ElementRef<HTMLDivElement>;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  enviando = false;
  emailError = '';
  emailExito = '';

  ngAfterViewInit() { }

  execCmd(command: string, value: string = '') {
    document.execCommand(command, false, value);
    this.editorAreaRef?.nativeElement.focus();
  }

  onEditorInput() {
    this.formData.message = this.editorAreaRef?.nativeElement.innerHTML || '';
  }

  onEditorPaste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
  }

  enviarCorreo() {
    this.emailError = '';
    this.emailExito = '';

    this.onEditorInput();

    const plainText = this.editorAreaRef?.nativeElement.innerText?.trim() || '';
    if (!this.formData.name.trim() || !this.formData.email.trim() || !plainText) {
      this.emailError = 'Por favor completa todos los campos requeridos.';
      return;
    }

    if (!this.emailService.isValidEmail(this.formData.email)) {
      this.emailError = 'Por favor ingresa un correo electrónico válido.';
      return;
    }

    this.enviando = true;

    const htmlMessage = this.emailService.buildHtmlMessage(
      this.formData.name,
      this.formData.email,
      this.formData.subject || 'Contacto desde neamsoft.com.mx',
      this.formData.message
    );

    this.emailService.sendMail({
      to_email: this.formData.email,
      subject: this.formData.subject || 'Contacto desde neamsoft.com.mx',
      message: htmlMessage,
      isHTML: true
    }).subscribe({
      next: () => {
        this.emailExito = '✅ Mensaje enviado. Nos pondremos en contacto pronto.';
        this.formData = { name: '', email: '', subject: '', message: '' };
        if (this.editorAreaRef) {
          this.editorAreaRef.nativeElement.innerHTML = '';
        }
        this.enviando = false;
      },
      error: () => {
        this.emailError = '❌ Error al enviar. Intenta nuevamente.';
        this.enviando = false;
      }
    });
  }
}
