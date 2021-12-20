import React from "react";
import * as S from "./styles";
import { GetNewsResponse } from "../../../services/news/types"

type NewsProps = {
    data: GetNewsResponse
}

function News(props: NewsProps) {
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