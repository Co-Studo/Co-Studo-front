import {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  ReactNode,
  Children,
} from 'react';
import { css } from 'styled-components';

import throttle from '@utils/eventDelay';

type ChildrenType = ReactNode | ReactNode[];

type SliderOptions = {
  slidesToShow: number;
  slidesToScroll: number;
  slidesMargin: string;
  arrows: boolean;
  speed: number;
  initialSlide: number;
};

type SliderInfoContextValues = {
  options: SliderOptions;
  slidesLength: number;
};

const SliderInfoContext = createContext<SliderInfoContextValues | null>(null);

const useSliderInfoContext = () => {
  const context = useContext(SliderInfoContext);

  if (!context)
    throw new Error(
      'useSliderInfoContext should be used within SliderInfoContext.Provider',
    );

  return context;
};

type SliderItemIndexContextValues = {
  currentIndex: number;
};

type SliderItemIndexAction = {
  type: 'INCREASE_CURRENT_INDEX' | 'DECREASE_CURRENT_INDEX';
  slidesToScroll: number;
};

const reducer = (
  { currentIndex }: SliderItemIndexContextValues,
  action: SliderItemIndexAction,
) => {
  const { type, slidesToScroll } = action;

  switch (type) {
    case 'INCREASE_CURRENT_INDEX':
      return { currentIndex: currentIndex + slidesToScroll };
    case 'DECREASE_CURRENT_INDEX':
      return { currentIndex: currentIndex - slidesToScroll };
    default:
      throw new Error(`There is no type '${type}'. Please check the type.`);
  }
};

const SliderItemIndexContext =
  createContext<
    [SliderItemIndexContextValues, Dispatch<SliderItemIndexAction>] | null
  >(null);

const useSliderItemIndexContext = () => {
  const context = useContext(SliderItemIndexContext);

  if (!context)
    throw new Error(
      'useSliderItemIndexContext should be used within SliderItemIndexContext.Provider',
    );

  return context;
};

type SliderProviderProps = {
  options: SliderOptions;
  slidesLength: number;
  children: ChildrenType;
};

const SliderProvider = ({
  options,
  slidesLength,
  children,
}: SliderProviderProps) => {
  const sliderInfo = {
    options,
    slidesLength,
  };

  const sliderItemIndexReducer = useReducer(reducer, {
    currentIndex: options.initialSlide,
  });

  return (
    <SliderInfoContext.Provider value={sliderInfo}>
      <SliderItemIndexContext.Provider value={sliderItemIndexReducer}>
        {children}
      </SliderItemIndexContext.Provider>
    </SliderInfoContext.Provider>
  );
};

type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ChildrenType;
};

const defaultSliderOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
  arrows: true,
  speed: 1000,
  initialSlide: 0,
};

const Slider = ({ options = defaultSliderOptions, children }: SliderProps) => {
  const sliderOptions = { ...defaultSliderOptions, ...options };

  const getSlidesLength = () => {
    const sliderList = Children.toArray(children).find((child: ReactNode) => {
      if (
        child?.type.name === 'SliderList' ||
        child?.type.target.name === 'SliderList'
      )
        return true;
      return false;
    });
    const slidesLength = sliderList ? sliderList.props.children.length : 0;

    return slidesLength;
  };

  return (
    <SliderProvider options={sliderOptions} slidesLength={getSlidesLength()}>
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

const SliderList = ({ children, ...restProps }) => {
  const {
    options: { slidesMargin },
  } = useSliderInfoContext();

  return (
    <ul
      css={css`
        display: flex;
        gap: ${slidesMargin};
      `}
      {...restProps}
    >
      {children}
    </ul>
  );
};

const SliderItem = ({ children, ...restProps }) => {
  const [{ currentIndex }] = useSliderItemIndexContext();
  const {
    options: { slidesToShow, slidesMargin, speed },
  } = useSliderInfoContext();

  return (
    <li
      css={css`
        flex: 0 0 auto;
        width: calc(
          100% / ${slidesToShow} -
            (${slidesMargin} * (${slidesToShow - 1}) / ${slidesToShow})
        );
        transform: translate(
          calc((100% + ${slidesMargin}) * ${-currentIndex}),
          0
        );
        transition: transform calc(${speed}s / 1000) ease-in-out;
      `}
      {...restProps}
    >
      {children}
    </li>
  );
};

const SliderPrevButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSliderItemIndexContext();
  const {
    options: { slidesToScroll, arrows, speed },
  } = useSliderInfoContext();
  const limitIndex = 0;
  const disabled = currentIndex <= limitIndex;

  const handlePrevButtonClick = () => {
    if (disabled) return;

    const decreasedIndex =
      currentIndex - slidesToScroll > limitIndex
        ? slidesToScroll
        : currentIndex - limitIndex;

    throttle(
      () =>
        dispatch({
          type: 'DECREASE_CURRENT_INDEX',
          slidesToScroll: decreasedIndex,
        }),
      speed,
    );
  };

  return arrows ? (
    <button
      type="button"
      onClick={handlePrevButtonClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  ) : null;
};

const SliderNextButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSliderItemIndexContext();
  const {
    options: { slidesToShow, slidesToScroll, arrows, speed },
    slidesLength,
  } = useSliderInfoContext();
  const limitIndex = slidesLength - slidesToShow;
  const disabled = currentIndex >= limitIndex;

  const handleNextButtonClick = () => {
    if (disabled) return;

    const increasedIndex =
      currentIndex + slidesToScroll < limitIndex
        ? slidesToScroll
        : limitIndex - currentIndex;

    throttle(
      () =>
        dispatch({
          type: 'INCREASE_CURRENT_INDEX',
          slidesToScroll: increasedIndex,
        }),
      speed,
    );
  };

  return arrows ? (
    <button
      type="button"
      onClick={handleNextButtonClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  ) : null;
};

Slider.List = SliderList;
Slider.Item = SliderItem;
Slider.PrevButton = SliderPrevButton;
Slider.NextButton = SliderNextButton;

export default Slider;
