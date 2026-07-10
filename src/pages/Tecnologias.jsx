import {techCategories, levelColors} from '../data/skillsData';

export default function Tecnologias(){
  return(
    <main className="page page--tecnologias">
      <section className="section">
        <h1 className="section__title">Tecnologías y habilidades</h1>
        <p className="section__subtitle">Tecnologías con las que he trabajado y mi nivel de experiencia en cada una.</p>
        <div className="tech-grid">
          {techCategories.map(category => (
            <article key={category.title} className="tech-category">
              <h2 className="tech-category__title">{category.title}</h2>
              <ul className="tech-category__list">
                {category.technologies.map(tech => (
                  <li key={tech.name} className="tech-item">
                    <span className="tech-item__name">{tech.name}</span>
                    <span className={`tech-item__level ${levelColors[tech.level]}`}>
                      {tech.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}