# Guía para el Proyecto: Plataforma Digital para Red de Maestros de Construcción "RedMaestros"

## 1. Nomenclatura y Definiciones

### 1.1 Tipos de Usuario

- **Usuario**: Término general que se refiere a cualquier persona registrada en la plataforma, sea Maestro, Cliente o Administrador.

- **Maestro**: Profesional de la construcción que ofrece servicios especializados a través de la plataforma. Cuenta con habilidades específicas en áreas como albañilería, carpintería, electricidad, etc.

- **Cliente**: Persona que solicita servicios de construcción, remodelación o reparación a través de la plataforma.

- **Administrador**: Personal autorizado que gestiona la plataforma, supervisa las operaciones y garantiza el correcto funcionamiento del sistema.

### 1.2 Términos Específicos

- **Servicio**: Trabajo específico solicitado por un Cliente y realizado por un Maestro.
- **Disponibilidad**: Períodos de tiempo en los que un Maestro puede aceptar trabajos.
- **Especialidad**: Área específica de expertise de un Maestro (ej. albañilería, pintura).
- **Portal**: Interfaz específica para cada tipo de usuario con funcionalidades personalizadas.

## 2. Objetivo del Proyecto

Diseñar y desarrollar una plataforma digital que permita conectar maestros de construcción calificados con clientes que necesiten servicios de terminaciones, reparaciones o remodelaciones. La solución estará optimizada para móviles y permitirá gestionar horarios, especialidades, equipos de trabajo y mensajes de orientación de manera ágil y sencilla.

---

## 3. Funciones Principales

### 3.1 Registro de Maestros

- **Datos personales:**
  - Nombre completo
  - RUT/DNI
  - Dirección
  - Teléfono de contacto
  - Correo electrónico
  - Foto de perfil

- **Datos profesionales:**
  - Especialidades (múltiple selección)
  - Años de experiencia por especialidad
  - Referencias laborales (opcional)
  - Certificaciones (opcional)

- **Datos operativos:**
  - Zona de trabajo (comunas/sectores)
  - Modalidad de trabajo (solo/equipo)
  - Tamaño del equipo (si aplica)
  - Herramientas y equipamiento disponible

### 3.2 Gestión de Disponibilidad

- **Horario Regular:**
  - Días laborables
  - Horario por día
  - Pausas programadas (almuerzo, etc.)

- **Excepciones:**
  - Vacaciones
  - Días festivos
  - Ausencias planificadas

- **Configuración de Agenda:**
  - Duración mínima/máxima por servicio
  - Tiempo de traslado entre servicios
  - Preferencias de horario (mañana/tarde)

### 3.3 Registro de Clientes

- **Datos personales:**
  - Nombre completo
  - RUT/DNI
  - Dirección principal
  - Teléfono de contacto
  - Correo electrónico

- **Preferencias:**
  - Horarios preferidos para servicios
  - Método de contacto preferido
  - Método de pago preferido

### 3.4 Solicitud y Asignación de Servicios

- Los clientes seleccionan:
  - Tipo de servicio: Terminación fina (estética) o gruesa (estructural).
  - Ubicación y fecha estimada del proyecto.
  - Especialidad requerida.
- La plataforma asigna automáticamente a un maestro disponible, considerando la especialidad, horario y ubicación.

### 3.5 Mensajes de Orientación

- Mostrar mensajes informativos a los maestros y clientes:
  - Para los maestros: "Recuerda que tu perfil debe estar completo para recibir más asignaciones."
  - Para los clientes: "Cuanto más detalles incluyas en tu solicitud, más precisa será la asignación del maestro adecuado."

### 3.6 Panel de Control

- **Para Maestros:**
  - Ver proyectos asignados.
  - Actualizar disponibilidad y datos de perfil.
  - Calcular ingresos estimados según horas trabajadas.
