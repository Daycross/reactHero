import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;

    .principalDiv {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        padding: 2rem 10rem;
    }

    .leftDiv {
        display: flex;
        flex-direction: column;
    }

    .logoDiv {
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;
    }

    img {
        width: 100px;
        height: 40px;
        margin-right: 1rem;
    }

    h1 {
        font-size: 14px;
        font-weight: normal;
        font-family: sans-serif;
    }

    h2 {
        font-family: sans-serif;
        font-size: 17px;
    }

    .rightDiv {
        display: flex;
        height: 32.19px;
    }

    a {
        padding: 0.6rem 1.6rem;
        background: rgb(224, 32, 65);
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 10px;
        text-decoration: none;
        border: 1px solid rgb(224, 32, 65);
        border-radius: 0.3rem;
        margin-right: 0.4rem;
        transition: 300ms;
    }

    a:hover {
        cursor: pointer;
        opacity: 90%;
    }

    .secondBtn {
        background: rgb(241 240 245);
        border-radius: 0.2rem;
        border: 1px solid rgb(0, 0, 0, 0.1);
        padding: 0.5rem 0.5rem 0.4rem 0.5rem;
        height: 32.19px;
        transition: 300ms;
    }

    .secondBtn:hover {
        cursor: pointer;
        border: 1px solid rgb(0, 0, 0, 0.5);
    }
`;
