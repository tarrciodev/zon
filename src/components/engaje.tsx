"use client"
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

export function Engaje() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
      <motion.div 
      className="bg-[url('../assets/background.png')] bg-cover mt-12"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}>
          <div className='py-20 px-8'>
              <p className='text-5xl font-bold text-blue-50 max-w-[50vw]'>
                  Aumente o Engajamento e Vendas de sua empresa
              </p>
          </div>
      </motion.div>
  );
}
