import React  from "react";
import styles from './style.module.css'
import { motion } from "framer-motion";
import Quality from "../../Misc/Quality";

class Card extends React.Component{

    render() {

        const part = this.props.part;
        return (
            <article className={styles.content}>

                <p style={{textAlign: "center", marginBottom:"0", width:"100%"}} className={styles.text}>{part.name}</p>
                <p className={styles.subtext}>{part.type}</p>
                <div
                    className={styles.image}
                    style={{backgroundImage: `url(${part.image.replace(/(\r\n|\n|\r)/gm, "")})`}}
                />
                <div className={styles.quality}>
                    <p >Quality : </p>
                    <p style={{textAlign: "right"}} className={styles.text}>{part.price}</p>
                    <Quality note={part.quality}/>


                </div>
            </article>
        );
    }
}

export default Card