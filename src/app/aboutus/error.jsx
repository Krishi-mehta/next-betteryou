"use client"

import React from 'react'
import { useEffect } from 'react'

const error = () => {
    useEffect(()=>{
        console.log(`${error}`);
    },[error])
  return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error fetching data</div>
        </div>
  )
}

export default error