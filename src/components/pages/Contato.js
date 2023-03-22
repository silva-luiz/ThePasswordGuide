import styles from './Contato.module.css'

import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

function Contato(){
    return(
        <section className={styles.container_contato}>
            <h1>Contato</h1>
            <h2>Redes sociais que utilizo:</h2>
            <span><FaGithub /></span><a target="_blank" href="https://github.com/silva-luiz">GitHub</a>
            <span><FaLinkedin /></span><a target="_blank" href="https://www.linkedin.com/in/luiz-henrique-gomes-da-silva-0a13b3194">LinkedIn</a>
            <span><FaInstagram /></span><a target="_blank" href="https://www.instagram.com/slvlz_">Instagram</a>
            <span><AiOutlineMail/> E-mail:</span> luiz.hgsilva@hotmail.com
        </section>
        
    )
}

export default Contato