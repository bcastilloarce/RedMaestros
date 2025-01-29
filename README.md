# 🏗️ RedMaestros - Plataforma de Conexión de Servicios de Construcción

RedMaestros es una plataforma digital que conecta maestros de construcción calificados con clientes que necesitan servicios de terminaciones, reparaciones o remodelaciones.

## ✨ Características Principales

* 👷 Registro de maestros con especialidades y disponibilidad
* 👥 Registro de clientes y solicitud de servicios
* 🤖 Sistema de asignación automática basado en especialidad y disponibilidad
* 📱 Interfaz optimizada para móviles (PWA)
* 💬 Sistema de mensajería y notificaciones

## 🛠️ Tecnologías Utilizadas

* ⚛️ React + Next.js
* 🎨 Tailwind CSS
* 🎭 Framer Motion
* 🚀 Node.js + Express (próximamente)
* 🗄️ PostgreSQL (próximamente)

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/bcastilloarce/RedMaestros.git
   ```

2. Instala las dependencias:

   ```bash
   cd RedMaestros
   npm install
   ```

3. Configura las variables de entorno:

   ```bash
   cp .env.example .env.local
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## 📁 Estructura del Proyecto

```plaintext
RedMaestros/
├── components/           # Componentes React reutilizables
│   ├── diseño/          # Componentes de diseño (Header, Footer, etc.)
│   ├── maestros/        # Componentes relacionados con maestros
│   └── clientes/        # Componentes relacionados con clientes
├── pages/               # Páginas y rutas de Next.js
│   ├── api/            # Endpoints de la API
│   └── auth/           # Páginas de autenticación
├── styles/             # Estilos globales y Tailwind
├── hooks/              # Hooks personalizados de React
├── context/            # Contextos de React
├── utils/              # Funciones utilitarias
├── services/           # Servicios y llamadas a API
├── public/             # Archivos estáticos
└── docs/              # Documentación
```

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature:

   ```bash
   git checkout -b feature/NuevaCaracteristica
   ```

3. Commit tus cambios:

   ```bash
   git commit -m 'Agrega nueva característica'
   ```

4. Push a la rama:

   ```bash
   git push origin feature/NuevaCaracteristica
   ```

5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
