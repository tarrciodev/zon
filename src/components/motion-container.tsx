"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { ReactElement, useRef } from "react";

export default function MotionContainer({children}: {children: ReactElement}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className='bg-blue-950 flex-1 flex flex-col'
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            {children}
        </motion.div>
    );
}
