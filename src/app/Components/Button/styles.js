
import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    margin: 0.5rem;
    min-width: 120px;
    max-width:300px;
    width: 80%;
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 500px) {
    
    
    width: 250px


}
    


    ${({ variant }) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background: #FF9900;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }


    &::after {
        content: '';
        position: absolute;
        border: 1px solid #FF9900;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}


`