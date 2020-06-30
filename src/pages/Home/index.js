import React from 'react';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { Container } from './styles';
import logo from '../../assets/logo.png';

function Home() {
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
