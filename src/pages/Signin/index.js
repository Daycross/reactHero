import React, { useState } from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import heroes from '../../assets/heroes.png';
import icon from '../../assets/icon.svg';
import api from '../../services/api';

function Signin() {
    const [id, setId] = useState('');

    async function handleLogin() {
        const data = {
            id,
        };

        const response = await api.post('/sessions', data);
        console.log(data);
        console.log(response.data);
    }

    return (
        <Container>
            <div className="login">
                <img src={logo} alt="logo" />
                <label htmlFor="user">Faça seu logon</label>
                <input
                    type="text"
                    id="user"
                    placeholder="Sua ID"
                    value={id}
                    onChange={(v) => setId(v.target.value)}
                />
                <button type="button" className="link1" onClick={handleLogin}>
                    Entrar
                </button>
                <div className="iconBtn">
                    <img id="img2" src={icon} alt="icon" />
                    <a className="link2" href="/register">
                        Não tenho cadastro
                    </a>
                </div>
            </div>

            <div className="image">
                <img src={heroes} alt="logoH" />
            </div>
        </Container>
    );
}

export default Signin;
