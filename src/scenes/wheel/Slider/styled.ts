import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  grid-template-columns: 30px auto 30px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "label label label"
    "min slider max";
`;

export const Text = styled.p``;

export const MaxText = styled(Text)``;
export const MinText = styled(Text)``;

type ValueTextProps = {
  value: number;
  max: number;
};

const textWidth = 20;

export const ValueTextWrapper = styled.div`
  left: 5px;
  right: 5px;
  position: relative;
`;
export const ValueText = styled.p<ValueTextProps>`
  left: ${({ value, max }: ValueTextProps) => {
    const proportion = (value / max) * 100;
    const textWidthAdjustment = textWidth / 2;
    return `${proportion - textWidthAdjustment}%`;
  }};
  position: absolute;
  width: ${textWidth}%;
  text-align: center;
`;

export const Label = styled.label`
  grid-area: label;
  justify-self: left;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
