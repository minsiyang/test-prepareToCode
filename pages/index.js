import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prepare to Code</title>
      </Head>
      <h1 className={styles.title}>
        Prepare
        <br /> 
        to Code
        </h1>
      <p className={styles.description}>Pick your operating system</p>
      <Link href='/homebrew' >
        <a className={styles.system}>OS X</a>
      </Link>
      <div className={styles.logo}></div>
    </div>
  )
}
