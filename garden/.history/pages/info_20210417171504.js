import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import React, {useState} from 'react';



export default function Home() {

  const router = useRouter()

  const [mainstate, setMainState] = useState(true);

  const HandleChange = () =>{
    
  }

  return (
    <html>
      <body>
        <div className="info" >
          <LargeTitles text="Why Grow Food at Home?"/>
          <MainImg src="couple.png" width="30%"/>
          <ButtonUI text="Sustainability" routeTo="/info" onClick={HandleChange}/>
          <ButtonUI text="Wellness Benefits" routeTo="/quiz" onClick={HandleChange}/>
          <ButtonUI text="Saving the Bees" routeTo="/quiz" onClick={HandleChange}/>
        </div>
      </body>
    </html>
  )
}