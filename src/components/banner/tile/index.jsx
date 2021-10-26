import React from "react";
import * as S from "./styles"

function Tile(props) {
  const data = props.data;
  return (
    <S.TileContainer>
      <S.Symbol>{data.symbol}</S.Symbol>
      <S.Name>{data.name}</S.Name>
      <S.PriceChange>{data.price}  {data.change}</S.PriceChange>
    </S.TileContainer>
  );
}

export { Tile };
