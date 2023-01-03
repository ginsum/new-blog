import { useRef, useState } from 'react';
import { useTrail, animated } from '@react-spring/web';

const items = ['H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D'];
const itemsFront = ['🔥', '🔥', 'L', '🔥', '🔥', '🔥', '🔥', 'R', '🔥', '🔥'];

const Intro = () => {
  const [isOpen, setIseOpen] = useState<boolean>(false);
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
    setIseOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex flex-wrap w-96" onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-16 h-16 relative ml-2 mb-2 text-3xl bg-rose-800 text-white"
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
              className="absolute"
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
              className="absolute"
            >
              {items[i]}
            </animated.div>
          </div>
        ))}
      </div>
      <div className="h-4">{isOpen ? `Blog ->` : ''}</div>
    </div>
  );
};

export default Intro;
