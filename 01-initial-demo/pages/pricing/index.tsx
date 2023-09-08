import { MainLayout } from "@/components/layout/MainLayout";
import Link from "next/link";

import styles from '../../components/layout/MainLayout.module.css'


export default function PricingPage(){
    return (
        <MainLayout>
            <h1>PricingPage</h1>

            <div className={styles.title}>
                Ir a <Link href="/">Home</Link>
            </div>

            <div>
                <p>
                    Get started by editing &nbsp;
                    <code className={styles.code}>pages/pricing.tsx</code>
                </p>
            </div>
        </MainLayout>
    )
}
