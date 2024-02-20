import React from 'react';
import Packet from './Packet';
import { Space } from 'antd';
import background from '../image/background.jpg';

function PacketWall() {


  const [list, setList] = React.useState({
    1: false,
    2: false,
    3: false,
    9: false,
    10: false,
    11: false,
    16: false,
  });

  return (
      <div
          style={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
      >

        <div
            style={{
              width: '100%',
              textAlign: 'center',
              paddingBottom: 30,
            }}
        >
          <div
              style={{
                fontSize: 60,
                paddingTop: 20,
                fontWeight: 'bold',
                color: '#f3cd09',
                fontFamily: '隶书',
              }}
          >
            2024 企业年会抽奖
          </div>
        </div>

        <div style={{ width: '90%', marginLeft: '5%' }}>
          <Space size={'small'} wrap>
            {
              ['1', '2', '3', '9', '10', '11', '16']?.map(u => <Packet
                  onClick={v => setList({ ...list, [v]: true })}
                  isOpen={list[u]}
                  size={'large'}
                  name={u}
                  type={'ONE'}
                  key={u}
              />)
            }
          </Space>
        </div>

      </div>
  );
}

export default PacketWall;