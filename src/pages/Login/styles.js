import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Area = styled.div`
    min-width: 1060px;
    /* min-height: 650px; */
    width: 70%;
    height: 65%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    margin: auto;
    border: 1px solid black;
`;

export const FirstColumn = styled.div`
    background-color: blue;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1 0 auto;

    img {
        width: 40%;
    }
`;

export const SecondColumn = styled.div`
    background-color: red;
    flex: 2 0 auto;
    max-width: 40%;
`;