import styled, {css } from "styled-components";

export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const HeadTabla= styled.div`

  
  padding: 40px;
background-color: #E8F8F5 ;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`



export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 30px;
`

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.V ? CenterV : "")}
  ${props => (props.H ? CenterH : "")}
`;