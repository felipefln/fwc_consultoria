import React from 'react'
import { Link } from 'react-router-dom'
import fwcLogo from '../assets/fwcLogo.png'

const Header = () => {
    return(
        <div className="container">
            <div className="logo" >
                <img src={fwcLogo}alt="logo" className="img"/>
            </div>
            
            <div className="links">
                <Link style={{ textDecoration: 'none', color: '#363636' }} to={'/sobre'}>A FWC Consultoria</Link>
                <Link  style={{ textDecoration: 'none' }} to={'/escolar'}>Histórico Escolar</Link>
                <Link style={{ textDecoration: 'none' }} to={'/profissional'}>Histórico Profissional</Link>
                <Link style={{ textDecoration: 'none' }} to={'/projetos'}>Projetos</Link>
                <Link style={{ textDecoration: 'none' }} to={'/contatos'}>Contatos</Link>
            </div>
        </div>
    )
}

export default Header;