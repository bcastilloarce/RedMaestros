# RedMaestros - Plataforma de Conexión de Servicios de Construcción

RedMaestros es una plataforma digital que conecta maestros de construcción calificados con clientes que necesitan servicios de terminaciones, reparaciones o remodelaciones.

## Características Principales

- Registro de maestros con especialidades y disponibilidad
- Registro de clientes y solicitud de servicios
- Sistema de asignación automática basado en especialidad y disponibilidad
- Interfaz optimizada para móviles (PWA)
- Sistema de mensajería y notificaciones

## Tecnologías Utilizadas

- React + Next.js
- Tailwind CSS
- Framer Motion
- Node.js + Express (próximamente)
- PostgreSQL (próximamente)

## Instalación

1. Clona el repositorio:
\`\`\`bash
git clone [url-del-repositorio]
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Inicia el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

## Estructura del Proyecto

La estructura del proyecto sigue una organización modular y escalable:

\`\`\`
RedMaestros/
├── src/
│   ├── componentes/      # Componentes React
│   ├── páginas/         # Páginas y rutas
│   ├── estilos/         # Estilos y Tailwind
│   ├── hooks/           # Hooks personalizados
│   ├── contexto/        # Contextos React
│   ├── utilidades/      # Funciones utilitarias
│   └── servicios/       # Servicios y APIs
├── público/            # Archivos estáticos
├── docs/              # Documentación
├── pruebas/           # Tests
└── configuración/     # Archivos de configuración
\`\`\`

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles.
