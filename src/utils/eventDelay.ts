const throttle = (() => {
  let waiting = false;

  return (callback: () => void, limit = 100) => {
    if (waiting) return;

    callback();
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
  };
})();

export default throttle;
