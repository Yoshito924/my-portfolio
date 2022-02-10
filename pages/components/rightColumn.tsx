import React from 'react';
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

class RightColumn extends React.Component {
    render() {
        return (
            <>

                <Link href="/originalMusic" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/XR4A1201-2.jpg"
                                alt="葉桜の写真"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
                            />
                            <div className={styles.overlappingText}>
                                音楽作品の紹介
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/originalApp" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC00240_1.jpg"
                                alt="ランタンの写真"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
                            />
                            <div className={styles.overlappingText}>
                                個人開発アプリの紹介
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/gear" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC04186-2.jpg"
                                alt="ギターやベースの写真"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
                            />
                            <div className={styles.overlappingText}>
                                機材の紹介
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/documents" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC00225.jpg"
                                alt="海月の写真"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
                            />
                            <div className={styles.overlappingText}>
                                資料/教材
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/contact" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC04991.jpg"
                                alt="時計台"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
                            />
                            <div className={styles.overlappingText}>
                                連絡先
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/links" passHref>
                    <div className={styles.imageText}>
                        <div className={styles.backgroundImage}>
                            <Image
                                src="/DSC04275.jpg"
                                alt="葉桜の写真"
                                className="bg-gray-100 rounded-lg"
                                layout="fill" objectFit="contain"
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