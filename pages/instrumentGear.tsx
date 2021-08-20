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
    { name: 'クリエイター・チーム', description: 'KHUFRUDAMO NOTES（クフルダモ・ノーツ）' },
    { name: '演奏できる楽器', description: 'ギター/ベース/ドラム/キーボード' },
    { name: '音楽系スキル', description: '作曲/作詞/編曲/ミキシング/採譜/楽曲分析' },
    { name: 'その他スキル', description: 'プログラミング/イラスト/デザイン/写真撮影/動画編集' },
    { name: '連絡先', description: 'kimurayoshito924★gmail.com（★→@）' },
]

class InstrumentGear extends React.Component {
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
                                <div className="w-4/5">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">音楽作品集</h2>

                                    <p className="mt-3 text-gray-500">
                                        キムラ ヨシト（クフルダモ・ノーツ）
                                    </p>

                                    <p className="mt-3 text-gray-500 w-2/5">
                                        <h2>和風ジェント</h2>

                                        <p>O-TO【音楽理論ウェブアプリ】</p>
                                    </p>

                                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                        {features.map((feature: any) => (
                                            <div key={feature.name} className="border-t border-gray-300 pt-4">
                                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>


                                <div className="w-1/5">
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

export default InstrumentGear;