import { useBoolean } from 'ahooks';
import { message, Button } from 'antd';
import { useMount } from 'hooks';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello world</div>;
};

const UseMountDemo = () => {
  const [state, { toggle }] = useBoolean(false);
  return (
    <>
      <Button onClick={toggle}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </>
  );
};

export default UseMountDemo;
