export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: number | undefined;

  return function executedFunction(this: any) {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
