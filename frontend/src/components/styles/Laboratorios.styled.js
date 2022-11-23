import styled from "styled-components"
import { createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #ebfbff,#ebfbff);
    height: 100%;
    margin: 0;
    color: #555;
    
  }
`;
export const HeadTabla= styled.div`

  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: #E8F8F5  ;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 30px;
  text-align: center;
`

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  p{
    display: inline;
    text-align: center;
        font-size: 11px;
   
  }
  td,
  th {
    border: none;
    text-align: center;
    padding: 10px 20px;

  }
 

  td {
    padding: 10px 20px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: white;
    }
    :hover {
      background-color: lightcyan;
    }
  } tbody tr>tr {
    :nth-of-type(odd) {
      background-color: white;
    }
    :hover {
      background-color: lightcyan;
    }
  }
  thead > tr {
    background-color: aqua;
  }
  tfoot {
  
    
   
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
    
  }
`;