import React from 'react';
import '../App.css';
import fu04 from '../image/04.png';
import { Avatar, Flex, Space } from 'antd';
import { options, users } from './nameMap';
import fu01 from '../image/01.png';
import fu02 from '../image/02.png';
import fu03 from '../image/03.png';
import fu05 from '../image/05.png';

interface Interface {
  // 红包大小
  size?: 'small' | 'default' | 'large',
  // 是否开启
  isOpen?: boolean
  // 姓名
  name?: string,
  // 奖项
  type?: 'ONE' | 'TWO' | 'THREE'

  onClick?: (v: string | number) => void
}

function Packet({ size = 'default', isOpen = false, name, type, onClick }: Interface) {

  const images = {
    1: fu01,
    2: fu02,
    3: fu03,
    4: fu04,
    5: fu05,
  };

  const dimension = {
    small: { height: 180, width: 120, fontSize: 16 },
    default: { height: 240, width: 160, fontSize: 18 },
    large: { height: 300, width: 200, fontSize: 20 },
  };

  return (
      <div>
        {
          isOpen
              ? <div
                  className={'animate__animated animate__rubberBand'}
                  style={{
                    height: dimension[size]?.height,
                    width: dimension[size]?.width,
                    cursor: 'pointer',
                    backgroundColor: '#E60001',
                    boxSizing: 'border-box',
                    border: '2px solid #f5af2f',
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}
              >

                <div style={{ margin: '10px 0 10px 0' }}>
                  <Flex justify={'space-evenly'}>
                    {'平安喜乐龙年大吉'?.split('')?.map(s => <span
                        style={{ fontFamily: '隶书', color: '#f5af2f' }}
                    >
                    {s}
                  </span>)}
                  </Flex>
                </div>

                <div
                    style={{
                      height: 200,
                      width: 120,
                      backgroundColor: '#f5af2f',
                      color: '#e60001',
                      fontFamily: '隶书',
                      fontSize: 30,
                      marginLeft: 40,
                    }}
                >

                  <Flex justify={'space-evenly'}>
                    <Space direction={'vertical'}>
                      {users[name]?.split('')?.map(s => <div>{s}</div>)}
                    </Space>

                    <Space direction={'vertical'} style={{ marginTop: 60 }}>
                      {options[type]?.split('')?.map(s => <div>{s}</div>)}
                    </Space>

                  </Flex>

                </div>

                <Flex justify={'space-evenly'} style={{ marginTop: 10 }}>
                  {
                    [1, 2, 3, 4, 5]?.map(i => <Avatar
                        src={images[i]}
                        size={'small'}
                    />)
                  }
                </Flex>

              </div>
              : <div
                  style={{
                    height: dimension[size]?.height,
                    width: dimension[size]?.width,
                    cursor: 'pointer',
                    backgroundColor: '#E60001',
                    boxSizing: 'border-box',
                    border: '2px solid #f5af2f',
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}

                  // 点击 翻转
                  onClick={() => onClick(name)}
              >

                <div
                    style={{
                      height: dimension[size]?.width,
                      width: dimension[size]?.width,
                      borderRadius: dimension[size]?.width / 2,
                      position: 'relative',
                      top: -(dimension[size]?.height / 2),
                      boxSizing: 'border-box',
                      border: '1px solid #f5af2f',
                    }}
                />

                <div
                    style={{
                      height: dimension[size]?.width / 4,
                      width: dimension[size]?.width / 4,
                      borderRadius: dimension[size]?.width / 8,
                      backgroundColor: '#f5af2f',
                      textAlign: 'center',
                      lineHeight: `${dimension[size]?.width / 4}px`,
                      color: '#fff',
                      fontSize: dimension[size]?.fontSize,
                      position: 'relative',
                      top: -(dimension[size]?.width - 20),
                      left: dimension[size]?.width * 3 / 8,
                    }}
                >
                  ￥
                </div>

                <div
                    style={{
                      height: dimension[size]?.width / 2,
                      width: dimension[size]?.width / 2,
                      left: dimension[size]?.width / 4,
                      position: 'relative',
                      top: -(dimension[size]?.width / 2),
                    }}
                >
                  <img
                      // src={[fu01, fu02, fu03, fu04, fu05][Math.floor(Math.random() * 5)]}
                      src={fu04}
                      height={'100%'}
                      width={'100%'}
                      alt={'packet'}
                  />
                </div>

              </div>
        }

      </div>
  );
}

export default Packet;