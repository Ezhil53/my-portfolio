"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div
      className="mx-auto max-w-sm px-4 py-15 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative flex justify-center items-center">
        {/* <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 10
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 10,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl p-1 object-contain  bg-gray-200" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div> */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-2xl font-bold text-black ">
                {testimonials[active].name}
                {/* <p className="text-sm text-gray-400 ">
                  {testimonials[active].designation}
                </p> */}
              </div>

              <div className="flex gap-4  max-md:justify-center md:pt-0">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 ">
                  <IconArrowLeft
                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 " />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 ">
                  <IconArrowRight
                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 " />
                </button>
              </div>
            </div>
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p> */}
            {/* <motion.p className="mt-8 text-md text-gray-500 ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p> */}

            <ul className=" text-gray-500 my-3 ">
              {testimonials[active].quote.split("=").map((word, index) => (
                <li
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.2 * index,
                  }}
                  className="inline-block my-1 text-md text-gray-500 ">
                  {word}&nbsp;
                </li>
              ))}
            </ul>

            <div className="text-sm text-gray-500 my-3 ">
              {testimonials[active].tech.split(",").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-sm text-gray-600 gap-2 bg-blue-100 rounded-3xl p-1 px-3 m-1 ">
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>
            <div className="flex justify-end gap-5 items-center my-4">
              <a target="_blank" href={testimonials[active].glink} className="text-sm px-3 py-2 bg-black text-white rounded-md hover:scale-103 hover:shadow-lg  transition-scale duration-300 cursor-pointer">
                {testimonials[active].code}
              </a>
              <a target="_blank" href={testimonials[active].live} className="text-sm text-black px-3 py-2 rounded-md bg-gray-200 cursor-pointer hover:scale-103 hover:shadow-lg  transition-scale duration-300">
                {testimonials[active].link}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
