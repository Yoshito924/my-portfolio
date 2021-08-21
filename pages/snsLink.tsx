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

class SnsLink extends React.Component {
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
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">リンク集</h2>

                                    <p className="my-3 text-gray-500">
                                        主な関連ページへのリンクをまとめました。
                                    </p>

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

                                    <LinkTree></LinkTree>

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

export default SnsLink;