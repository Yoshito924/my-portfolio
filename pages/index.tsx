import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';
import Image from 'next/image'

const features = [
  { name: '誕生日', description: '4月19日（牡羊座）' },
  { name: '所属クリエイター・チーム', description: 'KHUFRUDAMO NOTES（クフルダモ・ノーツ）' },
  { name: '音楽系スキル', description: 'ギター/ベース/ドラム/キーボード/作曲/作詞/編曲/ミキシング/マスタリング/採譜/譜面作成/楽曲分析' },
  { name: 'その他スキル', description: 'プログラミング/イラスト/デザイン/写真撮影/動画編集' },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yoshito Kimura-Portfolio</title>
        <meta name="description" content="キムラ ヨシトのポートフォリオ・サイト" />
        <link rel="icon" href="/siteIcon/favicon.ico" />
        <meta property="og:image" content="yoshito.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <body>
        {/* ヘッダーのコンポーネント */}
        <header className={styles.header}>
          <Header></Header>
        </header>

        <Container fixed>
          <main className={styles.main}>

            {/* <div className="lg:px-8 lg:pt-8">
                <Image
                  src="/yoshito.png"
                  alt="プロフィール写真"
                  className="rounded-lg"
                  width={230}
                  height={230}
                />
              </div> */}
            <div className="lg:flex">
              <div className="sm:w-1/1 lg:w-8/12">

                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Yoshito Kimura</h2>

                <p className="mt-3 mb-6 text-gray-500">
                  キムラ ヨシト
                </p>

                <h3 className={styles.midashi}>主なプロフィール</h3>

                <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-2">
                  {features.map((feature: any) => (
                    <div key={feature.name} className="border-t border-gray-300 pt-4">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>

                <p className="my-2">　</p>

                <h3 className={styles.midashi}>主な扱えるソフト</h3>

                <p className="mt-3 text-gray-500">
                  <p>Word / Excel / PowerPoint</p>
                  <p>Cubase / Finale / Cakewalk by BandLab</p>
                  <p>Photoshop / Premiere Pro / Lightroom / Illustrator</p>
                  <p>Xmind / drow.io </p>
                  <p>Visual Studio Code / Google Colaboratory / Jupyter Lab</p>
                </p>

                <p className="my-2">　</p>

                <h3 className={styles.midashi}>使用経験がある主な技術</h3>

                <p className="mt-3 text-gray-500">
                  <p>HTML / CSS / Bootstrap / TailwindCSS</p>
                  <p>JavaScript / TypeScript / Vue.js / React / Next.js</p>
                  <p>Python</p>
                  <p>Git・GitHub</p>
                </p>

                <p className="my-2">　</p>

                <h3 className={styles.midashi}>できることマインドマップ</h3>
                <p className="mt-3 text-gray-500">
                  <p>「できる」と言っても、どの程度「できる」かは まちまちです。</p>
                  <p>歴が10年以上、自分の中で比較的得意なものには★をつけています。</p>
                </p>
                <p className="my-2">　</p>
                <Image
                  src="/できること.png"
                  alt="できることをまとめたマインドマップ"
                  className="bg-gray-100 rounded-lg"
                  width={1496}
                  height={871}
                />

                <p className="my-2">　</p>

              </div>



              <div className="sm:w-1/1 lg:w-1/12">　</div>

              <div className="sm:w-1/1 lg:w-3/12">
                <RightColumn></RightColumn>
              </div>


            </div>

          </main >
        </Container>

        {/* フッターのコンポーネント */}
        <footer className={styles.footer} >
          <Footer></Footer>
        </footer >
      </body >
    </>
  )
}

export default Home
