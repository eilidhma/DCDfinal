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
import ReactPlayer from "react-player"
import NameInput from '../comps/NameInput';



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
    setMainState(0)
    if(mainstate === 0)
  }

  return (
    
      
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
          {mainstate === 1 && <div className="infoContent">

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
          </div>}
          

          {/* END OF SUSTAINABILITY */}

          {/* START OF WELLNESS */}
          {mainstate === 2 && <div className="infoContent">
            
            <MainImg src="brain.png"/>
            <Description text="Gardening improves mental health"/>
            <SmallDescription text="Gardening can help reduce symptoms of depression and anxiety. It gives you a chance to focus on something and put your mind to work with a goal and a task in mind"/>
            <MainImg src="girl.png"/>
            <Description text="Feeling of accomplishment"/>
            <SmallDescription text="The sense of pride and accomplishment that comes from eating that first tomato or snap pea from your backyard will amaze you. It doesn’t just have to be that first ever crop either – that feeling often extends year after year."/>
            <MainImg src="girlgardener.png"/>
            <Description text="Physical activity"/>
            <SmallDescription text="When you take the time to prepare, plant, weed, water, and harvest your own garden, you are getting sunshine, fresh air, and physical activity. All that digging, planting and weeding burns calories and strengthens your heart."/>
          </div>}
          {/* END OF WELLNESS */}

          {/* START OF BEES */}
          {mainstate === 3 && <div className="infoContent">
           
            <MainImg src="bee.png"/>
            <Description text="By creating a bee-friendly garden, you can do your part to help save our important bees."/>
            <SmallDescription text="Since 2010, the United States has suffered a loss of 40% of its local honeybees. Native bee species are dying off too, with many of them categorized as either endangered or significantly declining. "/>
            <div className="BlankBox">
              <PlantDetailsLarge src="flowericon.png" text="40% of global food production relies on pollination recieved from bees" />
              <PlantDetailsLarge src="flowericon.png" text="Bees also provide opportunities for income diversity with low start-up costs through diverse products and services; this includes collecting honey, pollen, beeswax, bee venom and royal jelly, as well as pollination services and more!" />
            </div>
            <Description text="How YOU can help:"/>
            <ReactPlayer url="https://www.youtube.com/watch?v=FqClEkOyHbw"/>

          </div>}
          {/* END OF BEES */}


        {mainstate === 1 && <MainButton onClick={setMainState(2)} text={<>Wellness Benefits<VscArrowRight/></>}/>}
        {mainstate === 2 && <MainButton onClick={setMainState(1)} text={<><VscArrowLeft/>Sustainability</>}/>}
        {mainstate === 2 && <MainButton onClick={setMainState(3)} text={<>Saving the Bees<VscArrowRight/></>}/>}
        {mainstate === 3 && <MainButton onClick={setMainState(2)} text={<><VscArrowLeft/>Wellness Benefits</>}/>}

        {/*Start of quiz intro*/}
        {mainstate === 3 && <div className="infoContent">
            <Description text="Now, it’s time to find out what plants are best for you!"/>
            <SmallDescription text="Through a 4-questions questionnaire, Garden will be able to find perfect recommendations for plants that you can grow at home based on your climate, interest, and time available to take care of your new friend."/>
            <MainImg src="veggarden.png"/>
            <SmallDescription text="Before we get to the first question,"/>
            <Description text="What is your name?"/>
            <NameInput />
            <MainButton text="Let's Start!" onClick={() => router.push('/quiz')}/>
          </div>}
        </div>

  )
}