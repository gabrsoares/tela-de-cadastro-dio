import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    cursor: pointer;

    color: #FFF;
    text-align: center;
    min-width: 120px;
    width: 100%;
    padding: 2px 12px;

    &:hover {
        opacity: 0.7;
    }

    ${({variant})=> variant === "margin" && css`
        margin-right: 15px;
    `}
    ${({variant})=> variant !== "primary" && variant !== "margin" && css`
        align-items: center;
        background-color: #E4105D;
        display: flex;
        justify-content: center;
        max-width: 264px;
        height: 33px;
        margin: 2rem 0;
    
        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    
        &::after {
            content:'';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px; 
        }
    `}
`
