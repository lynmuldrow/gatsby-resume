import React from "react"
import navStyles from "../components/nav.module.css"
import { Link } from "gatsby"
import { flash } from "react-animations"
import styled, { keyframes } from 'styled-components'


const Flash = styled.div`animation: 3s ${keyframes `${ flash }`} infinite`;

export default () => ( 

    <div className={navStyles.nav}>
        <ul>
            <Flash><li><span class="arrow arrow-bottom"></span></li></Flash>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
        </ul>
    </div>
)