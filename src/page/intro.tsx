import { useEffect, useRef, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AnimatedProps,
  useTrail,
  animated,
  useSpringRef,
  useTransition,
} from '@react-spring/web';

const itemsFront = [
  '<',
  'H',
  'E',
  'L',
  'L',
  'O',
  'W',
  'O',
  'R',
  'L',
  'D',
  '/>',
];
const items = ['C', 'L', 'I', 'C', 'K', '', '', 'H', 'E', 'R', 'E', '->'];

const pages: ((
  props: AnimatedProps<{ children: ReactNode }>
) => React.ReactElement)[] = [
  ({ children }) => (
    <animated.div className="flex flex-col w-full h-screen justify-center items-center bg-blue-200">
      {children}
    </animated.div>
  ),
  ({ children }) => (
    <animated.div className="flex flex-col w-full h-screen justify-center items-center bg-blue-300">
      {children}
    </animated.div>
  ),
];

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const navigate = useNavigate();
  const isFlipped = useRef(false);
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    // leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  const handleClick = () => {
    setIndex((state) => (state + 1) % 5);
    if (isFlipped.current) {
      navigate('/blog');
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      {transitions((style, i) => {
        const Page = pages[i];
        return (
          <Page>
            <div
              className="flex flex-wrap justify-center w-[300px] md:w-[500px] mb-20"
              onClick={handleClick}
            >
              {trail.map(({ rotateX }, i) => (
                <div
                  key={i}
                  className={`flex justify-center items-center w-12 h-12 md:w-16 md:h-16 relative ml-0.5 md:ml-2 mb-2 text-3xl  text-white rounded-full ${
                    isFlipped.current ? 'bg-blue-300' : 'bg-blue-200'
                  }`}
                >
                  <animated.div
                    key={items[i]}
                    style={{
                      transform: rotateX.to(
                        (val) => `perspective(600px) rotateX(${val}deg)`
                      ),
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute cursor-pointer"
                  >
                    {itemsFront[i]}
                  </animated.div>
                  <animated.div
                    style={{
                      transform: rotateX.to(
                        (val) => `perspective(600px) rotateX(${180 - val}deg)`
                      ),
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute cursor-pointer"
                  >
                    {items[i]}
                  </animated.div>
                </div>
              ))}
            </div>
          </Page>
        );
      })}
    </div>
  );
};

export default Intro;
