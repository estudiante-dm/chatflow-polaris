# ChatFlow Polaris - Documentación Técnica

## Índice

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Funcionalidades del Bot](#funcionalidades-del-bot)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Implementación en Servidor](#implementación-en-servidor)
7. [Personalización](#personalización)
8. [Mantenimiento](#mantenimiento)

---

## Descripción del Proyecto

**ChatFlow Polaris** es un chatbot web interactivo desarrollado para Polaris Data que simula una conversación con "Estrella", la asistente virtual de la empresa. El bot está diseñado para capturar leads de formación mediante un flujo conversacional guiado.

### Características Principales

- **Interfaz responsive** adaptable a diferentes dispositivos
- **Animaciones fluidas** para una experiencia natural
- **Captura de datos** estructurada del usuario
- **Diseño modular** fácil de personalizar
- **Sin dependencias externas** (JavaScript vanilla)

---

## Funcionalidades del Bot

### 1. Flujo Conversacional Completo

El bot sigue un flujo estructurado de 7 pasos:

1. **Saludo inicial**: Presentación de Estrella
2. **Selección de curso**: 3 opciones de formación
3. **Solicitud de nombre**: Input personalizado
4. **Saludo personalizado**: Usando el nombre del usuario
5. **Información del curso**: Descripción específica según selección
6. **Solicitud de contacto**: Email (obligatorio) y teléfono (opcional)
7. **Confirmación final**: Mensaje de despedida

### 2. Gestión de Datos

- **Almacenamiento local**: Los datos se guardan en `window.datosUsuario`
- **Estructura de datos**:
  ```javascript
  {
    curso: "Formación seleccionada",
    nombre: "Nombre del usuario",
    email: "email@ejemplo.com",
    telefono: "123456789" // opcional
  }
  ```

### 3. Controles de Usuario

- **Icono de chat**: Abre/cierra el chat (toggle)
- **Botón X**: Cierra el chat
- **Botón Reset**: Reinicia la conversación completa
- **Navegación por teclado**: Enter para enviar respuestas

---

## Arquitectura Técnica

### Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript ES6**: Lógica del chatbot
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Poppins

### Patrón de Diseño

- **Arquitectura modular**: Funciones separadas por responsabilidad
- **Event-driven**: Basado en eventos del DOM
- **State management**: Control de estado del chat
- **Progressive enhancement**: Funciona sin JavaScript básico

---

## Estructura de Archivos

```
chatflow-polaris/
├── index.html          # Página principal
├── style.css           # Estilos del chatbot
├── script.js           # Lógica del chatbot
├── img/
│   ├── estrella.webp   # Avatar del bot
│   └── logo.png        # Logo de la empresa
├── README.md           # Documentación del proyecto
└── DOCUMENTACION_CHATFLOW_POLARIS.md
```

### Descripción de Archivos

#### `index.html`

- Estructura HTML del chat
- Mensajes iniciales predefinidos
- Botones de selección de cursos
- Referencias a CSS y JavaScript

#### `style.css`

- Estilos responsive del chat
- Animaciones y transiciones
- Temas de colores corporativos
- Estilos para inputs y botones

#### `script.js`

- Lógica principal del chatbot
- Gestión de eventos
- Animaciones progresivas
- Almacenamiento de datos

---

## Instalación y Configuración

### Requisitos Mínimos

- Servidor web (Apache, Nginx, IIS)
- Navegador moderno (Chrome 60+, Firefox 55+, Safari 12+)
- Conexión a internet (para fuentes y iconos)

### Instalación Local

1. **Descargar archivos**:

   ```bash
   git clone [repositorio] chatflow-polaris
   cd chatflow-polaris
   ```

2. **Estructura de carpetas**:

   - Crear carpeta `img/` si no existe
   - Añadir `estrella.webp` y `logo.png`

3. **Servidor local**:

   ```bash
   # Con Python
   python -m http.server 8000

   # Con Node.js
   npx serve .

   # Con PHP
   php -S localhost:8000
   ```

4. **Acceder**: `http://localhost:8000`

---

## Implementación en Servidor

### Opción 1: Hosting Compartido

1. **Subir archivos** vía FTP/cPanel
2. **Verificar permisos** de lectura en archivos
3. **Comprobar rutas** de imágenes
4. **Testear funcionalidad**

### Opción 2: VPS/Servidor Dedicado

#### Apache

```apache
<VirtualHost *:80>
    ServerName chatbot.tudominio.com
    DocumentRoot /var/www/chatflow-polaris

    <Directory /var/www/chatflow-polaris>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

#### Nginx

```nginx
server {
    listen 80;
    server_name chatbot.tudominio.com;
    root /var/www/chatflow-polaris;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Opción 3: CDN/Netlify/Vercel

1. **Conectar repositorio** Git
2. **Configurar build**: No necesario (archivos estáticos)
3. **Deploy automático** en cada commit

---

## Personalización

### Modificar Contenido

#### Cambiar mensajes del bot:

```javascript
// En script.js, línea ~40
const infoCursos = [
	"Tu mensaje personalizado para opción 1",
	"Tu mensaje personalizado para opción 2",
	"Tu mensaje personalizado para opción 3",
];
```

#### Cambiar opciones de cursos:

```html
<!-- En index.html -->
<button class="btn_opcion" id="btnPresencial">Tu Opción Personalizada 1</button>
```

### Modificar Estilos

#### Colores corporativos:

```css
/* En style.css */
:root {
	--color-primary: #27f; /* Azul principal */
	--color-secondary: #e0e0e0; /* Gris mensajes bot */
	--color-accent: #ff4d4d; /* Rojo notificaciones */
}
```

#### Tipografía:

```css
/* Cambiar fuente */
@import url("https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600&display=swap");

body {
	font-family: "TuFuente", sans-serif;
}
```

### Añadir Funcionalidades

#### Integración con CRM:

```javascript
// Después de capturar datos
function enviarACRM(datos) {
	fetch("/api/crm", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(datos),
	});
}
```

#### Analytics:

```javascript
// Tracking de eventos
function trackEvent(action, data) {
	gtag("event", action, {
		custom_parameter: data,
	});
}
```

---

## Mantenimiento

### Monitoreo

- **Logs de servidor**: Revisar errores 404/500
- **Analytics**: Conversiones y abandono
- **Performance**: Tiempo de carga

### Actualizaciones

- **Contenido**: Modificar mensajes según necesidades
- **Estilos**: Actualizar diseño corporativo
- **Funcionalidades**: Añadir nuevas características

### Backup

- **Archivos**: Copia de seguridad regular
- **Datos**: Si se implementa backend
- **Configuración**: Documentar cambios

### Troubleshooting Común

#### El chat no se abre:

- Verificar consola de errores
- Comprobar rutas de archivos
- Validar JavaScript

#### Estilos no se aplican:

- Cache del navegador
- Rutas de CSS
- Conflictos con otros estilos

#### Datos no se guardan:

- Verificar `window.datosUsuario`
- Comprobar flujo completo
- Revisar validaciones

---

## Contacto y Soporte

Para soporte técnico o consultas sobre implementación:

- **Documentación**: Este archivo
- **Código fuente**: Comentarios en archivos
- **Testing**: Probar en diferentes navegadores

---

_Documentación generada para ChatFlow Polaris v1.0_
_Fecha: Diciembre 2025_
