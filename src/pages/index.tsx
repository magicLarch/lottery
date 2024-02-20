import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Flex, Space } from 'antd';

import background from '../image/background.jpg';
import fu01 from '../image/01.png';
import fu02 from '../image/02.png';
import fu03 from '../image/03.png';
import fu04 from '../image/04.png';
import year from '../image/year.png';

function Index() {

  const navigate = useNavigate();

  const images = {
    1: fu02,
    2: fu02,
    3: fu01,
    4: fu03,
    5: fu04,
  };

  return (
      <div
          style={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            width: '100%',
            overflow: 'hidden',
          }}
      >

        <div style={{ width: '100%', textAlign: 'center', paddingTop: 60 }}>
          <Space>
            <Avatar src={year} style={{ width: 200, height: 200 }} shape={'square'}/>
            <span
                style={{
                  fontSize: 50,
                  color: '#f3cd09',
                  letterSpacing: 5,
                }}
            >
            年度企业年会抽奖活动
          </span>
          </Space>

        </div>

        <div
            style={{
              width: '100%',
              textAlign: 'center',
              paddingBottom: 60,
            }}
        >
          <span style={{ fontFamily: '隶书', fontSize: 160, color: '#f3cd09' }}>
            幸运大抽奖
          </span>
        </div>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <div
              style={{
                height: 60,
                width: 300,
                fontSize: 36,
                lineHeight: '60px',
                borderRadius: 30,
                backgroundColor: '#f3cd09',
                color: '#D31B19',
                margin: 'auto',
                cursor: 'pointer',
              }}

              // 跳转到抽奖页
              onClick={() => navigate('/lottery')}
          >
            开启活动
          </div>
        </div>
        <br/>

        <Flex justify={'center'} gap={'large'}>
          {
            [1, 2, 3, 4, 5]?.map(i => <Avatar
                key={i}
                src={images[i]}
            />)
          }
        </Flex>


      </div>
  );
}

export default Index;