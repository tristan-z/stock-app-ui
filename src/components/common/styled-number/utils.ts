export function renderSign(value: number, showSign?: boolean) {
    if (value > 0 && showSign) {
      return "+";
    }
  }
  
export function getColor(value: number, showColor?: boolean) {
    if (value > 0 && showColor) {
      return "green";
    } else if (value < 0 && showColor) {
      return "red";
    } else if (showColor) {
      return "grey";
    }
  }