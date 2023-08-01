"use client";
import { useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    return scrollYProgress.onChange((latestValue) => {
      if (latestValue > 0.2) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.button
      className="fixed bottom-10 right-10 p-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white text-2xl" />
    </motion.button>
  );
}