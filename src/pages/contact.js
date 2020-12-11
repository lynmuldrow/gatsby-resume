import React from "react"
import SmallHeader from "../components/smallheader"
import Layout from "../components/layout"
import Container from "../components/container"
import Section from "../components/section"
import styled, { keyframes } from 'styled-components'
import { fadeIn } from "react-animations"

const UseFadeIn = styled.div`animation: 4s ${keyframes `${ fadeIn }`}`;

export default () => (
    <Layout>
        <Container>
            <UseFadeIn><SmallHeader smallText="contact."  /></UseFadeIn>
            <Section><p>You can contact me at <a href="mailto:lyn.muldrow@gmail.com">lyn.muldrow@gmail.com.</a> My social links are above. I look forward to working with you!</p></Section>
        </Container>
    </Layout>
)