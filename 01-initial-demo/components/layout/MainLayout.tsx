import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from './MainLayout.module.css';

import { Navbar } from '../../components/Navbar';

import { ChildrenProp } from './interface';


const inter = Inter({ subsets: ['latin'] })



export const MainLayout = ({ children }:ChildrenProp ) => {
    return (
        <>
            <Head>
                <title>Kunu Lee</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={`${styles.main} ${inter.className}`}>
                { children }
            </main>
        </>
    )
}
