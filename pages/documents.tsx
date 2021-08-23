import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';

const features = [
    { name: '誕生日', description: '4月19日（牡羊座）' },
    { name: 'クリエイター・チーム', description: 'KHUFRUDAMO NOTES' },
    { name: '演奏できる楽器', description: 'ギター/ベース/ドラム/キーボード' },
    { name: '音楽系スキル', description: '作曲/作詞/編曲/ミキシング/採譜/楽曲分析' },
    { name: 'その他スキル', description: 'プログラミング/イラスト/デザイン/写真撮影/動画編集' },
    { name: '連絡先', description: 'kimurayoshito924★gmail.com（★→@）' },
]

class Documents extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>資料/教材 Yoshito Kimura-Portfolio</title>
                    <meta name="description" content="キムラ ヨシトが作成した資料や教材をまとめたページです。" />
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

                            <div className="lg:flex">

                                <div className="sm:w-1/1 lg:w-8/12">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">資料/教材</h2>
                                    <p className="mt-3 text-gray-500">ぜひ、ご活用ください。</p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>
                                        <a className={styles.linka} href="https://www.youtube.com/user/kimukydr/videos/" target={"_blank"} rel={"noopener noreferrer"}>
                                            YouTubeチャンネル
                                        </a>
                                    </h3>

                                    <p className="my-2">
                                        音楽理論や、楽曲分析の動画を公開しています。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/" target={"_blank"} rel={"noopener noreferrer"}>
                                            O-TO【音楽理論Webアプリ】
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        音楽理論の学習・活用に使える個人開発Webアプリです。
                                    </p>
                                    <p className="my-2">
                                        どれも自分が20年以上音楽をやる中で、「あったら便利」だと思う機能を具現化しました。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>
                                        <a className={styles.linka} href="https://khufrudamonotes.gumroad.com/l/musictheory-mindmap/" target={"_blank"} rel={"noopener noreferrer"}>
                                            音楽理論マインドマップ
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        音楽理論の内容を1枚のマインドマップにまとめました。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>
                                        <a className={styles.linka} href="https://khufrudamonotes.com/category/music-theory-and-dtm" target={"_blank"} rel={"noopener noreferrer"}>
                                            音楽理論のブログ記事
                                        </a>
                                    </h3>

                                    <p className="my-2">
                                        音楽理論やDTMに関係する記事を、多数掲載しています。
                                    </p>

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
}

export default Documents;