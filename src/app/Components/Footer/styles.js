import styled, { css } from 'styled-components';

export const TextContent = styled.div`
    
    align-items: center;
    justify-content:center;
    text-align: center;    
    margin: 1rem 0.5rem;
    display:flex;
    flex-direction: row;
    gap: 0.5rem; 
    color: white;

    
    
`

export const TextContentExternal = styled.div`

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    
     
`

export const Wrapper = styled.div`

    width:100%;
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparente */  
    bottom: 0;
    position: fixed;  

    @media (max-width: 500px) {
    
    
        position: auto;
        
        



  }
  @media (max-height: 500px) {
    display: none;
  }
`

export const TextLink = styled.p` 

    font-weight: 600;
    


    &:hover{

         color: #9a9a9c
    }

`