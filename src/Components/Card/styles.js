import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 90%;
    justify-content: space-around;
    align-items: flex-start;
`
export const Form = styled.div`
    margin-right: 2rem;
`

export const Container = styled.div`
    width: 388px;
    margin-top: 5rem;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Text = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    text-align: left;
`

export const SubText = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    max-width: 372px;
`

export const AlreadyAcountText = styled.p`
    font-family: 'Open Sans';
    font-weight: 700px;
    font-size: 14px;
    color: #FFF;
    margin-top: 1rem;

    a{
        color: #23DD7A;
        text-decoration: none;
    }
`