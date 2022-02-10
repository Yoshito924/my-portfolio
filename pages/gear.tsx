import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import LinkTreeB from './components/linkTreeB'
import RightColumn from './components/rightColumn'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';

const features = [
    { name: 'DAW / 譜面作成', description: 'Steinberg Cubase / Finale' },
    { name: '愛用プラグイン音源', description: 'UVI Falcon / BFD3 / Superior Drummer3 / KOMPLETE / Keyscapeなど' },
    { name: '愛用プラグインエフェクト類', description: 'UAD2 / iZotope / FabFilterなど' },
    { name: 'ギター / ベース', description: 'PRS custom24 / Ibanez guitars TAM100 / Music Man StingRay' },
    { name: 'アンプ', description: 'Fractal Audio Systems Axe-Fx II' },
    { name: 'キーボード', description: 'KORG KRONOS / ROLI Seaboard' },
    { name: 'マイク', description: 'SHURE SM57 / audio-technica AT4050' },
    { name: 'モニター・スピーカー', description: 'YAMAHA MSP5 Studio' },
    { name: 'モニター・ヘッドフォン', description: 'YAMAHA HPH-MT8 / SONY MDR-CD900ST' },
    { name: 'オーディオ・インターフェース', description: 'Roland STUDIO-CAPTURE UA-1610' },
]

class Gear extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>使用機材 Yoshito Kimura-Portfolio</title>
                    <meta name="description" content="キムラ ヨシトの主な使用機材の紹介" />
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
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">機材の紹介</h2>

                            <p className="mt-3 text-gray-500">主な使用機材の紹介</p>

                            <p className="my-2">　</p>

                            <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {features.map((feature: any) => (
                                    <div key={feature.name} className="border-t border-gray-300 pt-4">
                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
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

export default Gear;