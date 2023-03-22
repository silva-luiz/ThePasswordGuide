import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/seguranca">Segurança</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/gerador-de-senhas">Gerador de Senhas</Link>
                    </li>
                    <li className={styles.item}>
                         <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>    
        </nav>
    )
}

export default Navbar