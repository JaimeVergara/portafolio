import React from 'react'

const proyectos = [
    {
        nombre: 'Carnet Pet',
        descripcion: 'Aplicación web para gestionar la información de mascotas, como vacunas, enfermedades, etc. Desarrollada con Vue.js para el front-end y Laravel para el back-end.',
        imagen: '/portafolio/images/carnetpet.jpg',
        github: 'https://github.com/JaimeVergara/carnet-pet',
        url: ''
    },
    {
        nombre: 'Portafolio',
        descripcion: 'Portafolio personal desarrollado con React.js y Bootstrap. Incluye información sobre mi experiencia laboral, tecnologías que manejo y proyectos realizados.',
        imagen: '/portafolio/images/portafolio.jpg',
        github: 'https://github.com/JaimeVergara/portafolio',
        url: 'https://jaimevergara.github.io/portafolio/'
    },
    {
        nombre: 'Mi web',
        descripcion: 'Página web personal desarrollada con HTML, CSS y JavaScript. Incluye información sobre mi experiencia laboral, tecnologías que manejo y proyectos realizados.',
        imagen: '/portafolio/images/miweb.jpg',
        github: 'https://github.com/JaimeVergara/mi-web',
        url: 'https://jaimevergara.github.io/mi-web/'
    }
]

export function Proyectos() {
  return (
    <article className="port">
        <div className="titulos">
            <span><i className="fa-solid fa-code"></i> Proyectos</span>
        </div>
        {proyectos.map(({ nombre, descripcion, imagen, github, url }, index) => (
        <div className="proyecto" key={index}>
            <div className="info-proyecto">
                <img src={ imagen } className="img-proyecto" alt="..."/>
            </div>
            <aside className="descripcion">
                <p><strong>{ nombre }</strong></p>
                <p>{ descripcion }</p>
                <a href={ github } target="_blank" type="button" className="btn btn-outline-light spce-btn"><i className="fa-brands fa-github"></i> Código</a>
                <a href={ url ? url : "#" } target="_blank" type="button" className={`btn btn-outline-light spce-btn ${url ? '' : 'disabled'}`}><i className="fa-solid fa-laptop-code"></i> Preview</a>
            </aside>

        </div>
        ))}
    </article>
  )
}
