import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import LinkTree from './components/linkTree'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';
import Image from 'next/image'
import RightColumn from './components/rightColumn'

class Links extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>リンク Yoshito Kimura-Portfolio</title>
                    <meta name="description" content="キムラ ヨシト関連ページへのリンク集" />
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
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">リンク集</h2>

                            <p className="my-3 text-gray-500">
                                主な関連ページへのリンクをまとめました。
                            </p>

                            <p className="my-2">　</p>

                            <LinkTree></LinkTree>
                        </div>
                    </main >


                    {/* フッターのコンポーネント */}
                    <footer className={styles.footer} >
                        <Footer></Footer>
                    </footer >
                </body >
            </>
        )
    }
}

export default Links;