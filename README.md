# Proyecto: ChatFlowPolaris – Desarrollo de un Chatbot Web con Gestión y Exportación de Conversaciones

En este proyecto desarrollarás **ChatFlowPolaris**, una aplicación web que simula un chatbot basado en reglas y que te permitirá gestionar, almacenar y exportar conversaciones. Tendrás libertad total para elegir con qué tecnología quieres trabajar: **JavaScript nativo**, **React** o **PHP**. El objetivo es que diseñes un sistema funcional, organizado y capaz de persistir datos con un método sencillo, ya sea en el navegador o mediante un backend básico.

---

## Objetivo general

Tu objetivo es construir un chatbot que:

- Reciba mensajes del usuario.
- Responda mediante reglas simples (sin IA).
- Guarde las conversaciones.
- Te permita administrarlas desde un pequeño panel.
- Pueda exportarlas a **Excel**, **CSV** o **JSON**.

> **Nota**: No necesitas crear un backend complejo. Puedes usar `localStorage` o `IndexedDB` si lo prefieres. Si quieres ir más allá, puedes añadir un backend sencillo en **PHP** o **Node.js**.

---

## Qué debes desarrollar

### 1. La interfaz del chatbot
Crearás un widget o módulo de chat que contenga:
- Un campo de entrada.
- Un listado de mensajes enviados y recibidos.
- Las reglas que definirán las respuestas del bot.

### 2. La lógica del bot
Implementarás un sistema de respuestas simples. Puedes usar:
- Estructuras condicionales,
- Un JSON de patrones,
- O cualquier método equivalente.

### 3. La persistencia
Elige uno de estos enfoques:

#### Sin backend:
- Guardar conversaciones en `localStorage`, `IndexedDB` o archivos generados en el navegador.
- Tener la opción de exportar esas conversaciones a **Excel/CSV/JSON**.

#### Con backend (opcional):
- Crear una pequeña API usando **PHP** o **Node.js**.
- Guardar conversaciones en archivos **JSON** o en una base de datos ligera como **SQLite**.
- Generar exportaciones desde el servidor o el panel.

### 4. Panel de administración
Implementarás un panel que te permita:
- Ver todas las conversaciones registradas.
- Consultar el detalle de cada conversación.
- Eliminar conversaciones.
- Exportarlas a un archivo descargable (**CSV/Excel/JSON**).

### 5. Mejoras opcionales
Además del mínimo obligatorio, deberás implementar **al menos tres mejoras adicionales**, como por ejemplo:
- Tema claro/oscuro.
- Respuestas rápidas.
- Animaciones en los mensajes.
- Exportación a PDF.
- Múltiples sesiones de chat.
- Selector de temas visuales.
- Notificaciones o sonidos.

> **Importante**: Tú decides cuáles, pero deben estar bien integradas.

---

## Tecnologías que puedes usar

Puedes combinar o usar solo una:

**Frontend:**
- JavaScript nativo
- React
- HTML + CSS

**Backend (solo si lo eliges):**
- PHP
- Node.js
- SQLite, MySQL, MongoDB o archivos JSON

> **No hay un stack obligatorio**. La clave es que el resultado sea funcional, estructurado y que permita persistencia.

---

## Fases recomendadas del trabajo

Estas fases son orientativas, pero te servirán para planificar:

1. **Diseño del chatbot** (8 h) → Interfaz básica y lógica del bot.  
2. **Estructura del frontend** (8–10 h) → Componentes o módulos bien organizados.  
3. **Persistencia + exportación** (6–8 h) → Guardado de conversaciones y descarga en CSV/Excel/JSON.  
4. **Backend opcional** (12 h) → Solo si decides implementarlo.  
5. **Panel de administración** (8 h) → Listado, detalle, borrado y exportación.  
6. **Mejoras avanzadas** (6 h) → Tres funcionalidades a elegir.  
7. **Documentación final** (4 h) → Manual de instalación, arquitectura y capturas.

**Tiempo estimado**: 50–60 horas, dependiendo de si implementas backend o no.

---

## Entregables finales

Debes entregar:

- Un repositorio con todo el código del proyecto.
- Un archivo exportado desde la aplicación (**CSV**, **Excel** o **JSON**).
- Un documento **PDF** con:
  - Proceso de instalación en cualquier servidor.
  - Arquitectura.
  - Decisiones técnicas.
  - Capturas.
  - Explicación del panel.

---

## Flujo conversacional guiado provisional para Estrella (asistente virtual de Polaris Data)

### 1. Presentación inicial
> **Estrella**: Hola, soy Estrella, tu asistenta virtual en Polaris Data.  
> *(Incorporar una foto de Estrella. Será una chica diferente a Estefanía, el chatbot de Staf pero con características similares)*  
> Estoy aquí para ayudarte a encontrar la formación que mejor encaje contigo o tu empresa. ¿En qué tipo de información estás interesad@?

**Opciones:**
1. Formación presencial  
2. Aula virtual en directo  
3. Teleformación 24/7  

### 2. Solicitud del nombre
Independientemente de la opción elegida:  
> **Estrella**: Perfecto. Para dirigirme a ti, ¿cómo te llamas?  
> **Usuario**: (escribe su nombre)  
> **Estrella**: Encantada, **[Nombre]**. Ahora te doy la información que necesitas.

### 3. Respuesta específica según la opción seleccionada

- **Opción 1 — Formación presencial**  
  > Nuestra formación presencial se realiza directamente en tus instalaciones o en las nuestras, y se adapta totalmente a las necesidades de tu equipo. Es ideal para empresas que buscan sesiones prácticas, personalizadas y con un formador especializado.

- **Opción 2 — Aula virtual en directo**  
  > El aula virtual en directo te permite asistir a clases en tiempo real por videoconferencia, con un formador que guía cada sesión. Es flexible, cómodo y mantiene toda la interacción propia de un curso presencial.

- **Opción 3 — Teleformación 24/7**  
  > La teleformación 24/7 te permite formarte a tu ritmo, sin horarios y con acceso a los contenidos desde cualquier dispositivo. Es perfecta si buscas flexibilidad total o si tu equipo necesita avanzar de forma independiente.

### 4. Solicitud de datos de contacto
Después de dar la información correspondiente:  
> **Estrella**: Si quieres que el equipo de Polaris Data se ponga en contacto contigo para enviarte información detallada o un presupuesto, déjame por favor tu correo electrónico. Si lo prefieres, también puedes añadir tu teléfono.  
> **Usuario**: (envía correo o correo + teléfono)  
> **Estrella**: Gracias, **[Nombre]**. He registrado tus datos. Un/a asesor/a de Polaris Data se pondrá en contacto contigo muy pronto. Si tienes más preguntas, aquí estoy para ayudarte.
