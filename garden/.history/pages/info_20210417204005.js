import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import React, {useState} from 'react';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import PlantDetailsLarge from '../comps/PlantDetailsLarge';
import Wrap from '../comps/Wrap';
import Herbs from '../comps/Herbs';
import MainButton from '../comps/MainButton';
import {VscArrowRight, VscArrowLeft} from 'react-icons/vsc'



export default function Home() {

  const router = useRouter()

  const [mainstate, setMainState] = useState(0);

  const [wrapstate, setWrap] = useState(false)
  const [herbsstate, setHerbs] = useState(false)

  const HandleWrap = () => {
    setWrap(!wrapstate)
  }
  const HandleHerbs = () => {
    setHerbs(!herbsstate)
  }


  const HandleChange = () =>{

  }

  return (
    <html>
      <body>
        <div className="info" >
          
          {/* START OF REUSABLE -- add in back button and hamburger menu */}
          <LargeTitles text="Why Grow Food at Home?"/>
          {/* END OF REUSABLE */}
          
          {/* START OF Directory */}
          <div className="infoContent">
            <MainImg src="couple.png" width="30%"/>
            <ButtonUI text="Sustainability" routeTo="/info" onClick={HandleChange}/>
            <ButtonUI text="Wellness Benefits" routeTo="/quiz" onClick={HandleChange}/>
            <ButtonUI text="Saving the Bees" routeTo="/quiz" onClick={HandleChange}/>
          </div>
          

          {/* END OF Directory */}

          {/* START OF SUSTAINABILITY */}
          <div className="infoContent">
            <LargeTitles text="Environmental Benefits"/>
            <MainImg src="city.png"/>
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
            <Description text="(Click the plastic wrap and packaging)"/>
            <Wrap 
            src = {wrapstate ? "wrap_open.png" : "wrap_closed.png"}
            onClick={HandleWrap}
            />
            <Herbs
            opacity = {herbsstate ? 1 : 0}
            rotate = {herbsstate ? 0 : -20}
            left = {herbsstate ? 0 : -250}
            onClick={HandleHerbs}
            />
            <Description text="Other ways that you can help:"/>
            <div className="BlankBox">
              <PlantDetailsLarge src="globeicon.png" text="Reduce the use of gasoline-power yard tools" />
              <PlantDetailsLarge src="globeicon.png" text="Reduce water consumption" />
              <PlantDetailsLarge src="globeicon.png" text="Improve your energy efficiency"/>
            </div>  
          </div>
          

          {/* END OF SUSTAINABILITY */}

          {/* START OF WELLNESS */}
          <div className="infoContent">
            <LargeTitles text="Wellness Benefits"/>
            <MainImg src="brain.png"/>
            <Description text="Gardening improves mental health"/>
            <SmallDescription text="Gardening can help reduce symptoms of depression and anxiety. It gives you a chance to focus on something and put your mind to work with a goal and a task in mind"/>
            <MainImg src="girl.png"/>
            <Description text="Feeling of accomplishment"/>
            <SmallDescription text="The sense of pride and accomplishment that comes from eating that first tomato or snap pea from your backyard will amaze you. It doesn’t just have to be that first ever crop either – that feeling often extends year after year."/>
            <MainImg src="girlgardener.png"/>
            <Description text="Physical activity"/>
            <SmallDescription text="The sense of pride and accomplishment that comes from eating that first tomato or snap pea from your backyard will amaze you. It doesn’t just have to be that first ever crop either – that feeling often extends year after year."/>
          </div>
          {/* END OF WELLNESS */}

          {/* START OF BEES */}
          
          {/* END OF BEES */}


        <MainButton onClick={HandleChange} text={<><VscArrowLeft/>Sustainability</>}/>
        <MainButton onClick={HandleChange} text={<><VscArrowLeft/>Wellness Benefits</>}/>
        <MainButton onClick={HandleChange} text={<>Saving the Bees<VscArrowRight/></>}/>
        
        <MainButton onClick={HandleChange} text={<>Wellness Benefits<VscArrowRight/></>}/>
        </div>
      </body>
    </html>
  )
}