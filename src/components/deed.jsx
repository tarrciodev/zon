"use client"
import { IGetDeeds } from '@/actions/get-deeds';
import React, { useEffect, useState, useRef } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger"

export  function Deed({ deed }) {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='space-y-3'>
            <div className='text-green-400 font-semibold text-3xl flex'>
                +
                <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                >
                    {counterOn && (
                        <CountUp end={Number(deed.numbers)} duration={2} />
                    )}
                </ScrollTrigger>
            </div>
            <p className='text-blue-100 font-semibold text-xl'>{deed.title}</p>
            <span className='text-blue-50'>{deed.description}</span>
        </div>
    );
}
