import React from 'react';
import styles from '../../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

const features = [
    { name: '個人YouTube（ユーチューブ）', description: '楽曲分析や演奏動画などをアップしています。', url: "https://www.youtube.com/user/kimukydr/videos" },
    { name: 'KHUFRUDAMO NOTES - YouTube', description: 'ミュージックビデオなどをアップしています。', url: "https://www.youtube.com/c/KHUFRUDAMONOTES" },
    { name: 'Spotify（スポティファイ）', description: 'アルバムを配信しています。', url: "https://open.spotify.com/artist/3nNyAqPr07cmNuDhq6Ragl?si=ZibXmE07ThaDFlhHS254dw&dl_branch=1" },
    { name: 'Blog（ブログ）', description: '音楽を中心に色々な記事を書いています。', url: "https://khufrudamonotes.com/new-contents" },
    { name: 'Qiita（キータ）', description: 'プログラミング系の内容を書いています。', url: "https://qiita.com/k1mu0419" },
    { name: 'note（ノート）', description: 'ブログに短しツイッターに長しな文章を書きます。', url: "https://note.com/k1mu" },
    { name: 'Twitter（ツイッター）', description: '個人ツイッターです。', url: "https://twitter.com/k1mu0419" },
    { name: 'Instagram（インスタグラム）', description: '個人インスタグラムです。', url: "https://www.instagram.com/k1mu.khufrudamo_notes/" },
    { name: 'Facebook（フェイスブック）', description: 'クフルダモ・ノーツの公式ページ。', url: "https://www.facebook.com/khufrudamonotes" },
    { name: 'TikTok（ティックトック）', description: '稀に更新されます。', url: "https://www.tiktok.com/@khufrudamonotes" },
    { name: 'Music scores（楽譜）', description: 'オリジナル曲の譜面データです。', url: "https://khufrudamonotes.gumroad.com/" },
    { name: 'O-TO（音楽理論Webアプリ）', description: '音楽理論の学習・活用に使える自作アプリです。', url: "https://o-to.khufrudamonotes.com/" },
    { name: '読みやすさチェッカー（文章校正Webアプリ）', description: '読みにくい部分を教えてくれる自作アプリです。', url: "https://readability-checker.khufrudamonotes.com/" },
    { name: 'bandcamp（バンドキャンプ）', description: 'オリジナル曲を購入できます。', url: "https://khufrudamonotes.bandcamp.com/" },
    { name: 'Streaming（サブスク）', description: 'アルバムを配信しているサービスの一覧です。', url: "https://linkco.re/ETgUYS1H?lang=ja" },
    { name: 'Audiostock（オーディオストック）', description: 'オリジナルBGM・効果音を購入できます。', url: "https://audiostock.jp/artists/42519" },
    { name: 'GitHub（ギットハブ）', description: '個人のギットハブページです。', url: "https://github.com/Yoshito924" },
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
                                    {feature.name}
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