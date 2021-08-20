import React from 'react';
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

class RightColumn extends React.Component {
    render() {
        return (
            <>
                <Link href="/contact" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC04991.jpg"
                                alt="時計台"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                連絡/依頼はこちら
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/instrumentGear" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC05267-3.jpg"
                                alt="ギターを演奏している写真"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                楽器演奏/機材の紹介
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/originalApp" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC00560.jpg"
                                alt="ランタンの写真"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                制作したアプリ紹介
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/music" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/XR4A1201-2.jpg"
                                alt="葉桜の写真"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                音楽作品集
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/musicTheory" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC00225.jpg"
                                alt="海月の写真"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                音楽理論講座/レッスン
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/snsLink" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC05554.jpg"
                                alt="紅葉の写真"
                                className="bg-gray-100 rounded-lg"
                                width={1000}
                                height={600}
                            />
                            <div className={styles.overlappingText}>
                                リンク集
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        )
    };
};

export default RightColumn;