# Sistema de Comentarios - Petrosurco

Sistema de comentarios y sugerencias para Petrosurco, General Pico, La Pampa.

Desarrollado por **Alertly**.

## 📋 Características

- ✅ Diseño moderno y responsive con gradiente vibrante
- ✅ Formulario simplificado y anónimo
- ✅ Logo de Petrosurco en esquina superior izquierda
- ✅ Almacenamiento local de comentarios
- ✅ Mensaje de confirmación animado
- ✅ Compatible con todos los dispositivos
- ✅ Efecto glassmorphism en el formulario

## 🚀 Deploy

Este proyecto está configurado para desplegarse fácilmente en Vercel:

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente que es un sitio HTML estático
3. El sitio estará disponible en tu dominio de Vercel

No requiere configuración adicional ni build steps.

## 📱 Campos del formulario

El formulario es simple y anónimo:

- **Tipo de comentario** (opcional): Queja, Sugerencia, Felicitación o Consulta
- **Tu comentario** (obligatorio): Máximo 1000 caracteres

No se solicita información personal para garantizar la privacidad del usuario.

## 💾 Almacenamiento de datos

Actualmente, los comentarios se guardan en el navegador del usuario (localStorage).

Para ver los comentarios guardados, abre la consola del navegador (F12) y escribe:
```javascript
viewComplaints()
```

### Integración con backend

Para conectar con un servidor/base de datos, edita la función `sendToServer()` en `script.js`.

## 📂 Estructura de archivos

```
libro-quejas/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica del formulario
├── logo-quejas.png     # Logo de Petrosurco
└── README.md           # Documentación
```

## 🎨 Tecnologías

- HTML5
- CSS3 (Gradientes, Glassmorphism, Animaciones)
- JavaScript Vanilla
- Google Fonts (Montserrat)

## 📄 Créditos

**Cliente**: Petrosurco - General Pico, La Pampa
**Desarrollado por**: Alertly

---

© 2024 Petrosurco | Powered by Alertly