import React, { useState } from "react";

type UseSlider = {
  label: string;
  min: number;
  max: number;
};

const useSlider = ({ label, min, max }: UseSlider) => {
  const [value, setValue] = useState((min + max) / 2);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const sliderProps = { label, onChange, value, min, max };
  return sliderProps;
};

export default useSlider;
