import styles from '../styles/footer.module.css'
import { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

export const FooterNav = () => {
    const {setCountry} = useContext(AppContext);
    return (
        <footer className={styles.bottomNav}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.countries + ' ' + styles.list}>
                        <ul>
                            <Link to={'/Country'} onClick={()=>setCountry("us")}>United States</Link>
                            <Link to={'/Country'}  onClick={()=>setCountry("in")}>India</Link>
                            <Link to={'/Country'}  onClick={()=>setCountry("br")}>Britain</Link>
                            <Link to={'/Country'}  onClick={()=>setCountry("ru")}>Russia</Link>
                            <Link to={'/Country'}  onClick={()=>setCountry("sa")}>South Africa</Link>
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