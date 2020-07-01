import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleCreate() {
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        const response = await api.post('/ongs', data);

        alert(`seu ID é ${response.data.id}`);

        setName('');
        setEmail('');
        setWhatsapp('');
        setCity('');
        setUf('');

        history.push('/');
    }

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
                        <input
                            type="text"
                            placeholder="Nome da ONG"
                            value={name}
                            onChange={(v) => setName(v.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(v) => setEmail(v.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="WhatsApp"
                            value={whatsapp}
                            onChange={(v) => setWhatsapp(v.target.value)}
                        />
                    </div>
                    <div className="sForm">
                        <input
                            className="cityInput"
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={(v) => setCity(v.target.value)}
                        />
                        <input
                            className="lInput"
                            type="text"
                            placeholder="UF"
                            value={uf}
                            onChange={(v) => setUf(v.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleCreate}>
                        Cadastrar
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Register;
