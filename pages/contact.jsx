import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../component/layout'

const SA = styled.a`
  padding: 1rem;
  border: 1px solid red;
`

const About = () => {
  return (
    <div>
      <Head>
        <title>This is how you get to know me</title>
        <meta name="description" content="wow, it is happening"/>
        <meta name="keywords" content="nice, super nice"/>
      </Head>
      <Layout>
        <div>This is how you get to know me</div>
        <div>you can contact using any of our social media</div>
      </Layout>
    </div>
  )
}

export default About
