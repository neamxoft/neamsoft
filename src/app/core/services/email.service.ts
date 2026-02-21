import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SendMailPayload {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private http = inject(HttpClient);
  private apiUrl = environment.sendmailUrl;

  sendMail(payload: SendMailPayload): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, { headers }).pipe(
      timeout(15000) // 15 segundos max
    );
  }

  /**
   * Construye un mensaje HTML profesional con la plantilla de neamsoft
   */
  buildHtmlMessage(nombre: string, email: string, asunto: string, mensaje: string): string {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
        <div style="background: #091026; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.02em;">neamsoft</h1>
          <p style="color: #60a5fa; margin: 8px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Nuevo Mensaje de Contacto</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 120px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #091026;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #091026;">
                <a href="mailto:${email}" style="color: #004aad; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Asunto</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #091026;">${asunto}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Mensaje</p>
            <div style="color: #091026; margin: 0; line-height: 1.6;">${mensaje}</div>
          </div>
        </div>
        <div style="padding: 24px 32px; background: #f1f5f9; text-align: center;">
          <p style="color: #94a3b8; font-size: 11px; margin: 0;">© 2026 neamsoft Engineering Services | Monterrey, MX</p>
        </div>
      </div>
    `;
  }

  /**
   * Valida formato de email
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
