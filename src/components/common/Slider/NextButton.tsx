import { useSlideIndexContext } from '@components/common/Slider/context/SlideIndexContext';

import { useSliderInfoContext } from '@components/common/Slider/context/SliderInfoContext';
import throttle from '@utils/eventDelay';

const NextButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { slidesToShow, slidesToScroll, arrows, speed },
    SlideLength,
  } = useSliderInfoContext();
  const limitIndex = SlideLength - slidesToShow;
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

export default NextButton;