- **Para Clientes:**
  - Ver el estado de su solicitud (pendiente, en curso, finalizado).
  - Calificar el servicio recibido.

  ### 3.1 Diseño Mobile-First

  - **Interfaz tipo app:**
    - Navegación con gestos táctiles
    - Botones y elementos adaptados a interacción táctil
    - Menú inferior tipo dock para navegación principal
    - Pull-to-refresh en listados
    - Transiciones y animaciones fluidas

  ### 3.2 Progressive Web App (PWA)

  - Instalable como aplicación desde el navegador
  - Pantalla de inicio personalizada
  - Splash screen al cargar
  - Funcionamiento offline para funciones básicas
  - Sincronización en segundo plano
  - Push notifications nativas

  ### 3.3 Optimizaciones Móviles

  - Precarga de recursos críticos
  - Lazy loading de imágenes
  - Compresión y optimización de assets
  - Cache inteligente con Service Workers
  - Diseño responsivo con breakpoints móviles

- **Interfaz amigable:** Navegación sencilla, botones grandes y formularios fáciles de completar.
- **Compatible con navegadores:** Funciona en cualquier dispositivo sin necesidad de descarga.

### 3.2 Funcionalidad Progresiva (PWA)

### Stack Tecnológico

- **Frontend:**
  - React + Next.js para SSR y optimización
  - Tailwind CSS con configuración mobile-first
  - Framer Motion para animaciones nativas
- **PWA:**
  - Next-PWA para configuración PWA
  - Workbox para service workers
  - Web Push para notificaciones
- **Backend:**
  - Node.js + Express
  - PostgreSQL
  - Redis para caché

  ---

- Notificaciones para:
  - Confirmación de solicitudes.
  - Recordatorios de proyectos próximos.
  - Cambios de horarios o asignaciones.

#### *4. Canales de Distribución:*

• Plataforma digital (app o página web) donde:

- Los clientes solicitan servicios y cotizan proyectos.
- Los maestros se registran, indican su especialidad y disponibilidad.

---

## 4. Detalles Técnicos

### Base de Datos

- **Tabla Maestros:**
  - ID, nombre, especialidad, disponibilidad, equipo de trabajo (sí/no), cantidad de personas, calificación promedio.
- **Tabla Clientes:**
  - ID, nombre, ubicación, solicitudes realizadas.
- **Tabla Proyectos:**
  - ID del cliente, ID del maestro, tipo de servicio, fecha y hora, estado del proyecto.

### Lenguaje y Frameworks

- **Frontend:**
  - HTML, CSS (Tailwind para diseño rápido), JavaScript (React para interactividad).
- **Backend:**
  - Node.js con Express (gestión del servidor).
- **Base de Datos:**
  - PostgreSQL para manejo de datos estructurados.

---

## 5. Flujo de Usuario

### Para Maestros

1. Registrarse con sus datos personales y especialidad.
2. Configurar su disponibilidad y, en caso de trabajar con equipo, agregar el tamaño del mismo.
3. Recibir notificaciones de proyectos asignados.
4. Completar el trabajo y recibir calificaciones de clientes.

### Para Clientes

1. Registrarse en la plataforma y crear una solicitud de servicio.
2. Seleccionar detalles del proyecto (tipo de terminación, especialidad requerida, fecha y hora).
3. Confirmar la solicitud y esperar la asignación de un maestro.
4. Valorar el servicio al finalizar.

---

## 6. Mensajes Clave para Usuarios

- **Maestros:** "¡Mantén tu disponibilidad actualizada para aumentar tus oportunidades de trabajo!"
- **Clientes:** "Te asignaremos al mejor maestro disponible según tu solicitud. Si tienes dudas, estamos aquí para ayudarte."

---

## 7. Metas del Proyecto

- Crear una experiencia rápida y fácil para usuarios móviles.
- Ofrecer un sistema confiable que conecte a maestros y clientes de manera eficiente.
- Garantizar flexibilidad y calidad en todos los servicios ofrecidos.

