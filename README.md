# neamsoft — Website Frontend

Este repositorio contiene la plataforma pública de **neamsoft**, construida con **Angular 18**. La aplicación incluye secciones corporativas, información de consultoría y un sistema de contacto que utiliza AWS SES y AWS Lambda (arquitectura Serverless).

## 🚀 Inicio Rápido Local

### Requisitos Previos

- **Node.js**: v18.x o superior
- **Angular CLI**: v18.x (`npm install -g @angular/cli`)

### Instalación y Ejecución

1. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las variables de entorno locales:
   Copia el archivo de ejemplo para crear la configuración local.
   ```bash
   cp src/environments/environment.ts.example src/environments/environment.ts
   cp src/environments/environment.ts.example src/environments/environment.prod.ts
   ```
   Abre `src/environments/environment.ts` y reemplaza `SENDMAIL_URL_PLACEHOLDER` con la URL de tu API Gateway en AWS.

3. Inicia el servidor de desarrollo local:
   ```bash
   ng serve
   ```
   A. Si deseas que el servidor sea accesible desde la red local, puedes usar el flag `--host 0.0.0.0`:
   ```bash
   ng serve --host 0.0.0.0
   ```
   B. Si deseas cambiar el puerto por defecto (4200), puedes usar el flag `--port`:
   ```bash
   ng serve --port 4200
   ```
   C. Si deseas cambiar el puerto por defecto (4200), puedes usar el flag `--port`:
   
   ```bash
   ng serve --host 0.0.0.0 --port 4200
   ```
   
   La aplicación estará disponible en `http://localhost:4200/`.

---

## 🏗️ Build Manual para Producción

Para compilar el proyecto manualmente para producción y subirlo o probarlo localmente:

1. Asegúrate de tener configurado tu `environment.prod.ts` correctamente con los endpoints en producción y `production: true`.
2. Ejecuta el siguiente comando para generar la versión de producción estática:
   ```bash
   npx ng build --configuration production
   ```
3. Los artefactos estáticos (HTML, JS, CSS) se encontrarán generados en la ruta interna `./dist/neamsoft/browser/`. Esta carpeta contiene exactamente lo que se debe subir a S3.

---

## 🛠️ GitHub Actions y AWS (CI / CD Integrado)

El proyecto cuenta con flujos de trabajo (*workflows*) de GitHub Actions para CI (compilación y validación en ramas secundarias) y CD (despliegue automático a S3 y CloudFront al empujar a `main`).

### Variables y Secretos a Configurar en GitHub

El archivo de configuración ambiental `src/environments/environment.ts` **no se sube al repositorio** por motivos de seguridad (está excluido vía `.gitignore`).  
En lugar de eso, en el servidor de CI/CD se genera el entorno dinámicamente y de forma segura al compilar, a partir del archivo de ejemplo y utilizando tus *GitHub Secrets* y *Variables*.

Para que GitHub Actions logre realizar la compilación y conectarse a AWS, debes ir en tu repositorio a **Settings > Secrets and variables > Actions** y configurar:

#### 🔐 Secrets (Secretos de Repositorio)
| Nombre | Descripción |
|---|---|
| `SENDMAIL_URL` | URL real del API Gateway de AWS que procesa el correo (ej: `https://xyz...execute-api.us-east-1.amazonaws.com/prod/sendmail`). |
| `AWS_ROLE_ARN` | **Seguridad Avanzada (OIDC):** El ARN del Rol IAM configurado en AWS para ser asumido por GitHub Actions (ej: `arn:aws:iam::123456789012:role/GitHubActionsRole`). Esto evita crear o almacenar llaves secretas de largo plazo. |
| `CLOUDFRONT_DIST_ID` | El identificador de tu distribución CDN de CloudFront (ej: `E2XYZABCDE123`). |

> 💡 **Nota sobre AWS OIDC:**
> Para usar  `AWS_ROLE_ARN`, necesitas crear un "Identity Provider" (Proveedor de Identidad) de tipo OpenID Connect en IAM de AWS con la URL `token.actions.githubusercontent.com`, y luego crear un Rol de IAM en AWS. A este Rol se le debe asociar la política de permisos necesaria (S3 y CloudFront) y establecer como Entidad de Confianza al Identity Provider, apuntando hacia este repositorio de GitHub (ej: `repo:neamsoft/neamsoft-website:ref:refs/heads/main`).

#### 🌐 Variables (Variables de Repositorio)
| Nombre | Descripción |
|---|---|
| `AWS_REGION` | Región donde está alojada tu infraestructura cloud en AWS (ej: `us-east-1`). |
| `S3_BUCKET_NAME` | El nombre del Bucket S3 configurado como alojamiento estático (ej: `neamsoft-website-bucket`). |

_Una vez configurados, el despliegue a **AWS** dejará de requerir intervención humana, y el CloudFront vaciará su caché de forma transparente para los usuarios._

---

### Flujo CI (Integración Continua) - `ci.yml`
Se ejecuta bajo cualquier `push` y Pull Request hacia ramas diferentes a `main`.
* Descarga el código y la caché de Node.
* Instala dependencias limpias.
* Genera dinámicamente el `environment.ts` inyectando tu secreto temporal.
* Valida que la aplicación `npx ng build` compila correctamente sin errores de TypeScript ni romperse.

### Flujo CD (Despliegue Continuo) - `cd.yml`
Se ejecuta únicamente ante un `push` a la rama productiva **`main`**.
* Genera el `environment.prod.ts` con producción activada (producción verdadera).
* Compila todo a código estático final (`dist/neamsoft/browser/`).
* **Deploy a S3**: Usa `aws s3 sync` con tu SDK para reemplazar los archivos viejos con los nuevos mediante la flag `--delete`.
* **Invalidación de CloudFront**: Limpia la caché perimetral usando `create-invalidation` en toda la ruta `/*` para forzar que los navegadores consuman la versión más reciente en S3.
