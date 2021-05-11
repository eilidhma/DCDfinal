import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import PlantDetailsLarge from '../comps/PlantDetailsLarge';
import Wrap from '../comps/Wrap';
import Herbs from '../comps/Herbs';
import MainButton from '../comps/MainButton';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import ReactPlayer from "react-player"
import NameInput from '../comps/NameInput';
import { titles, veg, fact } from '../data/text';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../comps/Logo';
import VegSlider from '../comps/VegSlider';
import Ecology from '../comps/Ecology';
import Brain from '../comps/Brain';
import Menu from '../comps/HambMenu';
import MenuText from '../comps/MenuText';
import Clouds from '../comps/Clouds';
import Watercan from '../comps/Watercan';
import GardeningGirl from '../comps/GardeningGirl';
import Bee from '../comps/Bee';
import Cart from '../comps/ShoppingCart';
import Groceries from '../comps/Groceries';
import PestBee from '../comps/PesticideBee';
import HandsPlanet from '../comps/HandsPlanet';


const Info = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const router = useRouter()

  const [mainstate, setMainState] = useState(0);

  const [wrapstate, setWrap] = useState(false)
  const [herbsstate, setHerbs] = useState(false)
  const [titlestate, setTitle] = useState(titles.info)
  const [vegimg, setImg] = useState(veg.lettuce)
  const [vegnumber, setNumber] = useState(fact.number.lettuce)
  const [vegfact, setFact] = useState(fact.veg.lettuce)

  const [strawberrystate, setStraw] = useState(false)
  const [celerystate, setCel] = useState(false)
  const [cucumberstate, setCuc] = useState(false)
  const [strawfact, setStrawFact] = useState(false)
  const [celeryfact, setCelFact] = useState(false)
  const [cucumberfact, setCucFact] = useState(false)
 

  const HandleWrap = () => {
    setWrap(!wrapstate)
  }
  const HandleHerbs = () => {
    setHerbs(!herbsstate)
  }

  const HandleVeg = () => {
    if (vegimg === veg.lettuce) {
      setImg(veg.tomato)
      setNumber(fact.number.tomato)
      setFact(fact.veg.tomato)
    }
    if (vegimg === veg.tomato) {
      setImg(veg.potato)
      setNumber(fact.number.potato)
      setFact(fact.veg.potato)
    }
    if (vegimg === veg.potato) {
      setImg(veg.apple)
      setNumber(fact.number.apple)
      setFact(fact.veg.apple)
    }
    if (vegimg === veg.apple) {
      setImg(veg.banana)
      setNumber(fact.number.banana)
      setFact(fact.veg.banana)
    }
    if (vegimg === veg.banana) {
      setImg(veg.lettuce)
      setNumber(fact.number.lettuce)
      setFact(fact.veg.lettuce)
    }
  }

  const Sust = () => {
    setMainState(1)
    setTitle(titles.sust)
    window.scrollTo(0, 0);
  }

  const Well = () => {
    setMainState(2)
    setTitle(titles.well)
    window.scrollTo(0, 0);
  }

  const Bees = () => {
    setMainState(3)
    setTitle(titles.bees)
    window.scrollTo(0, 0);
  }

  const HandleStraw = () =>{
    setStraw(true)
    setCucFact(false)
    setCelFact(false)
    setStrawFact(true)
  }
  const HandleCel = () =>{
    setCel(true)
    setStrawFact(false)
    setCucFact(false)
    setCelFact(true)
  }
  const HandleCuc = () =>{
    setCuc(true)
    setStrawFact(false)
    setCelFact(false)
    setCucFact(true)
  }

  return (


    <div className="garden">
      <div className="background"><Clouds /></div>
      <div className="app">
        <div className="main">

          <div className="content">
        
          {/* START OF REUSABLE -- add in back button and hamburger menu */}

            <Logo/>
            <Menu/>
            <LargeTitles text={titlestate}/>
            {/* <Menu/> */}

          {/* END OF REUSABLE */}

          {/* START OF Directory */}
          <div className="infoContent">
            {mainstate === 0 && <HandsPlanet/>}
            <Description text="Take a moment to learn. Read up on three benefits of gardening at home!" />
            <div data-aos="slide-up" className="directory">
              <div className="ButtonCont">
                <ButtonUI text="Sustainability" onClick={Sust} />
                <MenuText text="Why is gardening at home so good for the environment? Giving you the scoop on pesticides, food waste, and more!" />
              </div>
              <div className="ButtonCont">
                <ButtonUI text="Wellness Benefits" onClick={Well} />
                <MenuText text="Let's talk about YOU! How can gardening benefit your mental, and physical wellbeing?" />
              </div>
              <div className="ButtonCont">
                <ButtonUI text="Saving the Bees" onClick={Bees} />
                <MenuText text="All about bees- why do we need them, and how can we help support them" />
              </div>
            </div>

          </div>


          {/* END OF Directory */}

          {/* START OF SUSTAINABILITY */}
          {mainstate === 1 && <div className="infoContent">


            <div data-aos="fade"><Ecology/></div>
            <div data-aos="flip-up"><Description text="How does gardening help the environment?"/></div>
            <div data-aos="slide-left"><SmallDescription text="Growing your food organically (without pesticides and herbicides) will help the earth by preventing air and water pollution. It will also reduce the use of fossil fuels that comes from the transport of fresh produce from all around the world to your supermarket."/></div>
            <div data-aos="flip-up"><Description text="Control what goes on and in what you grow"/></div>
            <div data-aos="slide-right"><SmallDescription text="Supermarket fruits and vegetables contain less nutrients than they used to. But one thing they aren’t lacking on is pesticides."/></div>
            <div className="cart">
              <div className="groceries">
                <Groceries 
                  left={strawberrystate ? 80 : 0}
                  top={strawberrystate ? 290 : 0}
                  onClick={HandleStraw}/>
                <Groceries 
                  src="celery.png" 
                  left={celerystate ? 10 : 0}
                  top={celerystate ? 290 : 0}
                  onClick={HandleCel}/>
                <Groceries 
                  src="cucumber1.png"
                  left={cucumberstate ? -60 : 0}
                  top={cucumberstate ? 290 : 0}
                  onClick={HandleCuc}/>
              </div>
              {strawfact === false && celeryfact === false && cucumberfact === false && <Description text="Learn about these grocery items by clicking to add them to your cart"/>}
              {strawfact === true && <Description text="Strawberries may contain up to 40 different pesticides"/>}
              {celeryfact === true && <Description text="Celery may contain more than 60 different pesticides"/>}
              {cucumberfact === true && <Description text="Cucumber skin may contain more than 80 different pesticides"/>}
              <Cart />
            </div>
            

            <div data-aos="slide-left"><Description text="Prevent more food waste by gardening at home"/></div>
            <div data-aos="slide-right"><SmallDescription text="Organic waste is the 2nd highest component of landfills in the US. It is estimated that a whopping 30% of the food supply is wasted. This means about 20 pounds per person per month."/></div>
            <Description text="This means, daily:"/>
            <VegSlider onClick={HandleVeg}
              number={vegnumber}
              text={vegfact}
              src={vegimg}
            />

            <Description text="are thrown out..."/>
            <div data-aos="fade"><SmallDescription text="Food scraps or trimmings that aren’t consumed can be added to the compost bin, which can then be returned to the garden for its good nutrients."/></div>
            <MainImg src="garbage.png" width="20%"/>
            <LargeTitles text="And what about food packaging?"/>
            <Description text="Consider this..."/>
            <Description text="(Click the plastic wrap and packaging)"/>
            <Wrap 
            src = {wrapstate ? "wrap_open.png" : "wrap_closed.png"}
            onClick={HandleWrap}

            />
            <Herbs
              opacity={herbsstate ? 1 : 0}
              rotate={herbsstate ? 0 : -20}
              left={herbsstate ? 0 : -250}
              onClick={HandleHerbs}
            />
            <Description text="Other ways that you can help:" />
            <div className="BlankBox" data-aos="zoom-in">
              <PlantDetailsLarge src="globeicon.png" text="Reduce the use of gasoline-power yard tools" />
              <PlantDetailsLarge src="globeicon.png" text="Reduce water consumption" />
              <PlantDetailsLarge src="globeicon.png" text="Improve your energy efficiency" />
            </div>
          </div>}


          {/* END OF SUSTAINABILITY */}

          {/* START OF WELLNESS */}
          {mainstate === 2 && <div className="infoContent">

            <div data-aos="fade"><Brain /></div>
            <div data-aos="flip-up"><Description text="Gardening improves mental health" /></div>
            <div data-aos="slide-left"><SmallDescription text="Gardening can help reduce symptoms of depression and anxiety. It gives you a chance to focus on something and put your mind to work with a goal and a task in mind" /></div>
            <div data-aos="zoom-in"><GardeningGirl /></div>
            <div data-aos="flip-up"><Description text="Feeling of accomplishment" /></div>
            <div data-aos="slide-right"><SmallDescription text="The sense of pride and accomplishment that comes from eating that first tomato or snap pea from your backyard will amaze you. It doesn’t just have to be that first ever crop either – that feeling often extends year after year." /></div>
            <div data-aos="zoom-in"><Watercan /></div>
            <div data-aos="flip-up"><Description text="Physical activity" /></div>
            <div data-aos="slide-left"><SmallDescription text="When you take the time to prepare, plant, weed, water, and harvest your own garden, you are getting sunshine, fresh air, and physical activity. All that digging, planting and weeding burns calories and strengthens your heart." /></div>
          </div>}
          {/* END OF WELLNESS */}

          {/* START OF BEES */}
          {mainstate === 3 && <div className="infoContent">
           
            <div data-aos="fade"><Bee/></div>
            <div data-aos="flip-up"><Description text="By creating a bee-friendly garden, you can do your part to help save our important bees."/></div>
            <div data-aos="slide-left"><SmallDescription text="Since 2010, the United States has suffered a loss of 40% of its local honeybees. Native bee species are dying off too, with many of them categorized as either endangered or significantly declining. "/></div>
            <div data-aos="zoom-in" className="BlankBox">
              <PlantDetailsLarge src="flowericon.png" text="40% of global food production relies on pollination recieved from bees" />
              <PlantDetailsLarge src="flowericon.png" text="Bees also provide opportunities for income diversity with low start-up costs through diverse products and services; this includes collecting honey, pollen, beeswax, bee venom and royal jelly, as well as pollination services and more!" />
            </div>

            <Description text="How YOU can help:"/>
            <div className="pesticide">
              <PestBee left="0" top="50"/>
              <img className="can" src="pesticide.png" width="50%"/>
              <MainImg src="tulip.svg"/>
            </div>


            <div data-aos="fade"><ReactPlayer url="https://www.youtube.com/watch?v=FqClEkOyHbw"/></div>



          </div>}
          {/* END OF BEES */}



        {mainstate === 1 && <MainButton onClick={Well} text={<>Wellness Benefits<VscArrowRight/></>}/>}
        {mainstate === 2 && <MainButton onClick={Sust} text={<><VscArrowLeft/>Sustainability</>}/>}
        {mainstate === 2 && <MainButton onClick={Bees} text={<>Saving the Bees<VscArrowRight/></>}/>}
        {mainstate === 3 && <MainButton onClick={Well} text={<><VscArrowLeft/>Wellness Benefits</>}/>}

        {/*Start of quiz intro*/}
        {mainstate === 3 && <div className="infoContent">
            <Description text="Now, it’s time to find out what plants are best for you!"/>
            <SmallDescription text="Through a 4-questions questionnaire, Garden will be able to find perfect recommendations for plants that you can grow at home based on your climate, interest, and time available to take care of your new friend."/>
            <MainImg src="veggarden.png"/>
            <MainButton text="Let's Start!" onClick={() => router.push('/quiz/question1')}/>

          </div>}
        </div>
      </div>
    </div>
  </div>


  )
}

export default Info
