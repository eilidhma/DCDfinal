import React, { useEffect, useState } from 'react';
import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import LandingInfo from '../comps/LandingBio'
import MenuText from '../comps/MenuText'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import Clouds from '../comps/Clouds';
import Menu from '../comps/HambMenu'
import Logo from '../comps/Logo'
import MainButton from '../comps/MainButton'
import Nav from '../comps/Menu'
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'
import Open from '../comps/OpenIcon';
import Close from '../comps/CloseIcon';



export default function Home() {
  
  const router = useRouter()
  
  const [menuopen, setMenuOpen] = useState(false)

  const OpenMenu = () => {
    setMenuOpen(!menuopen)
  }
  const CloseMenu = () => {
    setMenuOpen(!menuopen)
  }

  return (
    <div className="garden">
      <div className="background"><Clouds /></div>
      <div className="app">
        <div className="main">
          {menuopen === false && <Open onClick={OpenMenu} color="white"/>}
          {menuopen === true && <Close onClick={CloseMenu} color="white"/>}
          <Nav right={menuopen ? 10 : -100} opacity={menuopen ? 1 : 0}/>
          {menuopen === false && <div className="content">
            <LargeTitles text="Welcome to" />

            <MainImg src="logo-white.png" width="40vw" />
            <MenuText text="With Garden, you will learn more about some benefits that growing plants offer for our planet, the bees and yourself. Then, you will go through a short questionnaire where we will recommend 3 plants for you to grow based on your individual needs!" />
            <MainButton text="Start" routeTo="/info" onClick={() => router.push('/info')} />
            
            <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, and Alex" />
          </div>}
        </div>
      </div>
    </div>
  )
}
