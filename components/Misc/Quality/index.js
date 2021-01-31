import React  from "react";
import styles from './style.module.css'
import {motion} from "framer-motion";

class Quality extends React.Component{
    render() {

        const note = this.props.note;
        const quality_color = ["#F55600", "#D48E0B", "#EBCF00", "#84D40B", "#0CF731"];

        const quality_star = Array.from(Array(note).keys());
        const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                }
            }
        };

        const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1
            }
        };

        return (
            <>
            <motion.ul className={styles.note}
                       variants={container}
                       initial="hidden"
                       animate="visible">

                {quality_star.map((index) => (
                    <motion.li
                        key={index}
                        style={{backgroundColor: quality_color[note-1]}}
                        className={styles.notum}
                        variants={item}/>
                ))}

            </motion.ul>
            </>
        );
    }
}

export default Quality