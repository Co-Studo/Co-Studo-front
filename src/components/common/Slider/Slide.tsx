import { useSlideIndexContext } from '@components/common/Slider/context/SlideIndexContext';
import { css } from 'styled-components';

import { useSliderInfoContext } from '@components/common/Slider/context/SliderInfoContext';

const Slide = ({ children, ...restProps }) => {
  const [{ currentIndex }] = useSlideIndexContext();
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

export default Slide;