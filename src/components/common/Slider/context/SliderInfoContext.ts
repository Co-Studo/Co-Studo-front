import { createContext, useContext } from 'react';

export type SliderOptions = {
  slidesToShow: number;
  slidesToScroll: number;
  slidesMargin: string;
  arrows: boolean;
  speed: number;
  initialSlide: number;
};

type SliderInfoState = {
  options: SliderOptions;
  SlideLength: number;
};

export const SliderInfoContext = createContext<SliderInfoState | null>(null);

export const useSliderInfoContext = () => {
  const context = useContext(SliderInfoContext);

  if (!context)
    throw new Error(
      'useSliderInfoContext should be used within SliderInfoContext.Provider',
    );

  return context;
};
