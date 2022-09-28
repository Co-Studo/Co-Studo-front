import {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import { css } from 'styled-components';

type SliderOptions = {
  slidesToShow: number;
  slidesToScroll: number;
  slidesMargin: string;
};

const defaultSliderOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
};

type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ReactNode;
};

type SliderContextValues = {
  options: SliderOptions;
  currentIndex: number;
  slideLength: number;
};

type SliderAction = {
  type: 'UPDATE_CURRENT_INDEX' | 'SET_SLIDES_LENGTH';
  payload: Partial<Omit<SliderContextValues, 'options'>>;
};

const reducer = (state: SliderContextValues, action: SliderAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CURRENT_INDEX':
      return { ...state, currentIndex: payload.currentIndex };
    case 'SET_SLIDES_LENGTH':
      return { ...state, slideLength: payload.slideLength };
    default:
      return state;
  }
};

const initSliderState = {
  options: defaultSliderOptions,
  slideLength: 0,
  currentIndex: 0,
};

const SliderContext = createContext<
  [SliderContextValues, Dispatch<SliderAction>]
>([initSliderState, () => null]);

const useSliderContext = () => {
  const context = useContext(SliderContext);

  if (context === undefined)
    throw new Error(
      'useSliderContext should be used within SliderContext.Provider',
    );

  return context;
};

const Slider = ({ options = defaultSliderOptions, children }: SliderProps) => {
  const sliderOptions = { ...defaultSliderOptions, ...options };
  const initState = {
    options: sliderOptions,
    currentIndex: 0,
    slideLength: 0,
  };
  const sliderReducer = useReducer(reducer, initState);

  return (
    <SliderContext.Provider value={sliderReducer}>
      <div
        css={css`
          position: relative;
          width: 100%;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </SliderContext.Provider>
  );
};

const SliderList = ({ children, ...props }) => {
  const [{ options }, dispatch] = useSliderContext();

  useEffect(() => {
    dispatch({
      type: 'SET_SLIDES_LENGTH',
      payload: { slideLength: children.length },
    });
  }, [dispatch, children.length]);

  return (
    <ul
      css={css`
        display: flex;
        gap: ${options.slidesMargin};
      `}
      {...props}
    >
      {children}
    </ul>
  );
};

const SliderItem = ({ children, ...props }) => {
  const [{ options, currentIndex }] = useSliderContext();
  const { slidesToShow, slidesMargin } = options;

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
        transition: transform 1s ease-in-out;
      `}
      {...props}
    >
      {children}
    </li>
  );
};

const setCurrentIndex = (
  newIndex: number,
  dispatch: Dispatch<SliderAction>,
) => {
  dispatch({
    type: 'UPDATE_CURRENT_INDEX',
    payload: { currentIndex: newIndex },
  });
};

const SliderPrevButton = ({ children, ...props }) => {
  const [{ options, currentIndex }, dispatch] = useSliderContext();
  const { slidesToScroll } = options;
  const limitIndex = 0;
  const disabled = currentIndex <= limitIndex;

  const slideToPrev = () => {
    if (disabled) return;

    const newIndex = currentIndex - slidesToScroll;

    setCurrentIndex(newIndex, dispatch);
  };

  const handlePrevButtonClick = () => {
    slideToPrev();
  };

  return (
    <button
      type="button"
      onClick={handlePrevButtonClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const SliderNextButton = ({ children, ...props }) => {
  const [{ options, currentIndex, slideLength }, dispatch] = useSliderContext();
  const { slidesToShow, slidesToScroll } = options;
  const limitIndex = slideLength - slidesToShow;
  const disabled = currentIndex >= limitIndex;

  const slideToNext = () => {
    if (disabled) return;

    const newIndex = currentIndex + slidesToScroll;

    setCurrentIndex(newIndex, dispatch);
  };

  const handleNextButtonClick = () => {
    slideToNext();
  };

  return (
    <button
      type="button"
      onClick={handleNextButtonClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Slider.List = SliderList;
Slider.Item = SliderItem;
Slider.PrevButton = SliderPrevButton;
Slider.NextButton = SliderNextButton;

export default Slider;
