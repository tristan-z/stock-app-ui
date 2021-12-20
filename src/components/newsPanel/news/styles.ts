import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffccc;
  border: 2px solid black;
  border-style: solid;
  border-color: #ccc;
  border-width: 2px;
  background-color: #f2f2f2;
  font-family: Georgia;
  font-size: 1.1rem;
  height: auto;
  width: 50vw;
  padding: 20px;
`;

export const Title = styled.a`
  text-align: left;
  font-weight: bold;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 0.75rem;
`;

export const AuthorDate = styled.p`
  text-align: left;
  font-size: 0.7rem;
`;

export const Link = styled.a``;
