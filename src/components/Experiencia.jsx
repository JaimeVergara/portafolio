import React from 'react'

export function Experiencia() {
  return (
    <article className="port">
        <div className="titulos">
            <span><i className="fa-solid fa-briefcase"></i> Experiencia Laboral</span>
        </div>
        <div className="experiencia">
            <div className="info">
                <strong className="puesto">Desarrollador de Software</strong>
                <span className="empresa">Clínica Alemana de Valdivia</span>
                <span className="fecha">Nov 2021 - Jul 2024</span>
            </div>
            <aside className="descripcion">
                <p>
                    Diseñé y desarrollé aplicaciones web utilizando tecnologías como <strong>JavaScript, Vue.js</strong> para el front-end, y <strong>PHP, Laravel</strong> para el back-end.  
                    Administré e integré bases de datos <strong>Oracle, PostgreSQL</strong>.  
                    Implementé <strong>APIs</strong> para integrar sistemas y optimizar procesos.        
                </p>
            </aside>
        </div>
    </article>

  )
}
