import React  from "react";
import styles from './style.module.css'
import Link from "next/link";

class Header extends React.Component{

    render() {
        return (
            <section
                className={styles.section}
                style={{backgroundImage: `url(${this.props.urlBackground})`}}
            >
                <header className={styles.header}>
                    <div className={styles.logo}>
                        ChibiMarket
                        <sup>♡</sup>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link href="/contact">
                                    <a  className={styles.a}>CONTACT</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </section>
        );
    }
}

export default Header