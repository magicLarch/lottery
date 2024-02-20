import React from 'react';
import { Flex } from 'antd';
import { useMount } from 'ahooks';
import packet from '../image/packet.png';
import left from '../image/left.png';
import right from '../image/right.png';

function BaseCard({ name }: { name: string }) {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // 延迟3s反转卡片
  useMount(() => {
    setTimeout(() => setIsOpen(true), 3000);
  });

  return (
      <div>
        {
          isOpen ? <div
                  className={'animate__animated animate__rubberBand'}
                  style={{
                    display: 'flex',
                    backgroundColor: '#E60001',
                    height: 160,
                    width: 400,
                  }}
              >
                <div
                    style={{ width: 80 }}
                >
                  <img src={left} alt={'left'} style={{ height: 160 }}/>
                </div>

                <div
                    style={{
                      width: 240,
                      height: 144,
                      marginTop: 10,
                      border: '1px solid #f3c42f',
                      borderRadius: 16,
                    }}
                >
                  <div
                      style={{
                        height: 136,
                        width: 232,
                        border: '1px solid #f3c42f',
                        borderRadius: 13,
                        textAlign: 'center',
                        fontSize: 48,
                        color: '#f3c42f',
                        fontFamily: '隶书',
                        margin: '3px 0 0 3px',
                      }}
                  >
                    <div style={{ marginTop: 32 }}>{name}</div>
                    <div style={{ fontSize: 12, marginTop: 35 }}>
                      <Flex justify={'space-evenly'}>
                        {'平安喜乐龙年大吉'?.split('')?.map(s => <span>{s}</span>)}
                      </Flex>
                    </div>
                  </div>

                </div>

                <div style={{ width: 80 }}>
                  <img src={right} alt={'right'} style={{ float: 'right', height: 160 }}/>
                </div>
              </div>
              : <div
                  style={{
                    height: 160,
                    width: 400,
                    backgroundImage: `url(${packet})`,
                    color: '#FDFCC8',
                    textAlign: 'center',
                  }}
              >
                <div
                    style={{
                      padding: '24px 0 8px 0',
                      fontFamily: '隶书',
                      fontSize: 40,
                    }}
                >
                  年会中奖卡
                </div>

                <div style={{ fontSize: 13, color: '#FDFCC8', paddingBottom: 10 }}>
                  —— 活动时间：2024年2月5日 ——
                </div>

                <Flex justify={'center'}>
                  {
                    '新年快乐恭喜发财'?.split('')?.map(s => <span
                        style={{
                          height: 16,
                          width: 16,
                          borderRadius: 8,
                          backgroundColor: '#FDFCC8',
                          color: '#E60001',
                          textAlign: 'center',
                          lineHeight: '16px',
                          fontSize: 8,
                        }}
                    >
                        {s}
                      </span>)
                  }
                </Flex>

                <div style={{ color: '#FDFCC8', fontSize: 10, paddingTop: 6 }}>
                  <p>HAPPY NEW YEAR PEACE AND JOY</p>
                </div>
              </div>
        }
      </div>
  );
}

export default BaseCard;