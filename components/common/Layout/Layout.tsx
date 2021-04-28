import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';

interface Props{
    title:string;
    header?: React.ReactNode[]|React.ReactNode,
    children?: React.ReactNode[]|React.ReactNode
}

export default function Layout<Props>({title='', header, children}){
    return(
        <div className={styles.gridLayout}>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className={styles.gridHeader}>
                {header}
            </header>
            <main className={styles.gridMain}>
            {children}
            </main>
            <footer className={styles.gridFooter}>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.footerListItem}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    )

}