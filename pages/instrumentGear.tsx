import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';

const features = [
    { name: 'ギター/ベース', description: 'PRS custom24/Ibanez guitars TAM100/Music Man StingRay' },
    { name: 'アンプ', description: 'Fractal Audio Systems Axe-Fx II' },
    { name: 'キーボード', description: 'KORG KRONOS' },
    { name: '愛用音源', description: 'UVI Falcon/BFD3/Superior Drummer3/KOMPLETE/Keyscapeなど' },
    { name: 'ミックス関係', description: 'UAD2,Waves,iZotope,FabFilterなど' },
    { name: 'DAW/譜面作成', description: 'Cubase/Finale' },
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

                            <div className="lg:flex">
                                <div className="sm:w-1/1 lg:w-8/12">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">楽器演奏/機材の紹介</h2>

                                    <p className="mt-3 text-gray-500">主な使用機材の紹介</p>

                                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                        {features.map((feature: any) => (
                                            <div key={feature.name} className="border-t border-gray-300 pt-4">
                                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
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

export default InstrumentGear;