import styled from "styled-components";

export const Container = styled.div`

display:flex;
  flex-direction:column;
  width: 100%;
  z-index: 5000;
  position: fixed;
  align-items:center;
  justify-content: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 50% transparente */
  height:60px;



`

export const ImageContainer = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:10px;
    height:10px;
    


`

export const Image = styled.img`

    width:70px;
    height:70px;



`