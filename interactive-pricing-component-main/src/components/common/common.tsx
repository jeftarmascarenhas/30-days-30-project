import styled, { css } from "styled-components";

const cardShareStyle = css`
  padding: 3.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 0.8rem;
`;

export const CardHeader = styled.div`
  ${cardShareStyle}
`;

export const CardBody = styled.div`
  ${cardShareStyle}
`;

export const Divider = styled.hr``;
