import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Container from "../components/container"
import Box from "../components/box"
import Nav from "../components/nav"
import Particles from "react-particles-js"
import { SocialIcon } from 'react-social-icons'


const particleOpt = {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 1920
            }
        }
    }
}

export default ({ children }) => (

    <Container>
        <Particles params={particleOpt} />
        <Link to="/"><Header headerText= 'lyn is a .dev' /></Link>
        <p style={{ fontSize: 'small' }}> educator.  engineer.  changemaker. </p>
        <Box>
            <SocialIcon style={{ height: 25, width: 25 }} url="http://twitter.com/lynmuldrow" />
            <SocialIcon style={{ height: 25, width: 25 }} url="http://linkedin.com/in/lynmuldrow" />
            <SocialIcon style={{ height: 25, width: 25 }} url="http://github.com/lynmuldrow" />
        </Box>

        <Nav />
        {children}
    </Container>
)