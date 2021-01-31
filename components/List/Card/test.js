{Array(part.quality).keys.map((index) => {
    return <motion.li key={index} style={{backgroundColor: quality_color[part.quality-1]}} className={styles.notum}/>
}