import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>About</h3>
        <p>
          Hi, my name is Luan Faria, 28 years old and I lives in Brazil.
        </p>

        <p>  
          I am computer systems analyst studant and working as full-stack developer developer since 2018.
        </p>

        <p>
          As Full-Stack developer I have experience in React, Typescript, Redux, Hooks, React Native CLI and Expo. Also studying Node, Unit and Integration tests with Jest, Testing Library and Cypress.
        </p>
      </section>
    </Layout>
  )
}