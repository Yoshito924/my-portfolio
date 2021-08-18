import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

class Music extends React.Component {
    render() {
        return (
            <>
                <div>
                    <p>This is Music page.</p>
                    <a
                        href="https://khufrudamonotes.com/discography"
                        target="_blank"
                        rel="noopener noreferrer"
                    >ディスコグラフィ
                    </a>
                </div>

                <footer className={styles.footer}>
                    <Link href='/'>メインページへ</Link>
                </footer>
            </>
        )
    }
}

export default Music;