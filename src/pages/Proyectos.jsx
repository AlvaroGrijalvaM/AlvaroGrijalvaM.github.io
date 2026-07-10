import {useState} from 'react';
import projects from '../data/projectsData';

function ProjectCard({project}){
  const [currentImg, setCurrentImg]=useState(0);
  const totalImgs=project.images.length;

  const prevImg=() => setCurrentImg(prev => (prev===0 ? totalImgs-1 : prev-1));
  const nextImg=() => setCurrentImg(prev => (prev===totalImgs-1 ? 0 : prev+1));

  return(
    <article className="project-card">
      <div className="project-card__image-wrapper">
        {totalImgs>0 ? (
          <img src={project.images[currentImg]} alt={`${project.name} - Imagen ${currentImg+1}`} className="project-card__image project-card__image--transition"
            key={currentImg} loading="lazy" onError={(e) => {
              e.target.style.display='none';
              e.target.nextSibling.style.display='flex';
            }}
          />
        ) : (
          <div className="project-card__image-placeholder">Sin imagen</div>
        )}
        <div className="project-card__image-placeholder" style={{display: 'none'}}>Sin imagen disponible</div>

        {totalImgs>1 && (
          <>
            <button className="project-card__nav-btn project-card__nav-btn--prev" onClick={prevImg} aria-label="Imagen anterior">
              &#8249;
            </button>
            <button className="project-card__nav-btn project-card__nav-btn--next" onClick={nextImg} aria-label="Siguiente imagen">
              &#8250;
            </button>
            <div className="project-card__dots" aria-hidden="true">
              {project.images.map((_, i) => (
                <span key={i} className={`project-card__dot ${i===currentImg ? 'project-card__dot--active' : ''}`}/>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-card__body">
        <h2 className="project-card__title">{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
        <p className="project-card__problem"><strong>Problema que resuelve:</strong> {project.problem}</p>
        <p className="project-card__rol"><strong>Rol:</strong> {project.rol}</p>
        <div className="project-card__techs">
          {project.technologies.map(tech => (
            <span key={tech} className="project-card__tech-tag">{tech}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary project-card__github-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Código en GitHub
        </a>
      </div>
    </article>
  );
}

export default function Proyectos(){
  return(
    <main className="page page--proyectos">
      <section className="section">
        <h1 className="section__title">Proyectos</h1>
        <p className="section__subtitle">Algunos de los proyectos en los que he trabajado.</p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project}/>
          ))}
        </div>
      </section>
    </main>
  );
}