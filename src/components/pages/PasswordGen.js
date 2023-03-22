import styles from './PasswordGen.module.css'

import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ['!', '@', '#', '$', '%'];
  const lowercaseCharacters = Array.from(Array(26)).map((_, i) => i + 97).map((item) => String.fromCharCode(item));
  const uppercaseCharacters = lowercaseCharacters.map((item) => item.toUpperCase());

  const generatePassword = () => {
    const newArray = [
      ...(hasNumbers ? numbers : []),
      ...(hasSymbols ? symbols : []),
      ...(hasLowercase ? lowercaseCharacters : []),
      ...(hasUppercase ? uppercaseCharacters : []),
    ];

    if (newArray.length === 0) return;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      password += newArray[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  return (
    <div className={styles.div}>
      <label htmlFor="inputLengthId">Número de caracteres: </label>
      <input type="number" id="inputLengthId" value={passwordLength} onChange={handlePasswordLengthChange} />
      <br />
      <label htmlFor="chkLowerId">
        <input className={styles.input} type="checkbox" id="chkLowerId" checked={hasLowercase} onChange={() => setHasLowercase(!hasLowercase)} />
        Letras minúsculas
      </label>
      <br />
      <label htmlFor="chkUpperId">
        <input className={styles.input} type="checkbox" id="chkUpperId" checked={hasUppercase} onChange={() => setHasUppercase(!hasUppercase)} />
        Letras maiúsculas
      </label>
      <br />
      <label htmlFor="chkNumberId">
        <input className={styles.input} type="checkbox" id="chkNumberId" checked={hasNumbers} onChange={() => setHasNumbers(!hasNumbers)} />
        Números
      </label>
      <br />
      <label htmlFor="chkSymbolsId">
        <input className={styles.input} type="checkbox" id="chkSymbolsId" checked={hasSymbols} onChange={() => setHasSymbols(!hasSymbols)} />
        Símbolos
      </label>
      <br />
      <button className={styles.btn} id="btnGerar" onClick={generatePassword}>Gerar Senha</button>
      <br />
      <label className={styles.senha} htmlFor="inputPasswordId">Senha gerada: </label>
      <input type="text" id="inputPasswordId" value={generatedPassword} readOnly />
    </div>
  );
};

export default PasswordGenerator;