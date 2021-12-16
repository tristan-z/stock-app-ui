import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { renderSign, getColor } from "./utils";

// functional components that accepts a value, prefix, and a postfix, showSign
// color code the value, negative-red, positive-green, 0-black

// TODO: abstract to utils file and add tests

type StyledNumberProps = {
  value: number, prefix: string, postfix: string, showSign: boolean, showColor: boolean 
}

export function StyledNumber({ value, prefix, postfix, showSign, showColor }: StyledNumberProps) {
  return (
    <S.Number $color={getColor(value, showColor)}>
      {renderSign(value, showSign)}
      {prefix}
      {value}
      {postfix}
    </S.Number>
  );
}
