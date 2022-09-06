export const second = (time: number) => time * 1000;

export const minute = (time: number) => 60 * second(time);

export const hour = (time: number) => 60 * minute(time);

export const 만 = (number: number) => 10_000 * number;

export const 억 = (number: number) => 10 ** 9 * number;
