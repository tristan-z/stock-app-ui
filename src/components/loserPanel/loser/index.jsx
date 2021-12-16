import React from "react";
import * as S from "./styles";
import { StyledNumber } from "../../common/styled-number/StyledNumber";

function Loser(props) {
  const data = props.data;
  return (
    <S.LoserContainer>
      {data.symbol}
      {data.name}
      <StyledNumber value={data.price} prefix="$" />
      <StyledNumber value={data.change} postfix="%" showSign showColor />
    </S.LoserContainer>
  );
}

export { Loser };
