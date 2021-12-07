import { FC } from 'react';
import RequestDemo from './component/RequestDemo';
import DebounceDemo from './component/DebounceDemo';
import UseMountDemo from './component/UseMountDemo';

const Index: FC = () => {
  return (
    <div className="m-20px">
      首页代码
      <div>
        <RequestDemo />
        <DebounceDemo />
        <hr />
        <UseMountDemo />
      </div>
    </div>
  );
};

export default Index;
