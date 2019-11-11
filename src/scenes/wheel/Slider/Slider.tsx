import React from "react";
import * as SC from "./styled";

type SliderProps = {
  label: string;
  max: number;
  min: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = (props: SliderProps) => {
  const { label, value, min, max, onChange } = props;

  const inputId = label;
  return (
    <SC.Wrapper>
      <SC.Label htmlFor={inputId}>{label}</SC.Label>
      <SC.Text>{min}</SC.Text>
      <SC.InputWrapper>
        <SC.ValueTextWrapper>
          <SC.ValueText max={max} value={value}>
            {value}
          </SC.ValueText>
        </SC.ValueTextWrapper>
        <SC.Input
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          type={"range"}
          id={inputId}
        />
      </SC.InputWrapper>
      <SC.Text>{max}</SC.Text>
    </SC.Wrapper>
  );
};

export default Slider;
