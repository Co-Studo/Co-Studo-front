import { ReactElement, useReducer } from 'react';

import {
  reducer,
  SlideIndexContext,
} from '@components/common/Slider/context/SlideIndexContext';
import {
  SliderOptions,
  SliderInfoContext,
} from '@components/common/Slider/context/SliderInfoContext';

type SliderProviderProps = {
  options: SliderOptions;
  SlideLength: number;
  children: ReactElement | ReactElement[];
};

const SliderProvider = ({
  options,
  SlideLength,
  children,
}: SliderProviderProps) => {
  const SliderInfo = {
    options,
    SlideLength,
  };

  const SlideIndexReducer = useReducer(reducer, {
    currentIndex: options.initialSlide,
  });

  return (
    <SliderInfoContext.Provider value={SliderInfo}>
      <SlideIndexContext.Provider value={SlideIndexReducer}>
        {children}
      </SlideIndexContext.Provider>
    </SliderInfoContext.Provider>
  );
};

export default SliderProvider;
