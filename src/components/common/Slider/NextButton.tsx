import { useSlideIndexContext } from '@components/common/Slider/context/SlideIndexContext';
import { useSliderInfoContext } from '@components/common/Slider/context/SliderInfoContext';
import throttle from '@utils/eventDelay';

const NextButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { slidesToShow, slidesToScroll, speed },
    SlideLength,
  } = useSliderInfoContext();
  const limitIndex = SlideLength - slidesToShow;
  const disabled = currentIndex >= limitIndex;

  const handleNextButtonClick = () => {
    if (disabled) return;

    throttle(() => {
      const increasedIndex =
        currentIndex + slidesToScroll < limitIndex
          ? slidesToScroll
          : limitIndex - currentIndex;

      dispatch({
        type: 'INCREASE_CURRENT_INDEX',
        slidesToScroll: increasedIndex,
      });
    }, speed);
  };

  return (
    <button
      type="button"
      onClick={handleNextButtonClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default NextButton;