## 8. Estructura del Proyecto

```txt
RedMaestros/
├── components/                    # Componentes React reutilizables
│   ├── clientes/                 # Componentes específicos para clientes
│   │   └── RegistroCliente.js    # Formulario de registro para clientes
│   ├── diseño/                   # Componentes de interfaz y layout
│   │   ├── Footer.js            # Pie de página común
│   │   └── Header.js            # Encabezado y navegación
│   └── maestros/                 # Componentes específicos para maestros
│       ├── GestionDisponibilidad.js  # Gestión de horarios y disponibilidad
│       └── RegistroMaestro.js   # Formulario de registro para maestros
├── Docs/                         # Documentación del proyecto
│   └── GuíaProyecto.md          # Guía principal con instrucciones y estructura
├── hooks/                        # Custom hooks reutilizables
├── pages/                        # Rutas y páginas de Next.js
│   ├── _app.js                  # Componente principal de la aplicación
│   ├── administradores.js       # Panel de administración
│   ├── api/                     # API Routes de Next.js
│   │   └── maestros/
│   │       ├── index.js         # Endpoint principal de maestros
│   │       └── register.js      # Registro de maestros
│   ├── auth/
│   │   └── login.js            # Página de autenticación
│   ├── index.js                 # Página de inicio
│   ├── login/
│   │   └── [tipo].js           # Página dinámica de login por tipo
│   ├── maestros/
│   │   └── disponibilidad.js   # Gestión de disponibilidad
│   └── registro/
│       ├── cliente.js          # Registro de clientes
│       └── maestro.js          # Registro de maestros
├── prisma/                      # Configuración y modelos de Prisma
│   ├── migrations/             # Migraciones de base de datos
│   └── schema.prisma           # Schema de la base de datos
├── styles/                      # Estilos y configuración CSS
│   └── globals.css             # Estilos globales
├── Dockerfile                   # Configuración de Docker
├── LICENSE.md                   # Licencia del proyecto
├── README.md                    # Documentación general
├── next.config.js              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── postcss.config.js           # Configuración de PostCSS
├── tailwind.config.js          # Configuración de Tailwind CSS
└── vercel.json                 # Configuración de despliegue en Vercel
```

## 9. Funciones zshrc para el proyecto

```zsh
# Inicia el servidor de desarrollo con verificación inteligente
function redmaestros() {
    if lsof -i :3000 >/dev/null 2>&1; then
        echo "🔍 RedMaestros ya está corriendo en puerto 3000"
        echo "🌐 Abriendo en el navegador..."
        open http://localhost:3000
        return 0
    fi

    echo "🏗️  Iniciando RedMaestros..."
    cd "/Users/Basti/Proyectos/RedMaestros" && \
    echo "🧹 Limpiando caché..." && \
    rm -rf .next && \
    echo "📦 Verificando dependencias..." && \
    npm install && \
    (echo "🚀 Iniciando servidor..." && \
    npm run dev &) && \
    (echo "⏳ Esperando que el servidor esté listo..." && \
    sleep 5 && \
    echo "🌐 Abriendo en el navegador..." && \
    open http://localhost:3000)

    echo "ℹ️  Para cerrar el servidor cuando termines, ejecuta: killport 3000"
}

# Crea el túnel ngrok para acceso remoto
function okmaestros() {
    echo "🌐 Creando túnel para acceso remoto..."
    ngrok http 3000
}

# Cierra procesos en un puerto específico
function killport() {
    if [ -z "$1" ]; then
        echo "❌ Por favor especifica un puerto"
        return 1
    fi
    echo "🔒 Cerrando puerto $1..."
    lsof -ti :$1 | xargs kill -9 && echo "✅ Puerto $1 cerrado"
}
```

### Uso del Proyecto

