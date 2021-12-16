import styled from "styled-components";

export const Number = styled.div<{$color?: string;}>`
  color: ${(props) => props.$color};
`;
