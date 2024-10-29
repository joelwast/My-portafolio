import React, { useEffect, useState } from 'react';
import '../../styles/index-es-en.css';
import PerfilCv from '../../assets/foto-de-cv.png';
import Github from '../../components/iconos-redes/Github-icon';
import LinkedIn from '../../components/iconos-redes/LinkedIn-icon';
import Gmail from '../../components/iconos-redes/Gmail-icon';
import DownloadIcon from '../../components/iconos-redes/Download-icon';
import CvFile from '../../assets/Joel Peringuez Cv.pdf';
import SunIcon from '../../components/iconos/sun-icon';
import MoonIcon from '../../components/iconos/moon-icon';
import ShareIcon from '../../components/iconos/share-icon';

import FirebaseIcon from '../../components/iconos/firebase-icon';
import CSSIcon from '../../components/iconos/css-icon';
import JavaScript from '../../components/iconos/js-icon';
import Nextjs from '../../components/iconos/nextjs-icon';
import MySQL from '../../components/iconos/mysql-icon';
import Nodejs from '../../components/iconos/nodejs-icon';
import ReactIcon from '../../components/iconos/react-icon';
import HTML5 from '../../components/iconos/html-icon';

export default function IndexEs() {
  useEffect(() => {
    document.title = 'Portafolio'; 
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Carga el estado inicial desde localStorage, si está disponible
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true';  // Devuelve `true` o `false`
  });

  const toggleMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode);  // Guarda el estado en localStorage
      return newMode;
    });
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    toggleMode();
    setTimeout(() => setIsActive(false), 600);
  };

  return (
    <div className="body-index" >
      <div className="section-1"  >
        <div className="presentacion">
          <h1>Hola, soy Joel</h1>
          <span>Desarrollador Web y Estudiante de Ingenieria de Software</span>
          <p>Apasionado por crear experiencias web intuitivas y eficientes. Siempre en busca de nuevos desafíos y aprendiendo nuevas tecnologías</p>
          <div className="caja-de-redes">
            <a href="https://github.com/joelwast"><Github width='25' height='25' /></a>
            <a href="https://www.linkedin.com/in/joel-peringuez-51440b288/" target="_blank" rel="noopener noreferrer">
              <LinkedIn width='25' height='25' />
              
            </a>
            <a href="mailto:joelperinguez@gmail.com"><Gmail width='25 ' height='25' /> </a>
          </div>
          <a className="button-cv" href={CvFile} download="Joel_Peringuez_CV.pdf">
            <button className="button-cv">MI CV <DownloadIcon /></button>
          </a>
        </div>  
        <div className="modos">
          {/* aplica una logica que cambie el color de todo lo que esta en negro a blanco y asi en viceversa */}
          <a href="#">en</a> 
          {/* <button
            className={`rotate-center ${isActive ? 'active' : ''}`}
            onClick={handleClick}
          >
            {isDarkMode ? <MoonIcon color='#000' /> : <SunIcon color='#000'/>}
          </button> */}
        </div>      
      </div>
      <div className="section-2">
        <div className="sobre-mi">
        <h1>Sobre mí</h1>
        <p>
          Soy estudiante de Ingeniería de Software con una pasión por desarrollar aplicaciones intuitivas y adaptables. 
          Como freelancer, he diseñado plataformas, siempre enfocado en crear experiencias agradables y funcionales para el usuario.
        </p>
        <span>Disponible</span>
        </div>
      </div>
      <div className="section-3">
        <div className="habilidades">
          <h1>Habilidades</h1>
            <div className="caja-de-lenguajes">
            <span>Front-end</span>
            <HTML5/>
            <CSSIcon/>
            <JavaScript/>
            <ReactIcon/>
            <Nextjs/>
            </div>
            <div className="caja-de-lenguajes">
            <span>Backend</span>
            <Nodejs/>
            </div>
            <div className="caja-de-lenguajes">
            <span>Cloud</span>
            <FirebaseIcon/>
            <MySQL/>
            </div>
        </div>
      </div>
      <div className="section-4">
        <div className="proyectos">
          <h1>Proyectos</h1>
          <div className="content-proyectos">
            {/* modelo */}
            <div className="card-proyecto">
              <div className="img-card">
                spa
              </div>
              <div className="info-card">
              <p>Servidor de mensajes para una red local</p>
                <div className="tecnologias-card">
                  <span>Nodejs</span>
                  <span>Reactjs</span>
                  <span>Firebase</span>
                  <span>Sql</span>
                  <span>Css</span>
                  
                </div>
                <div className="enlaces-card">
                  <a href="github"> <Github width='17' height='17'/></a>
                  <a href="demo">Demo </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
