import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Yoshito Kimura-Portfolio</title>
        <meta name="description" content="Yoshito Kimura-Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* ヘッダーのコンポーネント */}
        <header className={styles.header}>
          <Header></Header>
        </header>


        <body>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <div className={"chat-notification"}>
            <div className={"chat-notification-content"}>
              <h4 className={"text-bule-700"}>ChitChat</h4>
              <p className={"chat-notification-message"}>You have a new message!</p>
            </div>
          </div>

          <div className={"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"}>
            <div className={"flex-shrink-0"}>

            </div>
            <div>
              <div className={"text-xl font-medium text-blue-700"}>ChitChat</div>
              <p className={"text-gray-500"}>You have a new message!</p>
            </div>
          </div>

          <div className={styles.title}>
            aahhhaaa!
          </div>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>


          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>自己紹介 &rarr;</h2>
              <p>できることをまとめました。</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>作品 &rarr;</h2>
              <p>作ったものをまとめました。</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>お問い合わせ &rarr;</h2>
              <p>お仕事のご依頼・お問い合せ</p>
              <p>メッセージ</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </body>

        {/* フッターのコンポーネント */}
        <footer className={styles.footer}>
          <Footer></Footer>
        </footer>

      </main>

    </div >
  )
}

export default Home
