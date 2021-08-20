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

class Music extends React.Component {
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

                            <div className="flex">
                                <div className="w-8/12">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">音楽作品集</h2>

                                    <p className="my-3 text-gray-500">
                                        主な音楽作品の紹介
                                    </p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>和風ジェント・シリーズ</h3>

                                    <p className="mt-3 text-gray-500 w-2/5">

                                        <iframe src={"https://open.spotify.com/embed/playlist/3jCGY6ordKF9kBWGMfmh2M"}
                                            width={"100%"}
                                            height={"380"}
                                            frameBorder={"0"}
                                            // allowtransparency={"true"}
                                            allow={"encrypted-media"}></iframe>
                                    </p>

                                </div>

                                <div className="w-1/12"></div>

                                <div className="w-3/12">
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

export default Music;