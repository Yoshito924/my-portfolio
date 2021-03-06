import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import LinkTreeB from './components/linkTreeB'
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

class OriginalMusic extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>音楽作品 Yoshito Kimura-Portfolio</title>
                    <meta name="description" content="キムラ ヨシトが制作した音楽作品の紹介" />
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

                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">音楽作品集</h2>
                            <p className="my-3 text-gray-500">
                                主なオリジナル楽曲の紹介
                            </p>

                            <p className="my-2">　</p>

                            <h3 className={styles.midashi}>和風ジェント・シリーズ</h3>
                            <div className={styles.music_block}>
                                <div className={styles.music_text}>
                                    <p className="mt-3 text-gray-500">
                                        <p>和風曲のフィーリングとジェントのサウンドをミックスした「和風ジェント」。</p>
                                        <p>KHUFRUDAMO NOTESの代名詞ともいえる楽曲たちです。</p>
                                        <p className="my-2">　</p>
                                    </p>
                                    <p>
                                        →<a className={styles.linka} href={"https://www.youtube.com/playlist?list=PLe5DzYpSmVLntYekHK4oTtiIM8Dkx5k7g"} target={"_blank"} rel={"noopener noreferrer"}>
                                            ミュージックビデオ集(YouTube)
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.music_list}>
                                    <p className="mt-3 text-gray-500">
                                        <iframe src={"https://open.spotify.com/embed/playlist/3jCGY6ordKF9kBWGMfmh2M"}
                                            width={"100%"}
                                            height={"380"}
                                            frameBorder={"0"}
                                            // allowtransparency={"true"}
                                            allow={"encrypted-media"}></iframe>
                                    </p>
                                </div>
                            </div>

                            <p className="my-2">　</p>

                            <h3 className={styles.midashi}>1stアルバム：FRUIT BASKET</h3>
                            <div className={styles.music_block}>
                                <div className={styles.music_text}>
                                    <p className="mt-3 text-gray-500">
                                        <p>ジェントサウンドと和風を融合した楽曲を中心に、さまざまな音楽を展開するKHUFRUDAMO NOTESのファーストアルバム！</p>
                                        <p className="my-2">　</p>
                                        <p>→<a className={styles.linka} href={"https://www.youtube.com/playlist?list=PLe5DzYpSmVLnIichF3X6JEL5y7azsg9Nc"} target={"_blank"} rel={"noopener noreferrer"}>
                                            ミュージックビデオ集(YouTube)
                                        </a></p>
                                        <p className="my-2">　</p>
                                        <p>
                                            →<a className={styles.linka} href={"https://linkco.re/768bB5a4?lang=ja"} target={"_blank"} rel={"noopener noreferrer"}>
                                                配信サービス一覧
                                            </a>
                                        </p>
                                    </p>
                                </div>
                                <div className={styles.music_list}>
                                    <p className="mt-3 text-gray-500">
                                        <iframe src={"https://open.spotify.com/embed/album/2XcUqHkQoPT6CngNfmDf50"}
                                            width={"100%"}
                                            height={"380"}
                                            frameBorder={"0"}
                                            // allowtransparency={"true"}
                                            allow={"encrypted-media"}></iframe>
                                    </p>
                                </div>
                            </div>

                            <p className="my-2">　</p>

                            <h3 className={styles.midashi}>2ndアルバム：DECADE</h3>
                            <div className={styles.music_block}>
                                <div className={styles.music_text}>
                                    <p className="mt-3 text-gray-500">
                                        <p>
                                            ジェントサウンドと日本の音楽を融合した楽曲を中心に、さまざまな音楽を展開するKHUFRUDAMO NOTESのセカンドアルバム！</p>
                                        <p>過去10年間に制作された楽曲から選りすぐりの19曲を収録！</p>
                                        <p className="my-2">　</p>
                                        <p>→<a className={styles.linka} href={"https://www.youtube.com/playlist?list=PLe5DzYpSmVLly-bXLkWXChzlORQeFOvqm"} target={"_blank"} rel={"noopener noreferrer"}>
                                            ミュージックビデオ集(YouTube)
                                        </a></p>
                                        <p className="my-2">　</p>
                                        <p>→<a className={styles.linka} href={"https://linkco.re/ETgUYS1H?lang=ja"} target={"_blank"} rel={"noopener noreferrer"}>
                                            配信サービス一覧
                                        </a></p>
                                    </p>
                                </div>
                                <div className={styles.music_list}>
                                    <p className="mt-3 text-gray-500">
                                        <iframe src={"https://open.spotify.com/embed/album/3RwtIbB5CzaUGp6C2dIGRi"}
                                            width={"100%"}
                                            height={"380"}
                                            frameBorder={"0"}
                                            // allowtransparency={"true"}
                                            allow={"encrypted-media"}></iframe>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <p className="my-2">　</p>

                        <div className={styles.column}>
                            <h3 className={styles.midashi}>リンク集</h3>
                            <LinkTreeB></LinkTreeB>
                        </div>
                    </main>

                    {/* フッターのコンポーネント */}
                    <footer className={styles.footer}>
                        <Footer></Footer>
                    </footer >
                </body >
            </>
        )
    }
}

export default OriginalMusic;