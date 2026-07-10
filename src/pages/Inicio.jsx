import {Link} from 'react-router-dom';
import foto from '../assets/Al_2025.jpg';

export default function Inicio(){
  return(
    <main className="page page--inicio">
      <section className="hero">
        <div className="hero__image">
          <img src={foto} alt="Alvaro Alan Grijalva Murrieta" className="hero__photo" width="300" loading="eager"/>
        </div>
        <div className="hero__content">
          <h1 className="hero__greeting">Hola, soy <span className="hero__name">Alvaro Alan Grijalva Murrieta</span></h1>
          <p className="hero__specialty">Desarrollador Web Full Stack</p>
          <p className="hero__description">
            Especializado en React y Node.js. Me enfoco en crear aplicaciones rápidas,
            escalables, con interfaces legibles, y excelente experiencia de usuario.
          </p>
          <div className="hero__actions">
            <Link to="/proyectos" className="btn btn--primary">Ver proyectos</Link>
            <Link to="/contacto" className="btn btn--outline">Contactarme</Link>
          </div>
        </div>
      </section>
    </main>
  );
}