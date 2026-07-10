import {Link, useLocation} from 'react-router-dom';
import {useTheme} from '../context/ThemeContext';

const NAV_LINKS=[
  { path: '/', label: 'Inicio' },
  { path: '/sobre-mi', label: 'Sobre mí' },
  { path: '/tecnologias', label: 'Tecnologías' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/contacto', label: 'Contacto' },
];

export default function Header(){
  const {theme, toggleTheme}=useTheme();
  const location=useLocation();

  return(
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__name" aria-label="Ir a inicio">Alvaro Alan Grijalva Murrieta</Link>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={`header__nav-link ${location.pathname===link.path ? 'header__nav-link--active' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="header__theme-btn" onClick={toggleTheme} aria-label={theme==='dark' ? 'Activar modo claro' : 'Activar modo oscuro'} title={theme==='dark' ? 'Modo claro' : 'Modo oscuro'}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {theme==='dark' ? (
              // Sun icon for light mode toggle
              <>
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="1" x2="10" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="17" x2="10" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="10" x2="3" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="17" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.93" y1="3.93" x2="5.34" y2="5.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14.66" y1="14.66" x2="16.07" y2="16.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.93" y1="16.07" x2="5.34" y2="14.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14.66" y1="5.34" x2="16.07" y2="3.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              // Moon icon for dark mode toggle
              <>
                <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C9.5 5 10 7 11 9C12 11 13.5 12 17 10Z" fill="currentColor"/>
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}