import airmetrics1 from '../assets/AirMetrics/airmetrics-1.png';
import airmetrics2 from '../assets/AirMetrics/airmetrics-2.png';
import airmetrics3 from '../assets/AirMetrics/airmetrics-3.png';
import jatic1 from '../assets/JATIC_XV/jatic_xv-1.png';
import jatic2 from '../assets/JATIC_XV/jatic_xv-2.png';
import jatic3 from '../assets/JATIC_XV/jatic_xv-3.png';
import jatic4 from '../assets/JATIC_XV/jatic_xv-4.png';
import jatic5 from '../assets/JATIC_XV/jatic_xv-5.png';
import ycourse1 from '../assets/YCourse/ycourse-1.png';
import ycourse2 from '../assets/YCourse/ycourse-2.png';
import ycourse3 from '../assets/YCourse/ycourse-3.png';
import ycourse4 from '../assets/YCourse/ycourse-4.png';
import yessara1 from '../assets/Yessara_Creative/yessara_creative-1.png';
import yessara2 from '../assets/Yessara_Creative/yessara_creative-2.png';
import yessara3 from '../assets/Yessara_Creative/yessara_creative-3.png';
import yessara4 from '../assets/Yessara_Creative/yessara_creative-4.png';
import yessara5 from '../assets/Yessara_Creative/yessara_creative-5.png';

const projects=[
  {
    name: 'AirMetrics',
    description: 'Apliacion web de un proyecto escolar de IoT que monitorea la calidad del aire en interiores. Mide CO₂, temperatura y humedad a través de sensores, mostrando gráficas diarias/semanales, dashboard con medidores visuales y generación de reportes mensuales. Incluye autenticación de usuarios.',
    problem: 'Monitorear en tiempo real la calidad del aire, permitiendo detectar niveles peligrosos de CO₂ y otras variables ambientales para tomar acciones preventivas en espacios cerrados.',
    technologies: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL'],
    images: [
      airmetrics1,
      airmetrics2,
      airmetrics3
    ],
    github: 'https://github.com/AlvaroGrijalvaM/airmetrics-web',
    rol: 'Desarrollador web',
  },
  {
    name: 'JATIC XV',
    description: 'Apliacion web para difusion de informacion y registro que fue utilizado para la conferencia académica JATIC XV. Los asistentes pudieron registrarse, seleccionar talleres con control de cupo disponible, y el sistema gestiono las solicitudes de inscripción mediante procedimientos almacenados.',
    problem: 'Gestionar el registro de asistentes a un evento académico con múltiples talleres simultáneos, controlando el cupo disponible y evitando sobreinscripciones.',
    technologies: ['React', 'Bootstrap', 'Node.js', 'Express', 'PHP', 'MySQL'],
    images: [
      jatic1,
      jatic2,
      jatic3,
      jatic4,
      jatic5
    ],
    github: 'https://github.com/AlvaroGrijalvaM/jatic-xv',
    rol: 'Desarrollador del modulo de registro',
  },
  {
    name: 'YCourse',
    description: 'Proyecto escolar de plataforma web de e-learning con catálogo de cursos por categorías, buscador, registro e inicio de sesión de usuarios, sistema de progreso de aprendizaje por lecciones y tracking de cursos completados.',
    problem: 'Proveer una plataforma de educación en línea donde los usuarios puedan explorar cursos, registrarse, inscribirse y dar seguimiento a su progreso de aprendizaje de forma estructurada.',
    technologies: ['React', 'Tailwind CSS', 'Material UI', 'Radix UI', 'Node.js', 'Express', 'MySQL'],
    images: [
      ycourse1,
      ycourse2,
      ycourse3,
      ycourse4
    ],
    github: 'https://github.com/lilBro420/YCourse',
    rol: 'Testing',
  },
  {
    name: 'TicketX',
    description: 'Proyecto escolar de apliacion web para venta de boletos para eventos con selección interactiva de asientos, pagos con tarjeta, y entrega digital automatizada de tickets con código QR por correo electrónico.',
    problem: 'Facilitar la compra de boletos para eventos con selección visual de asientos, pago seguro en línea integrado, y entrega digital automatizada de tickets con código QR para validación en puerta.',
    technologies: ['React', 'Tailwind CSS', 'Material UI', 'Radix UI', 'Node.js', 'Express', 'MySQL', 'Stripe'],
    images: [

    ],
    github: 'https://github.com/ChrisDjMh/ProyectoAurelioParte2',
    rol: 'Apoyo en interfaz de usuario, testing',
  },
  {
    name: 'Yessara Creative (incompleto)',
    description: 'Sitio web para la agencia de marketing Yessara Creative. Incluye un formulario de cotización para realizar una solicitud de servicios desde el sitio web.',
    problem: 'Proveer una presencia web profesional para la agencia Yessara Creative, automatizando la recepción de solicitudes de cotización de servicios de marketing sin intervención manual.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Nodemailer', 'Google APIs'],
    images: [
      yessara1,
      yessara2,
      yessara3,
      yessara4,
      yessara5
    ],
    github: 'https://github.com/AlvaroGrijalvaM/Marketing',
    rol: 'Desarrollo completo de la aplicacion',
  },
];

export default projects;