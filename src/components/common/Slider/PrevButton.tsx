import { useSlideIndexContext } from '@components/common/Slider/context/SlideIndexContext';
import { useSliderInfoContext } from '@components/common/Slider/context/SliderInfoContext';
import throttle from '@utils/eventDelay';

const PrevButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { slidesToScroll, speed },
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

  return (
    <button
      type="button"
      onClick={handlePrevButtonClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default PrevButton;
