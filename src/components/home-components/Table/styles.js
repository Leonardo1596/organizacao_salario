import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
`;

export const Area = styled.div`
    max-width: 1060px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const Form = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 100%;
    padding: 15px;
`;

export const FormField = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    margin-right: 30px;

    label {
        margin-bottom: 5px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const TableHeader = styled.th`
    height: 40px;
    text-align: center;
    background-color: #f2f2f2;
`;

export const TableCell = styled.td`
    text-align: center;
    height: 25px;
`;

export const Input = styled.input`
    height: 25px;
`;