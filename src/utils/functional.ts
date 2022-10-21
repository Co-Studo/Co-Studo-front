const go = (v, ...funcs) => funcs.reduce((res, func) => func(res), v);

const pipe =
  (...funcs) =>
  (v) =>
    go(v, ...funcs);

const all =
  (...funcs) =>
  (t) =>
    funcs.every((f) => f(t));

export { go, pipe, all };
