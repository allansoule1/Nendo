import React  from "react";
import styles from './style.module.css'
import Link from "next/link";
import { motion } from "framer-motion";
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
                                <Link href="/nendo">
                                <motion.div className={styles.a}
                                    whileHover={{ scale: 1.2, rotate: 0 }}
                                    whileTap={{ scale: 0.8, rotate: 0 }}
                                    >BROWSE</motion.div>
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/contact">
                                    <motion.div className={styles.a}
                                    whileHover={{ scale: 1.2, rotate: 0 }}
                                    whileTap={{ scale: 0.8, rotate: 0 }}
                                    >CONTACT</motion.div>
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