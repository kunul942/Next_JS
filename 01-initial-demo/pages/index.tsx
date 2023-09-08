import { MainLayout } from '@/components/layout/MainLayout';
import { Inter } from 'next/font/google'

import Link from 'next/link'
import styles from '../components/layout/MainLayout.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>  
        <h1>Home  Page</h1>  

        <div className={styles.title}>
            Ir a <Link href='/about'>About</Link>
        </div>

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
    </MainLayout>
  )
}
