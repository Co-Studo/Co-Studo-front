export const 초 = (time: number) => time * 1000;

export const 분 = (time: number) => 60 * 초(time);

export const 시간 = (time: number) => 60 * 분(time);

export const 만 = (number: number) => 10_000 * number;

export const 억 = (number: number) => 10 ** 9 * number;
