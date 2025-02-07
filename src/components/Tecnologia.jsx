import React from 'react';

export function Tecnologia() {
  return (
    <article className="port margin-top">
        <div className="titulos">
            <span><i className="fa-solid fa-microchip"></i> Tecnologías</span>
        </div>
        <div className="tecno">
            <span className="badge text-bg-light"><i className="fa-brands fa-vuejs"></i> Vuejs</span>
            <span className="badge text-bg-light margin-left"><i className="fa-brands fa-react"></i> React</span>
            <span className="badge text-bg-light margin-left"><i className="fa-brands fa-laravel"></i> Laravel</span>
            <span className="badge text-bg-light margin-left"><i className="fa-brands fa-js"></i> JavaScript</span>
            <span className="badge text-bg-light margin-left"><i className="fa-brands fa-python"></i> Python</span>
        </div> 
    </article>
  )
}
