import styles from '../styles/footer.module.css'

export const FooterNav = () => {
    return (
        <footer className={styles.bottomNav}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.countries + ' ' + styles.list}>
                        <ul>
                            <a href='/Country'>United States</a>
                            <a href='/Country'>India</a>
                            <a href='/Country'>Britain</a>
                            <a href='/Country'>Russia</a>
                            <a href='/Country'>Europe</a>
                        </ul>
                    </div>
                    <div className={styles.pages + ' ' + styles.list}>
                        <ul>
                            <a href='/feed'>Home</a>
                            <a href='/Contact'>Contact Us</a>
                            <a href='/Request'>Request Media Coverage</a>
                            <a href='/About'>About Us</a>
                            <a href='/Sponser'>Sponser Us</a>
                        </ul>
                    </div>
                    <div className={styles.logo}><a href='/feed'>FAKES<span>.</span>com</a></div>
                </div>
                <div className={styles.footer}>
                    Copyrights &#169; Fakes.com
                </div>
            </div>
        </footer>
    )
}