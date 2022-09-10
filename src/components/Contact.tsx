import React from 'react'
import { IconContact } from '../miniComponents/IconContact'
import './style/style-contact.css'


export const Contact = () => {
  return (
    <section id="contato" className="section-c">
      <h1 className="title-section">CONTATO</h1>
      <div id="main-div-img">

        <IconContact icon='fa-brands fa-whatsapp' link='https://api.whatsapp.com/send?phone=5577998377782'/>
        <IconContact icon='fa-solid fa-envelope' link='mailto:marmorariadecore@hotmail.com.br'/>
        <IconContact icon='fa-brands fa-instagram' link='https://instagram.com/marmorariadecorelem?igshid=YmMyMTA2M2Y='/>

      </div>
    </section>
  )
}
