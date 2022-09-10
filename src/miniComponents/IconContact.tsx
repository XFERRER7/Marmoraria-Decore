import React from 'react'
import './style/style-iconContact.css'

interface IIconContactProps {
  link: string;
  icon: string;
}


export const IconContact = ({ link, icon }: IIconContactProps) => {
  return (
    <a href={link} target="_blank">
      <i className={icon}></i>
    </a>
  )
}
