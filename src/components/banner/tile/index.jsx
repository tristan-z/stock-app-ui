import React from "react";
import * as S from "./styles";
import { StyledNumber } from "../../common/styled-number/StyledNumber";

function Tile(props) {
  const data = props.data;
  return (
    <S.TileContainer>
      <S.Symbol>{data.symbol}</S.Symbol>
      <S.Name>{data.name}</S.Name>
      <S.PriceChange>
        {data.price} <StyledNumber value={data.change} postfix="%" showColor />
      </S.PriceChange>
    </S.TileContainer>
  );
}

export { Tile };
