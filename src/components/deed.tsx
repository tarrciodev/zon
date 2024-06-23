"use client"
import { IGetDeeds } from '@/actions/get-deeds';
import React, { useEffect, useState } from 'react'

interface IDeeds {
    deed: IGetDeeds
}

export  function Deed({ deed }: { deed: IGetDeeds }) {
    return (
        <div className='space-y-3'>
            <p className='text-green-400 font-semibold text-3xl'>+{deed.numbers} </p>
            <p className='text-blue-100 font-semibold text-xl'>{deed.title}</p>
            <span className='text-blue-50'>
                {deed.description}
            </span>
        </div>
    );
}
