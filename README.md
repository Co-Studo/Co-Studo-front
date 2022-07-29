# React TS Boilerplate

### 절대경로 설정법

tsconfig.path.json 에서 수정하면 jest, webpack 모두 설정됨

### Webpack

- use babel-loader
- polyfill - use core-js-pure by @babel/plugin-transform-runtime
- webpack.common.js 내부의 API_URL 을 수정하여 사용
  - 프로젝트 코드 내부에서는 `__API_END_POINT__` 로 사용

### Test

- jest / testing-library

### ESLint

- Component 관련 무조건 arrow function 만 사용하도록 설정
- 해제하고 싶다면 rules 에서 `react/function-component-definition` 부분 수정
