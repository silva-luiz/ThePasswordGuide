import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
       <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaGithub />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <li>
                <FaInstagram />
            </li>
        </ul>
        <p className={styles.copyright}>
                <span>The Password Guide </span>&copy; 2023.
        </p>
       </footer>
    )

}

export default Footer