1. **Desarrollo Local**:
   - Ejecuta `redmaestros` para iniciar el servidor
   - El navegador se abrirá automáticamente en <http://localhost:3000>
   - Si el servidor ya está corriendo, solo abrirá el navegador
   - Para detener el servidor: `killport 3000`

2. **Acceso Remoto**:
   - En otra terminal, ejecuta `okmaestros`
   - Copia la URL de "Forwarding" para compartir la aplicación
   - Para detener el túnel: Ctrl+C en la terminal de ngrok

## 10. Configuración de Base de Datos y Despliegue

### 10.1 Base de Datos con Railway y Prisma

#### Configuración de Railway

1. **Provisión de Base de Datos:**
   - PostgreSQL hosteado en Railway
   - URL de conexión segura con credenciales
   - Base de datos principal y shadow para migraciones

2. **Variables de Entorno:**

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@viaduct.proxy.rlwy.net:[PORT]/railway"
SHADOW_DATABASE_URL="postgresql://postgres:[PASSWORD]@viaduct.proxy.rlwy.net:[PORT]/railway_shadow"
```

#### Estructura Prisma

1.**Schema Principal** (`prisma/schema.prisma`):

```prisma
model Maestro {
  id                   Int       @id @default(autoincrement())
  nombre              String
  especialidad        String    // Albañilería, Pintura, etc.
  otraEspecialidad    String?
  telefono            String
  email               String    @unique
  ubicacion           String    // Comuna
  dispuestoMovilizarse Boolean  @default(false)
  trabajaConEquipo    Boolean   @default(false)
  tamanoEquipo        Int?
  disponibilidad      Json?     // Horario disponible
  verificado          Boolean   @default(false)
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
}

model Cliente {
  id                   Int       @id @default(autoincrement())
  nombre              String
  telefono            String
  email               String    @unique
  ubicacion           String    // Comuna
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
}
```

2.**Comandos de Prisma:**

```bash
# Generar cliente Prisma
npx prisma generate

# Crear migración
npx prisma migrate dev --name init

# Aplicar migraciones
npx prisma migrate deploy
```

### 10.2 Despliegue con Vercel

#### Configuración de Despliegue

1.**Scripts de Build:**

```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

2.**Variables de Entorno en Vercel:**

- Configurar DATABASE_URL en el panel de Vercel
- Asegurar que coincida con la URL de Railway

#### Flujo de Desarrollo a Producción

1. **Desarrollo Local:**
   - Usar `.env` para variables locales
   - Ejecutar `npm run dev` para desarrollo
   - Probar cambios con base de datos local

2. **Staging/Pruebas:**
   - Rama `develop` para pruebas
   - Preview deployments en Vercel
   - Verificar migraciones en DB de pruebas

3. **Producción:**
   - Merge a `main` para deploy automático
   - Vercel ejecuta build con Prisma
   - Railway mantiene DB en producción

### 10.3 Manejo de API

#### Endpoints de Maestros

```javascript
// POST /api/maestros/register
// Registro de nuevo maestro
try {
  const maestro = await prisma.maestro.create({
    data: {
      nombre,
      especialidad,
      // ... otros campos
    }
  });
}

// GET /api/maestros
// Obtener lista de maestros
const maestros = await prisma.maestro.findMany({
  orderBy: { createdAt: 'desc' }
});
```

#### Seguridad y Validación

- Validación de datos antes de DB
- Manejo de errores consistente
- Respuestas HTTP apropiadas
- Protección contra inyección SQL (via Prisma)

### 10.4 Monitoreo y Mantenimiento

1. **Logs y Diagnóstico:**
   - Vercel Analytics para rendimiento
   - Railway Metrics para DB
   - Logging estructurado en API

2. **Backups y Recuperación:**
   - Backups automáticos en Railway
   - Procedimiento de restauración
   - Migraciones reversibles

3. **Escalabilidad:**
   - Connection pooling con Prisma
   - Caché de consultas frecuentes
   - Optimización de índices DB
