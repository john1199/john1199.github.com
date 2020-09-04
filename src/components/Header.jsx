import React from 'react';

const Header = () =>{
  return (
    <>
    <header>
      <div className="head">
        <div className="title">
          <a href="index.html">
            <h1>Aprendiendo Programación</h1>
          </a>
        </div>
        <div className="navegar">
          <nav>
            <hr/>
            <ul>
              <li><a href="index.html" id="Index">Inicio</a></li>
              <li><a href="project.html" id="Projects">Proyectos</a></li>
              <li><a href="acerca.html" id="About_me">Sobre mi</a></li>
              <li><a href="contact.html" id="Contact">Contactame</a></li>
            </ul>
            <hr/>
          </nav>
        </div>
      </div>
    </header>  
    </>
  )
};

export default Header;