import React from 'react';
import Marquee from 'react-fast-marquee';
import { Space } from 'antd';
import { words } from './nameMap';
import card from '../image/card.png';

interface Interface {
  speed?: number,
}

function ScrollableComponent({ speed = 50 }: Interface) {
  return (
      <div style={{ height: '100vh', paddingTop: 80, boxSizing: 'border-box' }}>
        {
          [1, 2, 3, 4, 5]?.map(i => <Marquee
              style={{ marginBottom: 30 }}
              key={i}
              speed={speed}
              direction={i % 2 === 0 ? 'left' : 'right'}
          >
            <Space size={'large'}>
              {words?.map((_, i) => <div
                  style={{
                    height: 60,
                    width: 120,
                    marginLeft: i === 0 ? 20 : 0,
                    backgroundImage: `url(${card})`,
                    backgroundSize: 'cover',
                    color: '#E60001',
                    textAlign: 'center',
                    lineHeight: '60px',
                    fontSize: 20,
                    fontFamily: '隶书',
                  }}
              >
                {words[Math.floor(Math.random() * words?.length)]}
              </div>)}
            </Space>

          </Marquee>)
        }
      </div>
  );
}

export default ScrollableComponent;