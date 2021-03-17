import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HangOut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title} style={{textAlign:"center"}}>
          Bienvenue sur Profil !
        </h1>

        <Link href="/">
          <a>Acceuil</a>
        </Link>
      </main>
    </div>
  )
}