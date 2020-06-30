import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';

function NewIncident() {
    return (
        <Container>
            <div className="priBackground">
                <div className="leftDiv">
                    <img src={logo} alt="logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontar um herói
                        para resolver isso.
                    </p>
                    <a href="/home">🡠 Voltar para home</a>
                </div>

                <div className="rightDiv">
                    <div className="fForm">
                        <input type="text" placeholder="Título do caso" />
                        <textarea placeholder="Descrição" rows="7" cols="33" />
                        <input type="tel" placeholder="Valor em reais" />
                    </div>
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
        </Container>
    );
}

export default NewIncident;
