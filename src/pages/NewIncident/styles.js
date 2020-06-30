import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .priBackground {
        display: flex;
        background: rgb(241 240 245);
        padding: 60px 1px;
        box-shadow: 0 0 40px 10px lightgray;
        justify-content: space-around;
        width: 900px;
        height: 360px;
    }
    .leftDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
        margin: 0 0 0 20px;
    }

    .leftDiv img {
        height: 4.5rem;
        width: 11rem;
        margin-bottom: 2rem;
    }

    .leftDiv h1 {
        font-family: sans-serif;
        font-size: 27px;
        margin-top: 1rem;
    }

    .leftDiv p {
        font-family: sans-serif;
        font-size: 15px;
        opacity: 70%;
        margin-bottom: 2rem;
        line-height: 1.5rem;
    }

    a {
        text-decoration: none;
        color: black;
        font-family: sans-serif;
        font-size: 13px;
        opacity: 90%;
        font-weight: bold;
    }

    a:hover {
        opacity: 80%;
    }

    a::first-letter {
        color: rgb(224, 32, 65);
    }

    .rightDiv {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 40%;
        margin: 20px 20px 20px 0;
    }

    .fForm {
        display: flex;
        flex-direction: column;
    }

    .fForm input {
        margin-bottom: 0.4rem;
        border: 1px solid rgb(0, 0, 0, 0.1);
        padding: 0.7rem 0.6rem;
        border-radius: 0.4rem;
    }

    textarea {
        margin-bottom: 0.4rem;
        border: 1px solid rgb(0, 0, 0, 0.1);
        padding: 0.7rem 0.6rem;
        border-radius: 0.4rem;
        resize: none;
    }

    textarea::placeholder {
        font-family: sans-serif;
    }

    .sForm {
        display: flex;
    }

    .sForm input {
        margin-bottom: 0.4rem;
        border: 1px solid rgb(0, 0, 0, 0.1);
        padding: 0.7rem 0.6rem;
        border-radius: 0.4rem;
    }
    .sForm .cityInput {
        width: 81%;
        margin-right: 4px;
    }
    .sForm input:nth-child(2) {
        width: 1.5rem;
    }

    button {
        background: rgb(224, 32, 65);
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        padding: 0.7rem;
        border-radius: 0.4rem;
        transition: 300ms;
        border: 1px solid rgb(224, 32, 65);
    }

    button:hover {
        cursor: pointer;
        opacity: 85%;
    }
`;
