import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

class Header extends React.Component {
    render() {
        return (
            <>
                <Link href='/music'>作曲</Link>
                <Link href='/about'>演奏</Link>
                <Link href='/about'>譜面制作</Link>
                <Link href='/about'>音楽理論</Link>
                <Link href='/about'>写真</Link>
                <Link href='/about'>アプリ</Link>
            </>
        )
    };
};

export default Header;