import { ReactElement } from "react";
import { MainLayout } from '@/components/layout/MainLayout'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import styles from '../components/layout/MainLayout.module.css'
import { DarkLayout } from '@/components/layout/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
        <h1>AboutPage</h1>

          <div className={styles.title}>
            Ir a <Link href='/'>Home</Link>
          </div>

          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/about.tsx</code>
            </p>
          </div>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: ReactElement ){
    return(
      <MainLayout>  
        <DarkLayout>
            { page }
        </DarkLayout>
      </MainLayout>
    )
}