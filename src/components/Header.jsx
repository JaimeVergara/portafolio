import React from "react";

export function Header() {
  return (
    <article className="port">
      <img className="port-avatar" src="/portafolio/images/yo.JPG" alt="yo" />
      <h2>Hola, soy Jaime Vergara</h2><br />
      <div className="port-info">
        <p>Ingeniero en Informática con experiencia en desarrollo Full Stack <br />
          3 años de experiencia en desarrollo de aplicaciones web.</p>
      </div>
      <div className="btn-group port-info" role="group" aria-label="Basic outlined example">
        <a href="/portafolio/documents/curriculumvitae.pdf" target="_blank" type="button" className="btn btn-outline-light"><i className="fa-regular fa-file-lines"></i></a>
        <a href="mailto:jaime.vergara.placencia@gmail.com" type="button" className="btn btn-outline-light"><i className="fa-regular fa-envelope"></i> Contactame</a>
        <a href="https://www.linkedin.com/in/jaimevergarap" target="_blank" rel="noopener noreferrer"  type="button" className="btn btn-outline-light"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/JaimeVergara" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-outline-light"><i className="fa-brands fa-github"></i> GitHub</a>
      </div>
    </article>
  );
}


