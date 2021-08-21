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

class MusicTheory extends React.Component {
    render() {
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

                            <div className="lg:flex">

                                <div className="sm:w-1/1 lg:w-8/12">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">音楽理論</h2>
                                    <p className="mt-3 text-gray-500 w-2/5">音楽理論系の教育コンテンツ</p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>音楽理論の記事</h3>

                                    <p className="my-2">
                                        ブログに音楽理論やDTMに関係する記事を多数掲載しています。
                                    </p>
                                    <p className="my-2">
                                        → <a className={styles.linka} href="https://khufrudamonotes.com/category/music-theory-and-dtm" target={"_blank"} rel={"noopener noreferrer"}>音楽理論記事の一覧</a>
                                    </p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>YouTube動画</h3>

                                    <p className="my-2">
                                        音楽理論や、楽曲分析の動画を公開しています。
                                    </p>
                                    <p className="my-2">
                                        → <a className={styles.linka} href="https://www.youtube.com/user/kimukydr/videos" target={"_blank"} rel={"noopener noreferrer"}>YouTubeチャンネル</a>
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi}>
                                        <a className={styles.linka} href="https://readability-checker.khufrudamonotes.com/" target={"_blank"} rel={"noopener noreferrer"}>
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
                                    {/* <iframe
                                        width={"560"}
                                        height={"315"}
                                        src={"https://www.youtube.com/embed/OX0rXFNb_jw"}
                                        title={"YouTube video player"}
                                        frameborder={"0"}
                                        allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                                        allowfullscreen>
                                    </iframe> */}

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

export default MusicTheory;