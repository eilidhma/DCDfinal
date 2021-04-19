import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import React, {useState} from 'react';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import PlantDetailsLarge from '../comps/PlantDetailsLarge';
import Wrap from '../comps/Wrap'



export default function Home() {

  const router = useRouter()

  const [mainstate, setMainState] = useState(true);

  const [wrap, setWrap] = useState(false)

  const HandleWrap

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
          <Description text="How does gardening help the environment?"/>
          <SmallDescription text="Growing your food organically (without pesticides and herbicides) will help the earth by preventing air and water pollution. It will also reduce the use of fossil fuels that comes from the transport of fresh produce from all around the world to your supermarket."/>
          <Description text="Control what goes on and in what you grow"/>
          <SmallDescription text="Supermarket fruits and vegetables contain less nutrients than they used to. But one thing they aren’t lacking on is pesticides."/>
          <div className="BlankBox">
            <PlantDetailsLarge src="strawberry.png" text="Strawberries may contain up to 40 different pesticides" width="70"/>
            <PlantDetailsLarge src="celery.png" text="Celery may contain more than 60 different pesticides" width="80"/>
            <PlantDetailsLarge src="cucumber.png" text="Cucumber skin may contain more than 80 different pesticides" width="70"/>
          </div>
          <Description text="Prevent more food waste by gardening at home"/>
          <SmallDescription text="Organic waste is the 2nd highest component of landfills in the US. It is estimated that a whopping 30% of the food supply is wasted. This means about 20 pounds per person per month."/>
          <Description text="This means, daily:"/>

          <Description text="are thrown out..."/>
          <SmallDescription text="Food scraps or trimmings that aren’t consume can be added to the compost bin, which can then be returned to the garden for its good nutrients."/>
          <MainImg src="garbage.png" width="20%"/>
          <LargeTitles text="And what about food packaging?"/>
          <Description text="Consider this..."/>
          <Wrap onClick={HandleWrap}/>

        </div>
      </body>
    </html>
  )
}