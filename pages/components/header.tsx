import React from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
    { name: 'ホーム', href: '/', current: true },
    { name: '連絡先', href: '/contact', current: false },
    { name: 'リンク', href: '/links', current: false },
    { name: '音楽作品', href: '/originalMusic', current: false },
    { name: 'アプリ紹介', href: '/originalApp', current: false },
    { name: '使用機材', href: '/gear', current: false },
    { name: '資料/教材', href: '/documents', current: false },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

class Header extends React.Component {
    render() {
        return (
            <Disclosure as="nav" className="bg-gray-700">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

                            <div className="relative flex items-center justify-between h-16">

                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                    <div className="flex-shrink-0 flex items-center text-white">
                                        <Link href="/" passHref>Yoshito Kimura</Link>
                                    </div>

                                    <div className="hidden sm:block sm:ml-6">

                                        <div className="flex space-x-4">

                                            <a className="flex-shrink-0 flex items-center bg-gray-900 text-white px-3 py-2 rounded-md">
                                                <Link href="/" passHref>ホーム</Link>
                                            </a>

                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/contact" passHref>連絡先</Link>
                                            </a>

                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/originalMusic" passHref>音楽作品</Link>
                                            </a>


                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/originalApp" passHref>アプリ紹介</Link>
                                            </a>

                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/gear" passHref>使用機材</Link>
                                            </a>

                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/documents" passHref>資料/教材</Link>
                                            </a>

                                            <a className="flex-shrink-0 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Link href="/links" passHref>リンク</Link>
                                            </a>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    };
};

export default Header;