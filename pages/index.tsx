import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Image from 'next/image'

const features = [
  { name: '誕生日', description: '4月19日（牡羊座）' },
  { name: '所属クリエイター・チーム', description: 'KHUFRUDAMO NOTES（クフルダモ・ノーツ）' },
  { name: '演奏できる楽器', description: 'ギター/ベース/ドラム/キーボード' },
  { name: '音楽系スキル', description: '作曲/作詞/編曲/ミキシング/採譜/楽曲分析' },
  { name: 'その他スキル', description: 'プログラミング/イラスト/デザイン/写真撮影/動画編集' },
  { name: '連絡先', description: 'kimurayoshito924★gmail.com（★→@）' },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yoshito Kimura-Portfolio</title>
        <meta name="description" content="Yoshito Kimura-Portfolio" />
        <link rel="icon" href="/siteIcon/favicon.ico" />
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
            <div className="bg-white mt-2">
              <div className="lg:px-8 lg:pt-8">
                <Image
                  src="/yoshito.png"
                  alt="プロフィール写真"
                  className="rounded-lg"
                  width={230}
                  height={230}
                />
              </div>
              <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Yoshito Kimura</h2>
                  <p className="mt-3 text-gray-500">
                    キムラ ヨシト（クフルダモ・ノーツ）
                  </p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature: any) => (
                      <div key={feature.name} className="border-t border-gray-300 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-4 picture">
                  <RightColumn></RightColumn>
                </div>

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
