import React from "react"
import SmallHeader from "../components/smallheader"
import Layout from "../components/layout"
import Container from "../components/container"
import Section from "../components/section"
import style from "../components/section.module.css"
import styled, { keyframes } from 'styled-components'
import { fadeIn } from "react-animations"

const UseFadeIn = styled.div`animation: 4s ${keyframes `${ fadeIn }`}`;

const Project = props => (
    <div className={style.section}>
        <div className={style.title}>{props.title}</div>
        <img src={props.image} className={style.image} alt="project" />
        <div className={style.description}>{props.description}</div>
        <div className={style.description}>{props.link}</div>
    </div>
)

export default () => (
    <Layout>

        <Container>
            <UseFadeIn><SmallHeader smallText="projects."  /></UseFadeIn>
        </Container>

        <Section>
        <UseFadeIn><h4>engineering education and curriculum development.</h4></UseFadeIn>
            <Project
                title="Engineering Instruction"
                image="https://i.ibb.co/kQdS6Yv/instruction.png"
                description="Lessons teaching students software engineering concepts online and in-person."
                link=<a href='https://www.youtube.com/channel/UC8W3IyXQxuB3Rf1v3LnKpiA'>see more.</a>
            />
        </Section>

        <Section>
        <UseFadeIn><h4>software engineering and open-source.</h4></UseFadeIn>
            <Project
                title="Ascensibot"
                image="https://i.ibb.co/Z10Pvmr/Engineering2-2.png"
                description="An open-source, automated chatbot who shares positivity."
                link=<a href='https://github.com/LynCoded/Ascensibot'>see more.</a>
            />

        </Section>

        <Section>
        <UseFadeIn><h4>writing, speaking, and features.</h4></UseFadeIn>
            <Project
                title="Technical Documentation"
                image="https://i.ibb.co/brb4rFN/Engineering3.png"
                description="Documentation created with Vuepress, authored for Dapper Labs while contracting as Developer Experience Engineer."
                link=<a href='https://dapperdocs.netlify.com/'>see more.</a>
            />
        </Section>

    </Layout>
)