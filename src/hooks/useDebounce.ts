type Options = {
  wait: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

const defaultOptions = {
  wait: 500,
  leading: false,
  trailing: false,
};

const useDebounce = (callback: any, options: Options = defaultOptions) => {
  let timer = null;

  timer = setTimeout(() => {}, options.wait);

  return callback;
};

export default useDebounce;
