import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color:white;
  border-radius: 5px; 
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  font-size:14px;
  transition: 0.4s background ease-in;
  min-width:220px;

  &:hover{
    background-color: white;
    color:black;
    border:1px solid black;
    transition: 0.3s background ease-in;
  }

`;

export const OutlinedButton = styled(Button)`
  background-color: white;
  color:black;
  border: 1px solid black;
  padding: 10px;

  &:hover{
    background-color: black;
    color:white;
    border:1px solid black;
  }

`;