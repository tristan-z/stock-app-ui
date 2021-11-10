import React from "react";
import * as S from "./styles"

function Gainer(props) {
  const data = props.data;
  return (
    <S.GainerContainer>
      <div>
        {data.stock}
      </div>
    </S.GainerContainer>
  );
}

export { Gainer };
