import React from 'react'

const experiencia = [
    {
        puesto: 'Desarrollador de Software',
        empresa: 'Clínica Alemana de Valdivia',
        fecha: 'Nov 2021 - Jul 2024',
        descripcion: 'Diseñé y desarrollé aplicaciones web utilizando tecnologías como JavaScript, Vue.js para el front-end, y PHP, Laravel para el back-end. Administré e integré bases de datos Oracle, PostgreSQL. Implementé APIs para integrar sistemas y optimizar procesos.'
    },
    {
        puesto: 'Soporte TI',
        empresa: 'TierraNube',
        fecha: 'Ago 2021 - Oct 2021',
        descripcion: 'Implementé soluciones de soporte técnico utilizando software Odoo para optimizar procesos administrativos.'
    },
    {
        puesto: 'Desarrollador Web',
        empresa: 'Plusdte Ltda',
        fecha: 'Mar 2021 - Jul 2021',
        descripcion: 'Actualicé la página web para mejorar la experiencia del usuario. Diseñé y optimicé el front-end para implementar el botón de pago de servicios.'
    }
]
export function Experiencia() {
  return (
     <article className="port margin-top">
        <div className="titulos">
            <span><i className="fa-solid fa-briefcase"></i> Experiencia Laboral</span>
        </div>
        {experiencia.map(({ puesto, empresa, fecha, descripcion }, index) => (
            <div className="experiencia" key={index}>
                <div className="info-experiencia">
                    <strong className="puesto">{puesto}</strong>
                    <span className="empresa">{empresa}</span>
                    <span className="fecha">{fecha}</span>
                </div>
                <aside className="descripcion">
                    <p>{descripcion}</p>
                </aside>
            </div>
        ))}
    </article>
  )
}
