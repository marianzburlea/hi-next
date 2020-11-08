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
        <title>This is the about one</title>
        <meta name="description" content="wow, it is happening"/>
        <meta name="keywords" content="nice, super nice"/>
      </Head>
      <Layout>
        <div>This is us</div>
      </Layout>
    </div>
  )
}

export default About
