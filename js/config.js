// ─────────────────────────────────────────────
//  ESCUELA DE PÁDEL — Configuración
// ─────────────────────────────────────────────

const SUPABASE_URL  = 'https://jlyyeolmcpxelwhasrux.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpseXllb2xtY3B4ZWx3aGFzcnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NzY5NzYsImV4cCI6MjA4OTE1Mjk3Nn0.FVgVVqfW2G0nK0yuSOR0yG7Hlw3-IZAqXJuPIxO78Rw';

// Colores del sistema de diseño
const COLOR = {
  azul:    '#2563eb',
  verde:   '#16a34a',
  naranja: '#f59e0b',
  rojo:    '#e05a5a',
  morado:  '#7c3aed',
  gris:    '#64748b',
};

// Niveles (personalizables por escuela — se sobreescriben desde Supabase)
const NIVELES_DEFAULT = ['Principiante', 'Intermedio', 'Avanzado'];

// Módulos con sus rutas
// Carpetas del nav — 3 pestañas desplegables
const NAV_CARPETAS = [
  {
    id:    'equipo',
    label: 'Tu Equipo',
    sub:   'Alumnos · Grupos · Monitores',
    color: 'azul',
    modulos: [
      { id: 'alumnos',    label: 'Alumnos',    href: 'alumnos.html',    icon: 'icons/alumnos.png'    },
      { id: 'grupos',     label: 'Grupos',     href: 'grupos.html',     icon: 'icons/grupos.png'     },
      { id: 'monitores',  label: 'Monitores',  href: 'monitores.html',  icon: 'icons/monitores.png'  },
    ],
  },
  {
    id:    'pista',
    label: 'En Pista',
    sub:   'Clases · Ejercicios · Pistas · Torneos',
    color: 'verde',
    modulos: [
      { id: 'clases',     label: 'Clases',     href: 'clases.html',     icon: 'icons/clases.png'     },
      { id: 'ejercicios', label: 'Ejercicios', href: 'ejercicios.html', icon: 'icons/ejercicios.png' },
      { id: 'pistas',     label: 'Pistas',     href: 'pistas.html',     icon: 'icons/pistas.png'     },
      { id: 'torneos',    label: 'Torneos',    href: 'torneos.html',    icon: 'icons/torneos.png'    },
    ],
  },
  {
    id:    'control',
    label: 'Control',
    sub:   'Finanzas · Estadísticas',
    color: 'naranja',
    modulos: [
      { id: 'finanzas',   label: 'Finanzas',   href: 'finanzas.html',   icon: 'icons/finanzas.png'   },
      { id: 'stats',      label: 'Estadíst.',  href: 'stats.html',      icon: 'icons/stats.png'      },
    ],
  },
];

// MODULOS plano — se mantiene para compatibilidad con código existente
const MODULOS = NAV_CARPETAS.flatMap(c => c.modulos);
