import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';

function Register() {
    return (
        <Container>
            <div className="priBackground">
                <div className="leftDiv">
                    <img src={logo} alt="logo" />
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a
                        encontrar os casos da sua ONG.
                    </p>
                    <a href="/">🡠 Não tenho cadastro</a>
                </div>

                <div className="rightDiv">
                    <div className="fForm">
                        <input type="text" placeholder="Nome da ONG" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="WhatsApp" />
                    </div>
                    <div className="sForm">
                        <input
                            className="cityInput"
                            type="text"
                            placeholder="Cidade"
                        />
                        <input
                            className="lInput"
                            type="text"
                            placeholder="UF"
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
        </Container>
    );
}

export default Register;
