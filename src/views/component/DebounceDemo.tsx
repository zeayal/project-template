// 防抖和节流
import { useDebounce } from 'ahooks';
import { Button } from 'antd';

function debounce(func: () => any, time = 300) {
  let timer: any;
  return function (...args: any) {
    clearTimeout(timer);
    console.log('this', this);
    console.log('args', args);
    timer = setTimeout(() => func.apply(this, args), time);
  };
}

const DebounceDemo = () => {
  const saveInput = () => console.log('save data');
  const processChange = useDebounce(() => saveInput, {
    wait: 1000,
  }); //debounce(saveInput, 1000);

  return (
    <div>
      <Button onClick={() => processChange()}>点击防抖1000ms</Button>
    </div>
  );
};

export default DebounceDemo;
