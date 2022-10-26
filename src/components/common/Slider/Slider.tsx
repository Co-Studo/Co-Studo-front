import { ReactElement, useEffect } from 'react';
import { css } from 'styled-components';

import { SliderOptions } from '@components/common/Slider/context/SliderInfoContext';
import SliderProvider from '@components/common/Slider/context/SliderProvider';
import { isNaturalNumber, validate } from '@utils/validation';

type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ReactElement | ReactElement[];
};

const defaultOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
  speed: 1000,
  initialSlide: 0,
};

const Slider = ({ options = defaultOptions, children }: SliderProps) => {
  const sliderOptions = { ...defaultOptions, ...options };

  const validateOptions = () => {
    const optionsToNeedCheck = {
      slidesToShow: options.slidesToShow || 0,
      slidesToScroll: options.slidesToScroll || 0,
      speed: options.speed || 0,
      initialSlide: options.initialSlide || 0,
    };

    validate<number>(optionsToNeedCheck, [isNaturalNumber]);
  };

  useEffect(() => validateOptions(), [options]);

  const getSlideLength = () => {
    const Children = Array.isArray(children) ? children : [children];
    const slideList = Children.find((child) => {
      if (typeof child.type === 'string') return false;
      return child?.type.name === 'SlideList';
    });
    const SlideLength = slideList ? slideList.props.children.length : 0;

    return SlideLength;
  };

  return (
    <SliderProvider options={sliderOptions} SlideLength={getSlideLength()}>
      <div
        css={css`
          position: relative;
          width: 100%;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </SliderProvider>
  );
};

export default Slider;
