import React from 'react';
import styles from '../../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

const features = [
    { name: 'YouTube（ユーチューブ）', description: '演奏動画や、楽曲分析などの動画をアップしています。', url: "https://www.youtube.com/user/kimukydr/videos" },
    { name: 'Spotify（スポティファイ）', description: 'KHUFRUDAMO NOTESのアルバムを配信しています。', url: "https://open.spotify.com/artist/3nNyAqPr07cmNuDhq6Ragl?si=ZibXmE07ThaDFlhHS254dw&dl_branch=1" },
    { name: 'O-TO（音楽理論Webアプリ）', description: '音楽理論の学習・活用に使える個人開発Webアプリです。', url: "https://o-to.khufrudamonotes.com/" },
    { name: '読みやすさチェッカー（文章校正Webアプリ）', description: '文章の読みにくい部分をしてくれる個人開発Webアプリです。', url: "https://readability-checker.khufrudamonotes.com/" },
    { name: 'オフィシャルサイト', description: 'クフルダモ・ノーツのオフィシャルサイトです。', url: "https://khufrudamonotes.com/" },
    { name: 'Link Tree（リンクツリー）', description: 'クフルダモ・ノーツのリンクツリーです。', url: "https://linktr.ee/KHUFRUDAMO_NOTES" },
]


class LinkTree extends React.Component {
    render() {
        return (
            <>
                <div className="center">

                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature: any) => (
                            <div key={feature.name} className="border-t border-gray-300 pt-4">
                                <a className={styles.linka} href={feature.url} target={"_blank"} rel={"noopener noreferrer"}>
                                    <dt className="font-medium text-gray-900">
                                        {feature.name}
                                    </dt>
                                </a>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>

                </div>
            </>
        )
    };
};

export default LinkTree;