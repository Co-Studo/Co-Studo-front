import { ReactElement } from 'react';
import { css } from 'styled-components';

import { SliderOptions } from '@components/common/Slider/context/SliderInfoContext';
import SliderProvider from '@components/common/Slider/context/SliderProvider';
import NextButton from '@components/common/Slider/NextButton';
import PrevButton from '@components/common/Slider/PrevButton';
import Slide from '@components/common/Slider/Slide';
import SlideList from '@components/common/Slider/SlideList';

type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ReactElement | ReactElement[];
};

const defaultOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
  arrows: true,
  speed: 1000,
  initialSlide: 0,
};

const Slider = ({ options = defaultOptions, children }: SliderProps) => {
  const sliderOptions = { ...defaultOptions, ...options };

  const getSlideLength = () => {
    const Children = Array.isArray(children) ? children : [children];
    const slideList = Children.find((child) => {
      if (
        child?.type.name === 'SlideList' ||
        child?.type.target.name === 'SlideList'
      )
        return true;
      return false;
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

Slider.List = SlideList;
Slider.Item = Slide;
Slider.PrevButton = PrevButton;
Slider.NextButton = NextButton;

export default Slider;
