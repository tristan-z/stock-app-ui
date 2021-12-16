import React from "react";
import * as S from "./styles"

function News(props) {
    const data = props.data;
    return (
        <S.NewsContainer>
            <S.Title href={data.link} target="_blank">{data.title}</S.Title>
            <S.Description>{data.description}</S.Description>
            <S.AuthorDate>Author: {data.author} {data.date}</S.AuthorDate>
        </S.NewsContainer>
    );
  }

  export { News };