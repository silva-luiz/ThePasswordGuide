import styles from './Seguranca.module.css'

function Seguranca(){
    return(
        <section className={styles.seguranca_container}>
            <h1>Como se proteger na internet</h1>
            <p>Nos tópicos abaixo, você verá alguns pontos a serem considerados para se proteger na internet e evitar que seus dados sejam roubados.</p>
            <h2>Senhas seguras</h2>
            <p>As senhas seguras são importantes para proteger suas contas online de hackers e invasores. Uma senha segura é uma combinação de letras, números e símbolos que é difícil de ser adivinhada ou decifrada. Algumas dicas para criar senhas seguras são:</p>
            <ul>
                <li>Use pelo menos 12 caracteres;</li>
                <li>Misture letras maiúsculas e minúsculas;</li>
                <li>Use números e símbolos;</li>
                <li>Evite informações pessoais óbvias, como datas de aniversário ou nomes de familiares;</li>
                <li>Evite sequências óbvias, como "1234" ou "abcd";</li>
                <li>Use senhas diferentes para cada conta online.</li>
            </ul> 
            <h2>Engenharia Social</h2>
            <p>A Engenharia Social é uma técnica utilizada por golpistas para enganar as pessoas e obter informações confidenciais, como senhas e dados pessoais. Esses golpistas usam métodos psicológicos para manipular as vítimas e obter informações valiosas. Algumas dicas para se proteger contra a Engenharia Social são:</p>
            <ul>
                <li>Fique atento a emails, mensagens ou ligações suspeitas;</li>
                <li>Verifique a autenticidade do remetente antes de clicar em links ou baixar arquivos;</li>
                <li>Nunca compartilhe informações pessoais ou senhas com desconhecidos;</li>
                <li>Verifique a autenticidade de sites antes de inserir informações pessoais ou fazer transações;</li>
                <li>Esteja atento a pedidos de urgência ou informações sensíveis que parecem fora do comum.</li>
            </ul>
            <h2>Malwares</h2>
            <p>Malwares são softwares maliciosos projetados para causar danos a computadores, dispositivos móveis e redes. Esses softwares podem roubar informações, danificar arquivos ou permitir que hackers assumam o controle do seu dispositivo. Algumas dicas para se proteger contra Malwares são: </p>
            <ul>
                <li>Instale e mantenha um programa antivírus atualizado;</li>
                <li>Não baixe arquivos ou programas de fontes não confiáveis;</li>
                <li>Não clique em links suspeitos em e-mails ou mensagens;</li>
                <li>Mantenha seu sistema operacional e programas atualizados;</li>
                <li>Use uma senha forte e ative a autenticação de dois fatores sempre que possível.</li>
            </ul>
            <p>Se você suspeitar que seu dispositivo foi infectado por Malware, execute uma verificação completa do sistema usando seu software antivírus e remova quaisquer ameaças identificadas. Em casos extremos, pode ser necessário reinstalar o sistema operacional do seu dispositivo.</p>
            <h2>Phishing</h2>
            <p>Phishing é uma técnica utilizada por golpistas para obter informações pessoais e financeiras por meio de e-mails, mensagens e sites fraudulentos. Esses golpistas se passam por empresas legítimas e pedem aos usuários que insiram suas informações confidenciais em sites falsos. Algumas dicas para se proteger contra Phishing são: </p>
            <ul>
                <li>Desconfie de e-mails ou mensagens que solicitam informações pessoais ou financeiras;</li>
                <li>Verifique a autenticidade do remetente e do site antes de inserir informações pessoais;</li>
                <li>Não clique em links suspeitos em e-mails ou mensagens;</li>
            </ul>
            <p>Se você suspeitar que foi vítima de Phishing, entre em contato com a empresa ou instituição financeira em questão imediatamente para informar sobre o incidente e tomar medidas para proteger suas informações.</p>
            <h2>Verificação em duas etapas</h2>
            <p>A verificação em duas etapas é um processo de segurança que adiciona uma camada extra de proteção à sua conta online. Esse processo requer que você forneça duas formas de autenticação para acessar sua conta, em vez de apenas uma senha.</p>
            <p>A primeira forma de autenticação é geralmente uma senha, e a segunda forma pode ser um código enviado por mensagem de texto, um token de segurança ou um aplicativo de autenticação. Essa segunda etapa de autenticação é conhecida como "fator de autenticação".</p>
            <p>A verificação em duas etapas é importante porque adiciona uma camada extra de segurança à sua conta. Mesmo que um invasor obtenha sua senha, ainda precisará da segunda forma de autenticação para acessar sua conta. Isso pode impedir que os invasores acessem suas informações e proteger suas contas e dados pessoais.</p>
        </section>       
    )
}

export default Seguranca