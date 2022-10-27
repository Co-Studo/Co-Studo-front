/* eslint-disable react/no-array-index-key */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from '.';

export default {
  title: 'common/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const data = new Array(7).fill('slide');

export const Default: ComponentStory<typeof Slider> = () => (
  <Slider
    options={{
      slidesToShow: 4,
      slidesToScroll: 3,
      speed: 500,
      slidesMargin: '10px',
    }}
  >
    <Slider.List>
      {data.map((item, index) => (
        <Slider.Item
          key={index}
          css={{
            height: '100px',
            border: '1px solid #000',
            textAlign: 'center',
          }}
        >{`${item}_${index}`}</Slider.Item>
      ))}
    </Slider.List>
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '30px',
      }}
    >
      <Slider.PrevButton
        css={{ width: '50px', height: '50px', border: '1px solid #000' }}
      >
        &lt;
      </Slider.PrevButton>
      <Slider.NextButton
        css={{ width: '50px', height: '50px', border: '1px solid #000' }}
      >
        &gt;
      </Slider.NextButton>
    </div>
  </Slider>
);
