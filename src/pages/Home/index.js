import React, { useState, useEffect } from 'react';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

function Home() {
    const [incidents, setIncidents] = useState([]);

    async function handleList() {
        const idS = localStorage.getItem('saveId');

        const response = await api.get('/profile', {
            headers: { Authorization: idS },
        });

        setIncidents(response.data);
    }

    useEffect(() => {
        handleList();
    }, []);

    return (
        <Container>
            <div className="principalDiv">
                <div className="leftDiv">
                    <div className="logoDiv">
                        <img src={logo} alt="logo" />
                        <h1>Bem vinda, </h1>
                    </div>
                    <div>
                        <h2>casos cadastrados</h2>
                    </div>
                    <div className="render">
                        {incidents.map((v) => (
                            <div className="renderDiv">
                                <h1>Caso Registrado</h1>
                                <p>{v.title}</p>
                                <p>{v.description}</p>
                                <p>{v.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rightDiv">
                    <a className="firstBtn" href="/NewIncident">
                        Cadastar novo caso
                    </a>
                    <button className="secondBtn" type="submit">
                        <AiOutlinePoweroff size="13" color="rgb(224, 32, 65)" />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Home;
