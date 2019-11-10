import React from "react";

type SliderProps = {
  label: string;
  max: number;
  min: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = (props: SliderProps) => {
  const { label, value, min, max, onChange } = props;
  return (
    <label>
      {label}
      <input
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        type={"range"}
      ></input>
    </label>
  );
};

export default Slider;
