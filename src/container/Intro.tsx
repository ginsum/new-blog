"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
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
const items = ["<", "h", "e", "l", "l", "o", "!", "b", "l", "o", "g", "/>"];

const Intro = () => {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const router = useRouter();
  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      router.push("/blog");
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
      setTimeout(() => router.push("/blog"), 2200);
    }
  };

  return (
    <div
      className={`flex flex-col w-full h-screen justify-center items-center`}
    >
      <div
        className="flex flex-wrap justify-center w-[300px] md:w-[500px] mb-20"
        onClick={handleClick}
      >
        {trail.map(({ rotateX }, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-12 h-12 md:w-16 md:h-16 relative ml-0.5 md:ml-2 mb-2 text-3xl  text-white rounded-full bg-blue-200"
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
