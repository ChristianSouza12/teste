import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;

  h1 {
    margin-bottom: 40px;
    color: #3498db;
    font-size: 2.5rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  
`;

export const LoginItens = styled.div`
 
  
  text-align: center;
  -webkit-box-shadow: 1px 0px 17px 3px rgba(0,0,0,0.13);
-moz-box-shadow: 1px 0px 17px 3px rgba(0,0,0,0.13);
box-shadow: 1px 0px 17px 3px rgba(0,0,0,0.13);
  padding: 5%;


  p {
    font-weight: bold;
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #3498db;
    }
  }

  button {
    margin-top: 20px;
    padding: 12px;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #2980b9;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: #1f6391;
    }
  }
`;
