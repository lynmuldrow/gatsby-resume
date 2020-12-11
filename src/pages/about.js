import React from "react"
import Layout from "../components/layout"
import SmallHeader from "../components/smallheader"
import Container from "../components/container"
import Section from "../components/section"
import style from "../components/section.module.css"
import styled, { keyframes } from 'styled-components'
import { fadeIn } from "react-animations"
import { Link } from "gatsby"

const UseFadeIn = styled.div`animation: 4s ${keyframes `${ fadeIn }`}`;

export default () => (
    <Layout>
        <Container>
            <UseFadeIn><SmallHeader smallText="about." /></UseFadeIn>
            <Section className={style.container}><img src="https://i.ibb.co/fv04Dy2/lyn.jpg" className={style.image} alt="project" /></Section>
            <h4>Hey! I'm Lyn.</h4>
            <p>I'm an out-of-the-box thinker and do'er who wants to change the world. I have a varied skill set that shares my love of lifelong learning- I find joy in working on inspiring, uplifting projects and helping to solve big problems.</p>
            <p>Currently, I work with DigitalOcean as Senior Developer Educator, providing learning resources, tutorials, video content, and more for budding engineers to thrive.</p>
            <p>Previously, I worked as a UI Engineer and Partner Engineer where I helped to build, iterate on, and educate other developers about LinkedIn's sales-focused products.</p>
            <p>I'm also an educator who has written technical curriculum, taught in classrooms, and champions learning to code for all. </p>
            <p>I love writing and served as a tech writer for over ten years- I find joy in making technical jargon easy to understand and palatable to all audiences.</p>
            <p>I've spoken nationally for over five years and am passionate about sharing my journey to inspire and encourage women and technologists of color to create, own, and share.</p>
            <p>I'm a wife and mom of two amazing kids. In my free time, I love to garden, explore, and game.</p>
            <p>I'm open to connecting with humans who are intentional about inclusion and bringing joy and positivity to the world. If that's you, <Link to="/contact">reach out.</Link></p>
        </Container>
    </Layout>
)