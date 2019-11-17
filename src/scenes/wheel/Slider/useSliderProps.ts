import React, { useState, useRef } from "react";
import { debounce } from "lodash";
import { slideEvent } from "./analytics";
type UseSliderProps = {
  label: string;
  min: number;
  max: number;
};

const useSliderProps = ({ label, min, max }: UseSliderProps) => {
  const [value, setValue] = useState((min + max) / 2);
  const debouncedAnalytics = useRef(debounce(() => slideEvent(label), 1000));

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedAnalytics.current();

    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const sliderProps = { label, onChange, value, min, max };
  return sliderProps;
};

export default useSliderProps;
