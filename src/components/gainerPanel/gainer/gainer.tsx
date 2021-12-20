import React from "react";
import * as S from "./styles";
import { StyledNumber } from "../../common/styled-number/StyledNumber";
import { GetGainerResponse } from "../../../services/gainer/types"

type GainerProps = {
  data: GetGainerResponse
}

function Gainer(props: GainerProps) {
  const data = props.data;
  return (
    <S.GainerContainer>
      {data.symbol}
      {data.name}
      <StyledNumber value={data.price} prefix="$" />
      <StyledNumber value={data.change} postfix="%" showSign showColor />
    </S.GainerContainer>
  );
}

export { Gainer };
