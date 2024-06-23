"use client"
import Lottie from 'lottie-react';
import React from 'react'

interface ILottieServer {
    animationData: any
}
export function LottieServer({ animationData}: ILottieServer) {
  return (
      <div>
          <Lottie animationData={animationData} />
      </div>
  );
}
