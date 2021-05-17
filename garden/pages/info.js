import LargeTitles from '../comps/LargeTitles';
import MedTitles from '../comps/MediumTitles';
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
import { titles, veg, fact } from '../data/text';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import PestCan from '../comps/PesticideCan';
import HandsPlanet from '../comps/HandsPlanet';
import Watering from '../comps/Watering';
import Back from '../comps/Back';
import Tabs from '../comps/Tabs';



const Info = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const router = useRouter()

  const [mainstate, setMainState] = useState(0);

  const [navstate, setNavState] = useState(0)
  const [hover1, setNav1Hover] = useState(false)
  const [hover2, setNav2Hover] = useState(false)
  const [hover3, setNav3Hover] = useState(false)

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
  const [bee, setBee] = useState(false)
  const [can, setCan] = useState(true)
  const [grow, setGrow] = useState(false)
  const [rotate, setRotate] = useState(false)


  const Nav1 = () => {
    setNav1Hover(true)
  }
  const Nav2 = () => {
    setNav2Hover(true)
  }
  const Nav3 = () => {
    setNav3Hover(true)
  }

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
    setBee(false)
    setCan(true)
    setGrow(false)
  }

  const Well = () => {
    setMainState(2)
    setTitle(titles.well)
    window.scrollTo(0, 0);
    setBee(false)
    setCan(true)
    setGrow(false)
  }

  const Bees = () => {
    setMainState(3)
    setTitle(titles.bees)
    window.scrollTo(0, 0);
    setBee(false)
    setCan(true)
    setGrow(false)
  }

  const HandleStraw = () => {
    setStraw(true)
    setCucFact(false)
    setCelFact(false)
    setStrawFact(true)
  }
  const HandleCel = () => {
    setCel(true)
    setStrawFact(false)
    setCucFact(false)
    setCelFact(true)
  }
  const HandleCuc = () => {
    setCuc(true)
    setStrawFact(false)
    setCelFact(false)
    setCucFact(true)
  }

  const Can = () => {
    setBee(true)
    setCan(false)
  }

  const Water = () => {
    setGrow(true)
    setRotate(true)
  }

  const Rotate = () => {
    setRotate(false)
  }


  return (


    <div className="infoWrap">
      <div className="infoBackground"><Clouds /></div>
      <div className="infoApp">
        <div className="infoMain">

          <Menu />

          <div className="infoContent">

            {/* START OF REUSABLE */}
            {mainstate !== 0 && <div>
              <Tabs
                src1={hover1 ? "planet-earthdark.svg" : "planet-earth.svg"}
                src2={hover2 ? "dumbbelldark.svg" : "dumbbell.svg"}
                src3={hover3 ? "bee-icondark.svg" : "bee-icon.svg"}
                onClick1={Sust}
                onClick2={Well}
                onClick3={Bees}
                color1="#FFFFFF"
                color2="#FFFFFF"
                color3="#FFFFFF"
                background1={mainstate === 1 ? "#00000033" : "#FFFFFF33"}
                background2={mainstate === 2 ? "#00000033" : "#FFFFFF33"}
                background3={mainstate === 3 ? "#00000033" : "#FFFFFF33"}
                borderColor1={mainstate === 1 ? "#00000022" : "#FFFFFF"}
                borderColor2={mainstate === 2 ? "#00000022" : "#FFFFFF"}
                borderColor3={mainstate === 3 ? "#00000022" : "#FFFFFF"}
              />
            </div>}


            <LargeTitles text={titlestate} />
            {/* <Menu/> */}

            {/* END OF REUSABLE */}

            {/* START OF Directory */}

            {mainstate === 0 && <Description text="Take a moment to learn. Read up on three benefits of gardening at home!" />}
            {mainstate === 0 && <HandsPlanet />}
            {mainstate === 0 && <div className="directory">
              <div className="ButtonCont">
                <ButtonUI text="1. Sustainability" onClick={Sust} />
                {/* <MenuText text="Why is gardening at home so good for the environment? Giving you the scoop on pesticides, food waste, and more!" /> */}
              </div>
              <div className="ButtonCont">
                <ButtonUI text="2. Health & Wellness" onClick={Well} />
                {/* <MenuText text="Let's talk about YOU! How can gardening benefit your mental, and physical wellbeing?" /> */}
              </div>
              <div className="ButtonCont">
                <ButtonUI text="3. Saving the Bees" onClick={Bees} />
                {/* <MenuText text="All about bees- why do we need them, and how can we help support them" /> */}
              </div>
            </div>}




            {/* END OF Directory */}

            {/* START OF SUSTAINABILITY */}
            {mainstate === 1 && <div className="infoContent">

              <Ecology />
              <Description text="How does gardening help the environment?" />
              <SmallDescription text="Growing your food organically (without pesticides and herbicides) will help the earth by preventing air and water pollution. It will also reduce the use of fossil fuels that comes from the transport of fresh produce from all around the world to your supermarket." />
              <Description text="Control what goes on and in what you grow" />
              <SmallDescription text="Supermarket fruits and vegetables contain less nutrients than they used to. But one thing they aren’t lacking on is pesticides." />
              <div className="cart">
                <div className="groceries">
                  <Groceries
                    left={strawberrystate ? 80 : 0}
                    top={strawberrystate ? 290 : 0}
                    onClick={HandleStraw} />
                  <Groceries
                    src="celery.png"
                    left={celerystate ? 10 : 0}
                    top={celerystate ? 290 : 0}
                    onClick={HandleCel} />
                  <Groceries
                    src="cucumber1.png"
                    left={cucumberstate ? -60 : 0}
                    top={cucumberstate ? 290 : 0}
                    onClick={HandleCuc} />
                </div>
                {strawfact === false && celeryfact === false && cucumberfact === false && <Description text="Learn about these grocery items by clicking to add them to your cart" />}
                {strawfact === true && <Description text="Strawberries may contain up to 40 different pesticides" />}
                {celeryfact === true && <Description text="Celery may contain more than 60 different pesticides" />}
                {cucumberfact === true && <Description text="Cucumber skin may contain more than 80 different pesticides" />}
                <Cart />
              </div>


              <Description text="Prevent more food waste by gardening at home" />
              <SmallDescription text="Organic waste is the 2nd highest component of landfills in the US. It is estimated that a whopping 30% of the food supply is wasted. This means about 20 pounds per person per month." />
              <Description text="This means, daily:" />
              <VegSlider onClick={HandleVeg}
                number={vegnumber}
                text={vegfact}
                src={vegimg}
              />

              <Description text="are thrown out..." />
              <div><SmallDescription text="Food scraps or trimmings that aren’t consumed can be added to the compost bin, which can then be returned to the garden for its good nutrients." /></div>
              <Description text="And what about food packaging?" />
              <SmallDescription text="(Click the plastic wrap and packaging to find out)" />
              <Wrap
                src={wrapstate ? "wrap_open.svg" : "wrap_closed.svg"}
                onClick={HandleWrap}

              />
              <Herbs
                opacity={herbsstate ? 1 : 0}
                rotate={herbsstate ? 0 : -20}
                left={herbsstate ? 0 : -250}
                onClick={HandleHerbs}
              />
              
            </div>}


            {/* END OF SUSTAINABILITY */}

            {/* START OF WELLNESS */}
            {mainstate === 2 && <div className="infoContent">

              <Brain />
              <Description text="Gardening improves mental health" />
              <SmallDescription text="Gardening can help reduce symptoms of depression and anxiety. It gives you a chance to focus on something and put your mind to work with a goal and a task in mind" />
              <GardeningGirl />
              <Description text="Feeling of accomplishment" />
              <SmallDescription text="The sense of pride and accomplishment that comes from eating that first tomato or snap pea from your backyard will amaze you. It doesn’t just have to be that first ever crop either – that feeling often extends year after year." />
              <Watercan />
              <Description text="Physical activity" />
              <SmallDescription text="When you take the time to prepare, plant, weed, water, and harvest your own garden, you are getting sunshine, fresh air, and physical activity. All that digging, planting and weeding burns calories and strengthens your heart." />
            </div>}
            {/* END OF WELLNESS */}

            {/* START OF BEES */}
            {mainstate === 3 && <div className="infoContent">

              <Bee />
              <Description text="By creating a bee-friendly garden, you can do your part to help save our important bees." />
              <SmallDescription text="Since 2010, the United States has suffered a loss of 40% of its local honeybees. Native bee species are dying off too, with many of them categorized as either endangered or significantly declining. " />
              {/* <div className="BlankBox">
              <PlantDetailsLarge src="flowericon.png" text="40% of global food production relies on pollination recieved from bees" />
              <PlantDetailsLarge src="flowericon.png" text="Bees also provide opportunities for income diversity with low start-up costs through diverse products and services; this includes collecting honey, pollen, beeswax, bee venom and royal jelly, as well as pollination services and more!" />
            </div> */}

              <LargeTitles text="How YOU can help:" />
              <Description text="1: By growing plants! No garden is too small to help our favourite pollinators. One of the best plants to incorporate into your garden to support bees is Echinacea, aka cone flower" />
              <SmallDescription text="Click the watering can to make the flowers grow!" />
              <div className="watering">
                <PestBee
                  width="10%"
                  left="60"
                  top={grow ? "30" : "0"}
                  opacity={grow ? "1" : "0"}
                  transitionDelay="2"
                />
                <Watering
                  onClick={Water}
                  opacitySmall={grow ? "0" : "1"}
                  opacityBig={grow ? "1" : "0"}
                  opacityDrop={rotate ? "1" : "0"}
                  rotate={rotate ? "70" : "0"}
                  onMouseLeave={Rotate}
                />
              </div>

              <Description text="2: When gardening, don't use harsh pesticides. Opt for natural alternatives instead, which can include certain varieties of plants" />
              <SmallDescription text="Click the pesticide bottle to remove!" />
              <div className="pesticide">
                <PestBee
                  left={bee ? "30" : "0"}
                  top="30"
                  opacity={bee ? "1" : "0"}
                />
                <PestBee
                  left={bee ? "60" : "30"}
                  top="30"
                  opacity={bee ? "1" : "0"}
                />
                <PestBee
                  left={bee ? "30" : "60"}
                  top="30"
                  opacity={bee ? "1" : "0"}
                />

                <PestCan className="can" src="pesticide.png" width="30%" onClick={Can}
                  opacity={can ? "1" : "0"} />
                <img src="tulip.svg" width="100%" />
              </div>



            </div>}
            {/* END OF BEES */}


            {/*Start of quiz intro*/}
            {mainstate === 3 && <div className="infoContent">
              <Description text="Now, it’s time to find out what plants are best for you!" />
              <SmallDescription text="Through a brief questionnaire, Garden will be able to find perfect recommendations for plants that you can grow at home based on your climate, interest, and resources." />
              <MainButton text="Let's Start the Quiz!" onClick={() => router.push('/quiz/question1')} />

            </div>}

            <div className="navContent">
              {mainstate === 1 && <MainButton onClick={Well} text={<>Wellness Benefits<VscArrowRight /></>} />}
              {mainstate === 2 && <MainButton onClick={Sust} text={<><VscArrowLeft />Sustainability</>} />}
              {mainstate === 2 && <MainButton onClick={Bees} text={<>Saving the Bees<VscArrowRight /></>} />}
              {mainstate === 3 && <MainButton onClick={Well} text={<><VscArrowLeft />Wellness Benefits</>} />}
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default Info
