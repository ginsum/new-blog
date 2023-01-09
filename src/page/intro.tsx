import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTrail, animated } from "@react-spring/web";

const itemsFront = [
  "<",
  "H",
  "E",
  "L",
  "L",
  "O",
  "W",
  "O",
  "R",
  "L",
  "D",
  "/>",
];
const items = ["C", "L", "I", "C", "K", "", "", "", "", "M", "E", "->"];

const Intro = () => {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const navigate = useNavigate();
  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      navigate("/blog");
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div
        className="flex flex-wrap justify-center w-full md:w-[500px] mb-20"
        onClick={handleClick}
      >
        {trail.map(({ rotateX }, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-12 h-12 md:w-16 md:h-16 relative ml-0.5 md:ml-2 mb-2 text-3xl bg-blue-200 text-white rounded-full"
          >
            <animated.div
              key={items[i]}
              style={{
                transform: rotateX.to(
                  (val) => `perspective(600px) rotateX(${val}deg)`
                ),
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
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
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              className="absolute cursor-pointer"
            >
              {items[i]}
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
