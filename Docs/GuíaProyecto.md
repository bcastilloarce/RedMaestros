# Guía para el Proyecto: Plataforma Digital para Red de Maestros de Construcción "RedMaestros"

## 1. Objetivo del Proyecto

Diseñar y desarrollar una plataforma digital que permita conectar maestros de construcción calificados con clientes que necesiten servicios de terminaciones, reparaciones o remodelaciones. La solución estará optimizada para móviles y permitirá gestionar horarios, especialidades, equipos de trabajo y mensajes de orientación de manera ágil y sencilla.

---

## 2. Funciones Principales

### 2.1 Registro de Maestros

- **Datos requeridos:**
  - Nombre completo
  - Especialidad (ej. albañilería, pintura, carpintería, etc.)
  - Horarios disponibles
  - Opciones de trabajo:
    - ¿Trabaja solo o con equipo?
    - Si trabaja con equipo, ingresar cantidad de personas.

### 2.2 Gestión de Disponibilidad

- Permitir a los maestros indicar los días y horas disponibles para trabajar.
- Preguntar si su disponibilidad es recurrente o puntual.

### 2.3 Registro de Clientes

- **Datos requeridos:**
  - Nombre completo
  - Proyecto (detalle del servicio que necesita)
  - Ubicación
  - Fecha y hora deseada para el servicio.

### 2.4 Solicitud y Asignación de Servicios

- Los clientes seleccionan:
  - Tipo de servicio: Terminación fina (estética) o gruesa (estructural).
  - Ubicación y fecha estimada del proyecto.
  - Especialidad requerida.
- La plataforma asigna automáticamente a un maestro disponible, considerando la especialidad, horario y ubicación.

### 2.5 Mensajes de Orientación

- Mostrar mensajes informativos a los maestros y clientes:
  - Para los maestros: "Recuerda que tu perfil debe estar completo para recibir más asignaciones."
  - Para los clientes: "Cuanto más detalles incluyas en tu solicitud, más precisa será la asignación del maestro adecuado."

### 2.6 Panel de Control

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
├── Docs/                          # Documentación del proyecto
│   └── GuíaProyecto.md           # Guía principal con instrucciones y estructura
├── components/                    # Componentes React reutilizables
│   ├── clientes/                 # Componentes específicos para clientes
│   │   └── RegistroCliente.js    # Formulario de registro para clientes
│   ├── comunes/                  # Componentes compartidos entre módulos
│   ├── diseño/                   # Componentes de interfaz y layout
│   │   ├── Footer.js            # Pie de página común
│   │   └── Header.js            # Encabezado y navegación
│   └── maestros/                 # Componentes específicos para maestros
│       └── RegistroMaestro.js   # Formulario de registro para maestros
├── configuración/                # Archivos de configuración del proyecto
├── context/                      # Contextos de React para estado global
├── hooks/                        # Custom hooks reutilizables
├── pages/                        # Rutas y páginas de Next.js
│   ├── _app.js                  # Componente principal de la aplicación
│   └── index.js                 # Página de inicio
├── pruebas/                      # Tests y archivos de prueba
├── público/                      # Archivos estáticos accesibles públicamente
│   ├── iconos/                  # Iconos de la aplicación
│   └── imágenes/                # Imágenes y recursos gráficos
├── scripts/                      # Scripts de utilidad y automatización
├── services/                     # Servicios y llamadas a APIs
├── src/                          # Código fuente adicional
├── styles/                       # Estilos y configuración CSS
│   └── globals.css              # Estilos globales de la aplicación
└── utils/                        # Funciones y utilidades helpers

Archivos de configuración:
├── postcss.config.js            # Configuración de PostCSS para procesamiento CSS
├── tailwind.config.js           # Configuración de Tailwind CSS
├── next.config.js               # Configuración de Next.js
├── package-lock.json            # Control de versiones exactas de dependencias
├── package.json                 # Dependencias y scripts del proyecto
└── README.md                    # Documentación general del proyecto
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
