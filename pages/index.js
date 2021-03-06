import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kursplanungstool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wilkommen zu unserem Planungstool
        </h1>
        <p className={styles.description}>
          Gruppe:{' '}
          <code className={styles.code}>wasted potential</code>
        </p>

      </main>
    </div>
  )
}