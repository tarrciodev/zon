"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactElement, useRef } from "react";

export default function MotionContainer({
    children,
}: {
    children: ReactElement;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <div className='flex flex-1'>
            <motion.div
                className='bg-blue-950 hidden sm:flex flex-col flex-1'
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
            >
                {children}
            </motion.div>
            <div className='flex sm:hidden mt-8'>{children}</div>
        </div>
    );
}
