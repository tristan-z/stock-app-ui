import React from "react";
import * as S from "./styles"

function Loser(props) {
  const data = props.data;
  return (
    <S.LoserContainer>
      {data.symbol}
      {data.name}
      {data.price} 
    </S.LoserContainer>
  );
}

export { Loser };
