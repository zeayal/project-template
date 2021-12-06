import { useRequest } from 'ahooks';
import { Button } from 'antd';
import Mock from 'mockjs';

function getUserName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

const RequestDemo = () => {
  const { loading, data, error, run } = useRequest(getUserName, {
    manual: true,
  });

  if (error) {
    return <div>fail to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h3>RequestDemo: {data}</h3>
      <Button onClick={run}>run</Button>
    </div>
  );
};

export default RequestDemo;
