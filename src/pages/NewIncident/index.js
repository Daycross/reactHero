import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

function NewIncident() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const idS = localStorage.getItem('saveId');

    async function handleCreate() {
        const data = {
            title,
            description,
            value,
        };
        console.log(data);

        localStorage.setItem('incident', data);

        const response = await api.post('/incidents', data, {
            headers: { Authorization: idS },
        });

        console.log(response);

        alert('caso cadastrado');

        history.push('/Home');
    }

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
                        <input
                            type="text"
                            placeholder="Título do caso"
                            value={title}
                            onChange={(v) => setTitle(v.target.value)}
                        />
                        <textarea
                            placeholder="Descrição"
                            rows="7"
                            cols="33"
                            value={description}
                            onChange={(v) => setDescription(v.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Valor em reais"
                            value={value}
                            onChange={(v) => setValue(v.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleCreate}>
                        Cadastrar
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default NewIncident;
