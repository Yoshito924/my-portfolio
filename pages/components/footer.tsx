import React from 'react';
import Link from 'next/link'
class Footer extends React.Component {
    render() {
        return (
            <>
                <div>© 2021- KHUFRUDAMO NOTES (since 2009)</div>
                <Link href="/">トップページへ</Link>
            </>
        )
    };
};

export default Footer;