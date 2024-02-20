import React from 'react';
import 'animate.css/animate.min.css';
import ScrollableComponent from './ScrollableComponent';
import { Button, Flex } from 'antd';
import BaseCard from './BaseCard';
import { users } from './nameMap';

function Setting() {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return (
      <div>

        <Button onClick={() => setIsVisible(true)}>开始</Button>

        <ScrollableComponent/>

        {
            isVisible && <div style={{ position: 'absolute', top: 120 }}>
              <Flex justify={'space-evenly'} align={'center'} wrap={'wrap'} gap={'large'}>
                {
                  [5, 1, 2, 3]?.map(i => <div
                      className="animate__animated animate__rollIn" key={i}
                  >
                    <BaseCard name={users[i]}/>
                  </div>)
                }
              </Flex>
            </div>
        }

      </div>
  );
}

export default Setting;