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
                                        100種類以上のコードの構成音や情報を、全てのルート音で調べられるアプリです。
                                    </p>
                                    <p className="my-2">
                                        同時に、指定したコードの構成音を含む主なスケールも表示されます。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-scale" target={"_blank"} rel={"noopener noreferrer"}>
                                            ②スケール情報の検索
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        60種類以上のスケールの構成音や情報を、全てのキーで調べられるアプリです。
                                    </p>
                                    <p className="my-2">
                                        同時に、各スケールの説明も表示されます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-modal-interchange" target={"_blank"} rel={"noopener noreferrer"}>
                                            ③コード/モード検索
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        構成音からコード・ネームを検索できるアプリです。
                                    </p>
                                    <p className="my-2">
                                        同時に「コードの説明」、「使い方」、「コードの構成音を含む主なスケール」も表示されます。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-chord-progression" target={"_blank"} rel={"noopener noreferrer"}>
                                            ④コード進行のまとめ
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        80種類以上のコード進行をまとめたアプリです。
                                    </p>
                                    <p className="my-2">
                                        表示は全てのキーへ切り替え可能なので、実質1000以上のコード進行を確認できます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-diatonic-chords" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑤ダイアトニック・コード一覧表
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        ダイアトニック・コードの一覧表アプリです。
                                    </p>
                                    <p className="my-2">
                                        表示は全てのキーへ切り替え可能です。各コードに対応するモード・スケールも確認できます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-modulation" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑥転調の間隔
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        「転調の間隔」を調べられるアプリです。
                                    </p>
                                    <p className="my-2">
                                        指定したキーがどんな関係性か簡単に分かります。旋法（モード）にも対応しています。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-note-value" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑦音価の計算機
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        指定したBPMの、18種類の「音符の長さ」を計算するアプリです。
                                    </p>
                                    <p className="my-2">
                                        表示は秒、ミリ秒、マイクロ秒、sec、ms、μsに切り替え可能です。
                                    </p>
                                    <p className="my-2">　</p>


                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-metric-modulation" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑧メトリック・モジュレーション
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        「メトリック・モジュレーション」に関係する情報を調べるアプリです。
                                    </p>
                                    <p className="my-2">
                                        様々な「音符の音価」と、「同じ音価を持つ別の音符のBPM」が簡単に分かります。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-degree-change" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑨コード移調
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        コード進行のテキストを移調するアプリです。
                                    </p>
                                    <p className="my-2">
                                        入力したコード進行のテキストを「12キー全て」と「ディグリー・ネーム」へ変換できます。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi2}>
                                        <a className={styles.linka} href="https://o-to.khufrudamonotes.com/o-to-fingerboard" target={"_blank"} rel={"noopener noreferrer"}>
                                            ⑩フィンガー・ボード
                                        </a>
                                    </h3>
                                    <p className="my-2">
                                        コードやスケールの「指板上のポジション」を可視化するアプリです。
                                    </p>
                                    <p className="my-2">
                                        ギターだけではなく、ベース、多弦楽器、レフティー表示も可能です。
                                    </p>
                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>ポートフォリオ・サイト</h3>
                                    <p className="my-2">
                                        このポートフォリオ・サイトは自作です。
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