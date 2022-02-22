import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const name = 'Luan Faria'
const role = 'Software Engineer'
export const siteTitle = 'Luan Faria - Software Engineer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Luan Faria, Front-End Developer"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/perfil.jpeg"
              className={utilStyles.borderCircle}
              height={180}
              width={180}
              alt={name}
            />
            <h2 className={styles.flagName}>{name}</h2>
            <h2 className={styles.flagRole}>{role}</h2>
            <div className={styles.flagIcon}>
              <a href="https://linkedin.com/in/luuanfaria" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/luuanfaria" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="mailto:luuan.faria@hotmail.com" target="_blank" rel="noopener noreferrer">
                <AiFillMail />
              </a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/perfillinkedin.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}