import styles from './Gerador.module.css'

import PasswordGen from "./PasswordGen"

function Gerador(){
    return(
        <section className={styles.main_container}>
            <h1>Gerador de senhas</h1>
            <h2>Crie sua senha personalizada com o gerador de senhas aleatórias</h2>
            <PasswordGen />
        </section>
            
        
    )
}

export default Gerador