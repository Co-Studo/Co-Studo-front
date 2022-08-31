import NotoSansKR from './noto-sans-kr-regular.woff2';
import Roboto from './roboto-regular.woff2';

const fonts = `
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: url(${Roboto}) format('woff2');
  }
  @font-face {
    font-family: NotoSansKR;
    font-style: normal;
    font-weight: 400;
    src: url(${NotoSansKR}) format('woff2');
  }
`;

export default fonts;
