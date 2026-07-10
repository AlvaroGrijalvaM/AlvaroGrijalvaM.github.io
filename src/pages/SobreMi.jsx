export default function SobreMi(){
  return(
    <main className="page page--sobre-mi">
      <section className="section">
        <h1 className="section__title">Sobre mí</h1>
        <div className="section__content">
          <p className="section__text">
            Me apasiona desarrollar aplicaciones web modernas, manteniendo alto rendimiento,
            y considerando accesibilidad y la experiencia de usuario. Disfruto trabajar
            tanto en frontend como backend y aprender nuevas tecnologías.
          </p>
          <p className="section__text">
            Tengo experiencia construyendo aplicaciones completas, desde el diseño de
            bases de datos hasta la implementación de interfaces de usuario intuitivas.
            Me gusta enfrentar desafíos técnicos y encontrar soluciones eficientes.
          </p>
          <div className="info-cards">
            <article className="info-card">
              <h2 className="info-card__title">Qué hago</h2>
              <p className="info-card__text">
                Desarrollo aplicaciones web full stack utilizando tecnologías modernas
                como React y Node.js. Creo APIs RESTful, diseño bases de datos
                relacionales y construyo interfaces responsivas y accesibles.
              </p>
            </article>
            <article className="info-card">
              <h2 className="info-card__title">Tecnologías que uso</h2>
              <p className="info-card__text">
                React para el frontend, Node.js y Express para el backend, y MySQL o
                MongoDB para bases de datos. También utilizo herramientas como Git.
              </p>
            </article>
            <article className="info-card">
              <h2 className="info-card__title">Proyectos que me interesan</h2>
              <p className="info-card__text">
                Proyectos desafiantes donde pueda aplicar mis conocimientos de
                arquitectura web, rendimiento y escalabilidad.
              </p>
            </article>
            <article className="info-card">
              <h2 className="info-card__title">Mi experiencia</h2>
              <p className="info-card__text">
                He trabajado en diversos proyectos personales y académicos que me han
                permitido dominar el ciclo completo de desarrollo de software, desde
                la planeación hasta el despliegue y mantenimiento.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}