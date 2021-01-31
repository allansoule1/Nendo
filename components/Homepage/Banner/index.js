import React  from "react";
import styles from './style.module.css'

class Banner extends React.Component{

    render() {
        return (
            <article className={styles.banner}>
                <span
                    style={{backgroundImage: `url(${this.props.urlBackground})`}}
                ></span>
                <h3>Livraison Rapide (enfin, on espère !)</h3>
                <h3>Des pièce détachées officielles</h3>
                <h3>Une équipe au top !</h3>
            </article>
        );
    }
}

export default Banner