import Head from 'next/head'
import styled from 'styled-components'

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Soil from '../comps/Soil';
import Seed from '../comps/Seed';
import Leaves from '../comps/Leaves';



export default function Home() {
  const [leaves, setLeaves] = useState(false)
  const [seed, setSeed] = useState(true)

  const Grow = () => {
    setLeaves(true)
    setSeed(false)
  }

  return (
    <div className="content">
      <div data-aos="fade" className="seed-plant">
        <div className="seed-plant-cont">
          <Leaves
            opacity={leaves ? "1" : "0"} />
        </div>
        <div className="seed-plant-cont">
          <Soil></Soil>
        </div>
        <div className="seed-plant-cont">
          <Seed onClick={Grow}
            top={seed ? "0" : "60"}
            opacity={seed ? "1" : "0"} />
        </div>
      </div>
    </div>
    
  )
}
