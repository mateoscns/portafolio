# 🚀 Portafolio Profesional - Leandro

Portafolio profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS. Diseñado para impresionar a reclutadores y empresas.

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Características

- 🎨 **Diseño moderno y profesional** - Nivel senior
- 🌙 **Modo oscuro/claro** - Guardado en localStorage
- 📱 **100% Responsive** - Perfecto en móvil, tablet y desktop
- ⚡ **Animaciones suaves** - Con Framer Motion
- 🎬 **Sección de Tesis destacada** - Con video como protagonista
- 📧 **Formulario de contacto funcional** - Integración con EmailJS
- 🔍 **SEO optimizado** - Meta tags y Open Graph
- 🚀 **Deploy en Vercel** - Configuración automática

## 🛠️ Tecnologías

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Email:** EmailJS
- **Deploy:** Vercel

## 📋 Secciones

1. **Hero** - Presentación impactante con animaciones
2. **Sobre mí** - Información personal y estadísticas
3. **Tesis** - Video de tu proyecto final destacado
4. **Skills** - Tecnologías con barras de progreso
5. **Proyectos** - Galería filtrable de proyectos
6. **Educación** - Formación académica y certificaciones
7. **Experiencia** - Timeline de experiencia laboral
8. **Contacto** - Formulario funcional y redes sociales

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/portafolio.git

# Entrar al directorio
cd portafolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## ⚙️ Personalización

### 1. Información Personal
Edita los siguientes archivos para personalizar tu información:

- `src/components/Hero.tsx` - Nombre y links sociales
- `src/components/About.tsx` - Descripción y estadísticas
- `src/components/Contact.tsx` - Email, teléfono, ubicación

### 2. Video de Tesis
En `src/components/Thesis.tsx`, reemplaza el placeholder con tu video de YouTube:

```tsx
<iframe 
  className="w-full aspect-video"
  src="https://www.youtube.com/embed/TU_VIDEO_ID" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
/>
```

### 3. Proyectos
Edita el array `projects` en `src/components/Projects.tsx`

### 4. Experiencia
Edita el array `experiences` en `src/components/Experience.tsx`

### 5. CV
Coloca tu CV en `/public/cv.pdf`

### 6. Formulario de Contacto (EmailJS)
1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio y una plantilla
3. Configura en `src/components/Contact.tsx`:

```tsx
await emailjs.sendForm(
  'TU_SERVICE_ID',
  'TU_TEMPLATE_ID',
  formRef.current!,
  'TU_PUBLIC_KEY'
)
```

### 7. Imágenes
- Foto de perfil: `/public/profile.jpg`
- Proyectos: `/public/projects/nombre-proyecto.jpg`
- Favicon: `/public/favicon.ico`

## 🌐 Deploy en Vercel

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. ¡Deploy automático!

```bash
# O desde la terminal con Vercel CLI
npm i -g vercel
vercel
```

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── cv.pdf              # Tu CV descargable
│   ├── profile.jpg         # Tu foto
│   └── projects/           # Imágenes de proyectos
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globales
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   └── components/
│       ├── About.tsx
│       ├── AnimatedSection.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── ThemeProvider.tsx
│       └── Thesis.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Checklist antes de publicar

- [ ] Actualizar información personal en todos los componentes
- [ ] Agregar tu foto de perfil
- [ ] Agregar tu CV en PDF
- [ ] Agregar video de tesis en YouTube
- [ ] Configurar EmailJS para el formulario
- [ ] Actualizar links de GitHub y LinkedIn
- [ ] Agregar imágenes de proyectos
- [ ] Personalizar colores si lo deseas (tailwind.config.ts)
- [ ] Verificar que todo funcione en móvil

## 🎨 Personalización de Colores

Puedes cambiar los colores principales en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#TU_COLOR',  // Color principal
    // ...
  }
}
```

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto como base para tu portafolio.

---

⭐ Si te sirvió, ¡dale una estrella al repo!

Hecho con ❤️ por Leandro
