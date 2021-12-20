import React from "react";
import * as S from "./styles";
import { StyledNumber } from "../../common/styled-number/StyledNumber";
import { GetLoserResponse } from "../../../services/loser/types"

type LoserProps = {
  data: GetLoserResponse
}

function Loser(props: LoserProps ) {
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
