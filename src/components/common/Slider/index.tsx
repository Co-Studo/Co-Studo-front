import NextButton from '@components/common/Slider/NextButton';
import PrevButton from '@components/common/Slider/PrevButton';
import Slide from '@components/common/Slider/Slide';
import SlideList from '@components/common/Slider/SlideList';
import SliderRoot from '@components/common/Slider/Slider';

const Slider = Object.assign(SliderRoot, {
  List: SlideList,
  Item: Slide,
  PrevButton,
  NextButton,
});

export default Slider;
