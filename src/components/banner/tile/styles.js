import styled from "styled-components";

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 5px;
  height: 45px;
  font-size: 1.2rem;
  padding: 10px;
  border-style: solid;
  border-color: #ccc;
  border-width: 2px;
  background-color: #f2f2f2;
  font-family: "Georgia";
`;

export const Symbol = styled.p`
  margin: 1px;
  padding: 1px;
`;

export const Name = styled.p`
  font-size: 0.6rem;
  color: #666;
  padding: 1px;
`;

export const PriceChange = styled.p`
  font-size: 0.75rem;
  margin: 1px;
  padding: 1px;
`;
