import React from 'react';
import { Drawer, Flex, Modal, Select, Space } from 'antd';
import { useLocalStorageState } from 'ahooks';
import { Howl } from 'howler';
import { options, users } from './nameMap';
import BaseCard from './BaseCard';
import back from '../image/img.png';
import background from '../image/background.jpg';
import ScrollableComponent from './ScrollableComponent';

function Lottery() {

  const [isStart, setIsStart] = React.useState<boolean>(false);

  // 中奖人员列表
  const [open, setOpen] = React.useState<boolean>(false);

  // 是否展示中奖动画
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  // 本轮中奖人员存储
  const [state, setState] = useLocalStorageState<any>(
      'lottery', { defaultValue: [] },
  );

  // 本次抽奖人数
  const [count, setCount] = React.useState<number>(5);

  // 本次抽取奖项
  const [option, setOption] = React.useState<string>('THREE');

  // 中奖人员
  const [lotteryUser, setLotteryUser] = React.useState<number[]>([]);

  // 随机未中奖人员中选出若干个人员，选中的不可再次被选到
  const getLotteryUser = () => {
    return Object.keys(users)
    ?.map(d => (parseInt(d)))
    ?.filter(u => !(state?.map(r => (r?.id))?.includes(u)))
    ?.sort(() => 0.5 - Math.random())?.slice(0, count);
  };

  // 音频播放
  const [sound, setSound] = React.useState(null);

  const playAudio = () => {

    const newSound = new Howl({
      src: [`/audio/start.mp3?t=${Date.now()}`], // 替换为你的音频文件路径
      volume: 1, // 可选：设置音量（0.0 到 1.0）
    });

    newSound.on('load', () => {
      console.log('音频加载完成，可以播放了');
      newSound.play();
    });
    setSound(newSound);
  };

  const stopAudio = () => {
    if (sound) {
      sound.stop();
    }
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

        <div
            style={{
              width: '100%',
              height: 60,
              lineHeight: '60px',
              textAlign: 'center',
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


        <div style={{ position: 'relative' }}>
          {
              isVisible &&
              <div style={{ position: 'absolute', width: '100%', zIndex: 2, marginTop: 60 }}>
                <Flex justify={'space-evenly'} align={'center'} wrap={'wrap'} gap={'large'}>
                  {
                    lotteryUser?.map(i => <div
                        className="animate__animated animate__rollIn"
                        key={i}
                    >
                      <BaseCard name={users[i]}/>
                    </div>)
                  }
                </Flex>
              </div>
          }

          {/* 开始抽奖速度加快 */}
          <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
            <ScrollableComponent speed={isStart ? 1500 : 50}/>
          </div>

        </div>

        <div
            style={{
              position: 'absolute',
              bottom: 20,
              zIndex: 3,
              width: '100%',
            }}
        >
          <Flex justify={'center'}>

            <Space direction={'vertical'}>

              <Select
                  placeholder={'奖项'}
                  allowClear={false}
                  onChange={v => setOption(v)}
                  value={option}
                  style={{ width: 100 }}
              >
                {
                  Object.keys(options)?.map(s => <Select.Option
                      key={s}
                      value={s}
                  >
                    {options[s]}
                  </Select.Option>)
                }
              </Select>

              <Select
                  placeholder={'抽取人数'}
                  allowClear={false}
                  onChange={v => setCount(v)}
                  value={count}
                  style={{ width: 100 }}
              >
                <Select.Option value={1}>1人</Select.Option>
                <Select.Option value={2}>2人</Select.Option>
                <Select.Option value={3}>3人</Select.Option>
                <Select.Option value={4}>4人</Select.Option>
                <Select.Option value={5}>5人</Select.Option>
              </Select>
            </Space>

            <div
                style={{
                  margin: '0 20px 0 20px',
                  height: 70,
                  width: 200,
                  borderRadius: 10,
                  textAlign: 'center',
                  lineHeight: '70px',
                  fontSize: 40,
                  cursor: 'pointer',
                  color: '#E60001',
                  fontFamily: '隶书',
                  backgroundColor: '#f3cd09',
                }}
                onClick={() => {
                  // 播放音乐
                  playAudio();

                  setIsVisible(false);
                  setIsStart(true);
                  // 保存本次中奖人员
                  let result = getLotteryUser();
                  setLotteryUser(result);
                  setState(value => [...value, ...(result?.map(d => ({ option: option, id: d })))]);
                  setTimeout(() => {
                    setIsStart(false);
                    setIsVisible(true);
                  }, 6000);
                }}
            >
              开始
            </div>

            <div
                style={{
                  height: 70,
                  marginRight: 20,
                  width: 200,
                  textAlign: 'center',
                  lineHeight: '70px',
                  borderRadius: 10,
                  fontSize: 40,
                  cursor: 'pointer',
                  color: '#E60001',
                  fontFamily: '隶书',
                  backgroundColor: '#f3cd09',
                }}
                onClick={() => Modal.confirm({
                  title: '提示',
                  content: '是否重置所有数据，重新开始？',
                  onOk: () => {
                    setState([]);
                    window.location.reload();
                  },
                  okText: '重置',
                  cancelText: '取消',
                })}
            >
              重置
            </div>

            <div
                style={{
                  height: 70,
                  width: 200,
                  textAlign: 'center',
                  borderRadius: 10,
                  fontSize: 30,
                  cursor: 'pointer',
                  color: '#E60001',
                  fontFamily: '隶书',
                  backgroundColor: '#f3cd09',
                }}
                onClick={() => setOpen(true)}
            >
              <div style={{ marginTop: 10 }}>获奖情况</div>
              <div style={{ fontSize: 18 }}>
                {state?.length} / {Object.keys(users)?.length}
              </div>
            </div>

          </Flex>
        </div>

        {/* 获奖人员列表 */}
        <Drawer
            open={open}
            closable={false}
            onClose={() => setOpen(false)}
            size={'large'}
            style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover' }}
        >
          <Space direction={'vertical'} style={{ marginLeft: 20, marginTop: 30 }}>
            <div>
              <div
                  style={{
                    height: 40,
                    width: 200,
                    textAlign: 'center',
                    lineHeight: '40px',
                    fontSize: 30,
                    color: '#E60001',
                    fontFamily: '隶书',
                    borderRadius: 10,
                    backgroundColor: '#f3cd09',
                  }}
              >
                一等奖
              </div>

              <Space wrap style={{ marginTop: 20, marginBottom: 20 }}>
                {state?.filter(u => u?.option === 'ONE')?.map(u => <div
                    style={{
                      color: '#f3cd09',
                      height: 30,
                      width: 100,
                      fontSize: 26,
                      fontFamily: '隶书',
                    }}
                >
                  {users[u?.id]}
                </div>)}
              </Space>

            </div>

            <div>
              <div
                  style={{
                    height: 40,
                    width: 200,
                    textAlign: 'center',
                    lineHeight: '40px',
                    fontSize: 30,
                    color: '#E60001',
                    fontFamily: '隶书',
                    borderRadius: 10,
                    backgroundColor: '#f3cd09',
                  }}
              >
                二等奖
              </div>

              <Space wrap style={{ marginTop: 20, marginBottom: 20 }}>
                {state?.filter(u => u?.option === 'TWO')?.map(u => <div
                    style={{
                      color: '#f3cd09',
                      height: 30,
                      width: 100,
                      fontSize: 26,
                      fontFamily: '隶书',
                    }}
                >
                  {users[u?.id]}
                </div>)}
              </Space>
            </div>

            <div>
              <div
                  style={{
                    height: 40,
                    width: 200,
                    textAlign: 'center',
                    lineHeight: '40px',
                    fontSize: 30,
                    color: '#E60001',
                    fontFamily: '隶书',
                    borderRadius: 10,
                    backgroundColor: '#f3cd09',
                  }}
              >
                三等奖
              </div>

              <Space wrap style={{ marginTop: 20, marginBottom: 20 }}>
                {state?.filter(u => u?.option === 'THREE')?.map(u => <div
                    style={{
                      color: '#f3cd09',
                      height: 30,
                      width: 100,
                      fontSize: 26,
                      fontFamily: '隶书',
                    }}
                >
                  {users[u?.id]}
                </div>)}
              </Space>
            </div>
          </Space>

        </Drawer>

      </div>
  );
}

export default Lottery;