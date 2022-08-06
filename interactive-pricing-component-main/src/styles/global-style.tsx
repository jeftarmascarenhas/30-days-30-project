import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body {
  font-size: 10px;
}
 body {
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
 }
`;
