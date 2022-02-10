import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import LinkTreeB from './components/linkTreeB'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';
import Image from 'next/image'

const features = [
  { name: '誕生日', description: '4月19日（牡羊座）' },
  { name: '所属クリエイター・チーム', description: 'KHUFRUDAMO NOTES（クフルダモ・ノーツ）' },
  { name: '音楽系スキル', description: 'ギター / ベース / ドラム / キーボード / 作曲 / 作詞 / 編曲 / ミキシング / マスタリング / 採譜 / 譜面作成 / 楽曲分析' },
  { name: 'その他スキル', description: 'プログラミング / イラスト / デザイン / 写真撮影 / 動画編集' },
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
      <body className={styles.body}>

        {/* ヘッダーのコンポーネント */}
        <header className={styles.header}>
          <Header></Header>
        </header>

        <main className={styles.main}>

          <div className={styles.center}>

            <div className={styles.profile_name}>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-1">Yoshito Kimura</h2>
              <p className="mt-1 mb-1 text-gray-500">
                キムラ ヨシト
              </p>
            </div>

            <p className="my-2">　</p>

            <h3 className={styles.midashi}>主なプロフィール</h3>

            <div className={styles.profile_text}>
              <div className={styles.profile_image}>
                <Image
                  src="/yoshito.png"
                  alt="プロフィール写真"
                  className="rounded-lg"
                  width={230}
                  height={230}
                />
              </div>

              <dl className={styles.profile_skill}>
                {features.map((feature: any) => (
                  <div key={feature.name} className="border-t border-gray-300 pt-5 pb-1">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="my-2">　</p>

            <h3 className={styles.midashi}>連絡先</h3>

            <p className="my-3 text-gray-500">
              連絡/依頼は、下記のメールアドレスよりお願いいたします。 （アドレスの「★」を「@」に変えてください。）
            </p>

            <p className="my-2">
              ・キムラ ヨシト宛：kimurayoshito924★gmail.com
            </p>
            <p className="my-2">
              ・クフルダモノーツ宛：info★khufrudamonotes.com
            </p>

            <p className="my-2">　</p>

            <h3 className={styles.midashi}>できること</h3>

            <p className="my-2">　</p>
            <h3 className={styles.midashi2}>できることマインドマップ</h3>
            <p className="mt-3 text-gray-500">
              <p>「できる」と言っても、どの程度「できる」かは まちまちです。</p>
              <p>歴が10年以上かつ、自分の中で比較的得意だと感じるものには★をつけています。</p>
            </p>
            <p className="my-2">　</p>
            <Image
              src="/できること.png"
              alt="できることをまとめたマインドマップ"
              className="bg-gray-100 rounded-lg"
              width={1496}
              height={871}
            />

            <h3 className={styles.midashi2}>扱える主なソフト</h3>
            <p className="mt-3 text-gray-500">
              <p>Word / Excel / Google Spreadsheet / PowerPoint</p>
              <p>Cubase / Finale / Cakewalk by BandLab</p>
              <p>Photoshop / Premiere Pro / Lightroom / Illustrator</p>
              <p>Xmind / drow.io </p>
              <p>Visual Studio Code / Google Colaboratory / Jupyter Lab</p>
            </p>

            <p className="my-2">　</p>

            <h3 className={styles.midashi2}>使用経験がある主な技術</h3>
            <p className="mt-3 text-gray-500">
              <p>HTML / CSS / Bootstrap / TailwindCSS</p>
              <p>JavaScript / TypeScript / Vue.js / React / Next.js</p>
              <p>Python</p>
              <p>Git・GitHub</p>
            </p>

          </div>

          <p className="my-2">　</p>

          <div className={styles.column}>
            <h3 className={styles.midashi}>リンク集</h3>
            <LinkTreeB></LinkTreeB>
          </div>
        </main >

        {/* フッターのコンポーネント */}
        <footer className={styles.footer}>
          <Footer></Footer>
        </footer >
      </body >
    </>
  )
}

export default Home
