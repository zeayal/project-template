/**
 * title: Basic usage
 * desc: The function is called right after the component is mounted
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法
 */

import useMount from '../index';
import {} from 'react';
import { Button, message } from 'antd';
import { useToggle } from 'ahooks';

const MyComponent = () => {
  useMount(() => {
    message.info('Mount');
  });
  return <div>Hello world!</div>;
};

const Demo = () => {
  const [state, { toggle }] = useToggle(false);

  return (
    <>
      <Button onClick={toggle}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </>
  );
};

export default Demo;
