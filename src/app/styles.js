import styled from "styled-components";


export const ExternalContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;  

`

export const InternalContainer = styled.div`

    display:flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #000000,  #000033);
    width: 100vw;
    height:100vh;
    

`

export const Form = styled.form`
  margin-top: 3rem;
  
  width: 90vw;
  max-width:500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius:1rem;
  gap: 0.8rem;
  
  
  
  
`;



export const Input = styled.input`
  width: 100%;
  max-width:500px;
  padding: 8px;
  box-sizing: border-box; 

  border-radius:1rem;

  background-color: #141414;
  color: white;
`;