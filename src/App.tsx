import { NavBar, Hero, Techs, AboutMe, Projects, Experience, Footer } from './components/organisms';
import ctaBg from './components/organisms/Footer/container.png';
import './App.css'
import cvFile from './documents/cv-charles-castillo-full-stack.pdf';

function App() {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Hero>
          <p className="hero__content--greeting">Hola, Soy <span className="hero__content--highlight">Charles Castillo</span></p>
          <h1 className="hero__content--title">Desarrollador Full Stack</h1>
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
              <p className="hero__content--stats--description">usuarios en mis sistemas</p>
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
