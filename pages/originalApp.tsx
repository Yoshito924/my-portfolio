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

class OriginalApp extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>アプリ紹介 Yoshito Kimura-Portfolio</title>
                    <meta name="description" content="キムラ ヨシトが開発したプロダクトの紹介" />
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
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">開発したアプリ紹介</h2>

                                    <p className="mt-3 text-gray-500">プログラミングで作った主なプロダクト</p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}><a className={styles.linka} href="https://readability-checker.khufrudamonotes.com/" target={"_blank"} rel={"noopener noreferrer"}>読みやすさチェッカー</a></h3>
                                    <p className="my-2">
                                        「読みにくい部分」を教えてくれる文章校正Webアプリです。
                                    </p>
                                    <p className="my-2">
                                        よい文章の書き方や、採点機能もついています。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}><a className={styles.linka} href="https://o-to.khufrudamonotes.com/" target={"_blank"} rel={"noopener noreferrer"}>O-TO【音楽理論Webアプリ】</a></h3>

                                    <p className="my-2">
                                        音楽理論の学習・活用に使える音楽理論Webアプリです。
                                    </p>
                                    <p className="my-2">
                                        どれも自分が20年以上音楽をやる中で、「あったら便利」だと思う機能を10個作りました。
                                    </p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-chords" target={"_blank"} rel={"noopener noreferrer"}>
                                            ①コード情報の検索
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        コード・ネームの構成音と、その関連情報が簡単に分かります。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-scale" target={"_blank"} rel={"noopener noreferrer"}>
                                            ②スケール情報の検索
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        スケールの構成音と、その関連情報が簡単に分かります。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-modal-interchange" target={"_blank"} rel={"noopener noreferrer"}>
                                            ③コード/モード検索
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        コード・ネームや、モーダル・インターチェンジの候補を検索できます。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-chord-progression" target={"_blank"} rel={"noopener noreferrer"}>
                                            ④コード進行のまとめ
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        よく使われるコード進行を、70種類以上確認できます。
                                    </p>
                                    <p className="my-2">
                                        表示は、全てのキーとディグリー・ネームに切り替え可能です。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-diatonic-chords" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑤ダイアトニック・コード一覧表
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        主なダイアトニック・コード一覧表です。
                                    </p>
                                    <p className="my-2">
                                        表示は、全てのキーとディグリー・ネームに切り替え可能です。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-modulation" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑥転調の間隔
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        転調の間隔を簡単に確認できます。
                                    </p>
                                    <p className="my-2">
                                        旋法を絡めた転調も調べられます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-note-value" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑦音価の計算機
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        簡単に主な音符の長さ(音価)の計算ができます。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-metric-modulation" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑧メトリック・モジュレーション
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        音符に関係する情報を簡単に調べられます。
                                    </p>
                                    <p className="my-2">
                                        整合性を持ったテンポ・チェンジを考えるときなどに使えます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-degree-change" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑨コード移調
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        コード進行のテキストを簡単に移調して書き換えます。
                                    </p>
                                    <p className="my-2">
                                        今まで人力で書き直していたのが信じられないくらい楽です。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-fingerboard" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑩フィンガー・ボード
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        弦楽器の指板を色付けして、構成音やポジションを可視化するアプリです。
                                    </p>
                                    <p className="my-2">
                                        トップ・プレイヤーの視点を体感できるはずです。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>ポートフォリオ・サイト</h3>
                                    <p className="my-2">
                                        このポートフォリオ・サイトは、一から自分で作りました。
                                    </p>
                                    <p className="my-2">
                                        Next.jsを使用しています。
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

export default OriginalApp;