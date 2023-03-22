import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>The Password Guide</span></h1>
            <br/>
            <p>Esta página foi criada com o intuito de alertar sobre a importância de escolher uma senha segura para proteger suas informações pessoais e dados online.</p>
            <p>Com o aumento da atividade online, é mais importante do que nunca escolher senhas fortes e seguras para proteger suas contas de e-mails, redes sociais, bancos e outros serviços. Uma senha segura é essencial para manter suas informações pessoais e financeiras em segurança contra hackers e cibercriminosos.</p>
            <br/>
            <p>Muitas pessoas ainda usam senhas fracas, como "123456" ou "password", que são facilmente descobertas por hackers. Isso pode levar a roubo de identidade, fraude e outros tipos de crimes cibernéticos que podem ter consequências graves para a sua vida financeira e pessoal.</p>
            <br/>
            <p>Por isso, recomendamos que você escolha senhas seguras e difíceis de adivinhar, incluindo letras maiúsculas e minúsculas, números e símbolos. Não use informações pessoais óbvias, como seu nome, data de nascimento ou endereço. Além disso, é importante evitar reutilizar senhas em várias contas, pois isso pode tornar todas as suas informações vulneráveis se uma delas for comprometida.</p>
            <br/>
            <p>Ao escolher uma senha forte e segura, você pode ficar tranquilo sabendo que suas informações estão protegidas. Portanto, não hesite em investir tempo para escolher uma senha forte e segura para cada uma de suas contas online. Sua segurança e privacidade estão em suas mãos.</p>
            <br/>
            <span>Aqui você poderá utilizar um gerador de senhas aleatórias para conseguir uma senha que seja forte o suficiente para a proteção de seus dados!</span>
            <br/>
            <button>
                <a href="/gerador-de-senhas" className={styles.btn}>Ir para o Gerador de Senhas</a>
            </button>
        </section>
    )
}

export default Home