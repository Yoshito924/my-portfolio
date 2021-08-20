import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import RightColumn from './components/rightColumn'
import 'tailwindcss/tailwind.css'
import Container from '@material-ui/core/Container';


class Contact extends React.Component {
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
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-12xl1">コンタクト</h2>

                                    <p className="my-3 text-gray-500">
                                        連絡/依頼はこちらから
                                    </p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>Yoshito Kimura個人へ</h3>

                                    <p className="my-2">
                                        下記のメールアドレスより、お気軽にメッセージをお送りください。
                                    </p>
                                    <p className="my-2">
                                        ・kimurayoshito924★gmail.com（★→@）
                                    </p>

                                    <p className="my-2">　</p>

                                    <h3 className={styles.midashi}>KHUFRUDAMO NOTESへ</h3>
                                    <p className="my-2">
                                        下記のメールアドレス、<a href="https://docs.google.com/forms/d/e/1FAIpQLSfgnCc6hhg71MmCz6qvoVkitKZ6K1dtLXei0DPxduDf7NfVlQ/viewform?embedded=true">Googleフォーム</a>よりお気軽にメッセージをお送りください。
                                    </p>
                                    <p className="my-2">
                                        ・info★khufrudamonotes.com（★→@）
                                    </p>
                                    <p className="my-2">
                                        ・<a className={styles.linka} href="https://docs.google.com/forms/d/e/1FAIpQLSfgnCc6hhg71MmCz6qvoVkitKZ6K1dtLXei0DPxduDf7NfVlQ/viewform?embedded=true" target={"_blank"} rel={"noopener noreferrer"}>Googleフォーム</a>
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

export default Contact;