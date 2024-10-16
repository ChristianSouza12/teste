import styled from "styled-components";

import { IoClose, IoCheckmark } from "react-icons/io5";

export const Overlay = styled.div`
    background-color: rgba(242,243,245,0.9);
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

`
export const Container = styled.div`

background-color: white;
width: 100%;
height: 100%;
max-width: 400px;
max-height: 500px;
padding:32px 48px;
box-shadow: 0 0 10px rgba(0,0,0,0.2);
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

`
export const Header = styled.header`


display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 40px;
color:#1e1e1e;
background-color: transparent;
padding:0;
font-weight: 700;
font-size: 20px;

 button{
    max-height: 25px;
    background:none;
    border: none;
    cursor: pointer;
}

`
export const FormContainer = styled.form`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
gap:15px;

`
export const FormMain = styled.main`
margin: auto 0;
display: flex;
flex-direction: column;
gap:20px;


`
export const InputGroup = styled.div`

display: flex;
flex-direction: column;
gap:1px;

label{
    font-size: 18px;
    
}

input,select{
    border:none;
    color:#1e1e1e;
    background-color: #f5f5f5;
    height: 30px;
    border-radius: 5px;
    width: 100%;
    padding-left: 10px ;
}

`
export const Footer = styled.footer`

display: flex;
justify-content: center;
button{
    align-self: center;
    background-color: #b4ecb4;
    border-radius: 6px;
    width: 150px;
    height: 35px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    border:none;

    &:hover{
        opacity: .5;
    }
}

`

export const CloseIcon = styled(IoClose)`
height: 25px;
width: 25px;


`
export const CheckIcon = styled(IoCheckmark)`

color:white;
width: 2.5em;
height: 2.5em;

`