import React  from "react";
import { PropTypes } from "prop-types";
import styles from './style.module.css'

class Layout extends React.Component{
    render() {
        return <div className={styles.container}>{this.props.children}</div>;
    }
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout 