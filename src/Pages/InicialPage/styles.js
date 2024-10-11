import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: white;
    margin-top: 3%;
    
    width: 90%;
    padding: 10px; /* Adiciona padding para um melhor visual */
    border-radius: 5px; /* Bordas arredondadas */
`;

export const ContainerProducts = styled.div`
    margin-top: 3%;
    width: 90%; 

   
`;

export const ButtonAddNewProduct = styled.button`

border: none;
width: 140px;
height: 50px;
background-color: blue;
color:white;
border-radius: 10px;
font-weight: 500;
display: flex;
align-items: center;
margin-top: 1%;
cursor: pointer;
transition: all ease-in-out .2s;

&:hover{
         opacity: .7;
      }
    
      &:active{
         opacity: .5;
      }


`



export const Subtitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: white;
    margin-top: 1%;
    width: 100%;
    padding: 10px; /* Adiciona padding para um melhor visual */
    border-radius: 5px; /* Bordas arredondadas */
`;

// Adicionando estilos para a tabela
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px; /* Espaçamento acima da tabela */
`;

export const Th = styled.th`
    padding: 12px;
    border: 1px solid #ccc;
    text-align: left;
    background-color: #f4f4f4; /* Cor de fundo do cabeçalho */
`;

export const Td = styled.td`
    padding: 12px;
    border: 1px solid #ccc;

    button{
      background-color: transparent;
      border:none;
      display: inline;
      transition: all ease-in-out .2s;

      &:hover{
         opacity: .7;
      }
    
      &:active{
         opacity: .5;
      }
      

    }
`;

export const TrEven = styled.tr`
    background-color: #f9f9f9; /* Cor de fundo das linhas pares */
`;
