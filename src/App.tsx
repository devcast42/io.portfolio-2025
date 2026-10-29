import { NavBar, Hero, Techs, AboutMe, Projects, Experience, Footer } from './components/organisms';
import ctaBg from './components/organisms/Footer/container.webp';
import './App.css'
import cvFile from './documents/cv-charles-castillo-full-stack.pdf';
import { useEffect } from 'react';

// Quita el loader inicial (index.html) cuando el hero está listo, sin esperar al resto de la página
const hideBootLoaderWhenHeroReady = () => {
  const hide = () => document.getElementById('boot-loader')?.remove();
  // Solo las imágenes visibles: en móvil los átomos están en display:none
  const heroImages = Array.from(document.querySelectorAll<HTMLImageElement>('.hero img'))
    .filter((img) => img.getClientRects().length > 0);
  const fonts = Promise.all([
    document.fonts.load('400 1em Inter'),
    document.fonts.load('1em "Tilt Neon"'),
  ]);
  Promise.all([
    ...heroImages.map((img) => img.decode().catch(() => undefined)),
    fonts.catch(() => undefined),
  ]).then(hide);
  // Nunca dejar el loader más de 4s, aunque la red sea muy lenta
  setTimeout(hide, 4000);
};

function App() {
  useEffect(hideBootLoaderWhenHeroReady, []);

  return (
    <>
      <NavBar />
      <div id="inicio">
        <Hero>
          <p className="hero__content--greeting">Hola, Soy <span className="hero__content--highlight">Charles Castillo</span></p>
          <h1 className="hero__content--title">Desarrollador Full&nbsp;Stack</h1>
          <p className="hero__content--description">
            Conoce mi trabajo y descubre cómo convierto ideas en aplicaciones web dinámicas y modernas.
          </p>
          <section className="hero__content--button-container">
            <button
              className="hero__content--button--primary"
              onClick={() => window.open('https://wa.me/51907762101', '_blank', 'noopener,noreferrer')}
            >
              Contáctame
            </button>
            <a
              className="hero__content--button--secondary"
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Descargar CV
            </a>
          </section>
          <section className="hero__content--stats-container">
            <div className="hero__content--stats">
              <h3 className="hero__content--stats--number">4</h3>
              <p className="hero__content--stats--description">años de experiencia</p>
            </div>
            <div className="hero__content--stats">
              <h3 className="hero__content--stats--number">200+</h3>
              <p className="hero__content--stats--description">usuarios activos</p>
            </div>
          </section>
        </Hero>
      </div>
      <Techs />
      <div id="sobre-mi">
        <AboutMe />
      </div>
      <Projects />
      <div
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 100%',
          backgroundSize: '80%',
        }}
      >
        <div id="experiencia">
          <Experience />
        </div>
        <div id="contacto">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
