import React  from "react";
import styles from './style.module.css'
import Link from "next/link";

class Footer extends React.Component{

    render() {
        return (
            <footer className={styles.footer}>
                <Link href={`/contact`}>
                    <a className={styles.a}>
                        Contact
                    </a>
                </Link>
                <div>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>TikTok</span>
                </div>
                <Link href={`/legal`}>
                    <a className={styles.a}>
                        Mentions légales
                    </a>
                </Link>

            </footer>
        );
    }
}

export default Footer