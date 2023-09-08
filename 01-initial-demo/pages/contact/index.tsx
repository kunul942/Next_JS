import { MainLayout } from '@/components/layout/MainLayout'

import Link from 'next/link'
import styles from '../../components/layout/MainLayout.module.css'


export default function ContactPage() {
  return (
    <MainLayout>  
        <h1>ContactPage</h1>

        <div className={styles.title}>
          Ir a <Link href='/'>Home</Link>
        </div>

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/contact.tsx</code>
          </p>
        </div>
    </MainLayout>
  )
}
