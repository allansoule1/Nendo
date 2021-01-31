import React  from "react";
import styles from './style.module.css';
import { motion } from "framer-motion";

class Content extends React.Component{

    render() {
        return (
            <article className={styles.content}>
                {this.props.imgLeft ? "" : <div>{this.props.text.map(line => <p>{line}</p>)}</div>}


                <motion.img
                      whileHover={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                      }}
                 src="/hp_1.jpg" alt="Une figurine Nendoroid custom clignant de l'oeil à la caméra est entourée de boîtes"/>
                {this.props.imgLeft ? <div>{this.props.text.map(line => <p>{line}</p>)}</div> : ""}
            </article>
        );
    }
}

export default Content