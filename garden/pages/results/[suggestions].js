import { useRouter } from 'next/router';
import React, { useDebugValue, useEffect, useState } from 'react';
//for garden
import MainButton from '../../comps/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LargeTitles from '../../comps/LargeTitles';
import MainImg from '../../comps/MainImg';
import Options from '../../comps/Results';
//for test
import Menu from '../../comps/HambMenu';
import Logo from '../../comps/Logo';
import Clouds from '../../comps/Clouds';
import Garden from '../../comps/Garden';
import Description from '../../comps/DescriptiveText';
import BeeInfo from '../../comps/BeeInfo';
import Nav from '../../comps/Menu'
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'



const TempPotsProduce = [
    {
        title: "Blackberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "low",
        src: "../blackberry.svg",
        fact: "High in antioxidants!",
        bee: true,
        sun: "Prefers full sun",
        water: "Keep moist"
    },
    {
        title: "Raspberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "medium",
        src: "../raspberry.png",
        fact: "Can symbolize kindness!",
        bee: true,
        sun: "Prefers full sun",
        water: "Keep moist"
    },
    {
        title: "Blueberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "high",
        src: "../blueberry.png",
        fact: "One of the only naturally blue foods!",
        bee: true,
        sun: "Prefers full sun",
        water: "Keep moist"
    }
];

const TempPotsFlowers = [
    {
        title: "Milkweed",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "low",
        src: "../milkweed.png",
        fact: "Poisonous- Caution!",
        bee: true,
        sun: "Needs full sun",
        water: 'When top inch of soil is dry'
    },
    {
        title: "Daisies",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "medium",
        src: "../daisy.svg",
        fact: "Found everywhere on eath but Antarctica!",
        bee: true,
        sun: "Needs full sun",
        water: "One to two inches a week"
    },
    {
        title: "Coneflowers",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../coneflower.png",
        fact: "Produce chemicals to prevent growth in competing plants!",
        bee: true,
        sun: "Needs full to partial sun",
        water: "Drought tolerant! Thrives with the occasional water"
    }
];

const TempGroundFlowers = [
    {
        title: "Witch Hazel",
        climate: "temperate",
        goodIn: "ground",
        category: "flowers",
        maintenance: "low",
        src: "../witchhazel.png",
        fact: "Deer resistant!",
        bee: true,
        sun: "Needs full to partial sun",
        water: "Can survive on rainfall alone!"
    },
    {
        title: "Lungwort",
        climate: "temperate",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../lungwort.png",
        fact: "Namesake's from its unique leaf structure!",
        bee: true,
        sun: "Needs full to partial sun",
        water: "When soil is completly dry"
    },
    {
        title: "Sunflower",
        climate: "temperate",
        goodIn: "pots/garden",
        category: "flowers",
        maintenance: "high",
        src: "../sunflower.svg",
        fact: "Tallest sunflower recorded was over 30 feet tall!",
        bee: false,
        sun: "Needs full sun",
        water: "Throughly water once a week"
    },
];

const TempGroundProduce = [
    {
        title: "Carrot",
        climate: "temperate",
        goodIn: "ground",
        category: "produce",
        maintenance: "low",
        src: "../carrot.png",
        fact: "Carrots have been grown for over 5,000 years!",
        bee: true,
        sun: "Prefers full sun but can manage with partial",
        water: "Throughly water once a week"
    },
    {
        title: "Wheat",
        climate: "temperate",
        goodIn: "ground",
        category: "produce",
        maintenance: "low",
        src: "../wheat.png",
        fact: "Was first planted in 1777 as a hobby crop!",
        bee: false,
        sun: "For best results, full sun is required",
        water: "Water once a week, mist on hot days"
    },
    {
        title: "Sweet corn",
        climate: "temperate",
        goodIn: "ground",
        category: "produce",
        maintenance: " high",
        src: "../sweetcorn.png",
        fact: "Leaves have been used as chewing gum!",
        bee: false,
        sun: "Needs full sun",
        water: "Alternate between a small water and a big water every week"
    }
];

const TropPotsProduce = [
    {
        title: "Bok Choy",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "low",
        src: "../bokchoy.png",
        fact: "Has been grown in China for over 5,000 years!",
        bee: false,
        sun: "Grows best in partial shade",
        water: "Once a week, monitor to ensure soil remains moist"
    },
    {
        title: "Eggplant",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "medium",
        src: "../eggplant.png",
        fact: "Eggplants aren't really veggies- they're berries!",
        bee: false,
        sun: "Prefers full sun, can manage with partial sun",
        water: "Throughly water once a week"
    },
    {
        title: "Rice",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "high",
        src: "../rice.png",
        fact: "The oldest known food that is still widely consumed today!",
        bee: false,
        sun: "Needs full sun",
        water: "Give lots of water- soil should always be moist"
    }
];

const TropPotsFlowers = [
    {
        title: "Anthurium",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "low",
        src: "../anthurium.png",
        fact: "Symbolizes hospitality!",
        bee: false,
        sun: "Prefers partial sun, survives low light",
        water: "Once a week, mist occasionally"
    },
    {
        title: "Cannabis",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "medium",
        src: "../cannabis.png",
        fact: "Great chronic pain reliever!",
        bee: true,
        sun: "Prefers full sun",
        water: "When top inch of soil feels dry"
    },
    {
        title: "Hibiscus",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../hibiscus.png",
        fact: "Both its buds and flowers are edible!",
        bee: true,
        sun: "Needs full sun",
        water: "Keep moist"
    }
];


const TropGroundFlowers = [
    {
        title: "Cosmos",
        climate: "tropical",
        goodIn: "ground",
        category: "flowers",
        maintenance: "low",
        src: "../cosmos.png",
        fact: "Can grow up to 3-6 feet tall!",
        bee: true,
        sun: "Prefers full sun",
        water: "Let soil dry before watering"
    },
    {
        title: "Chrysanthemum",
        climate: "tropical",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../chrysanthemum.png",
        fact: "Chrysanthemum tea has anti-viral properties!",
        bee: false,
        sun: "Prefers full sun",
        water: "Once a week, mist occasionally"

    },
    {
        title: "Angels Trumpet",
        climate: "tropical",
        goodIn: "ground",
        category: "flowers",
        maintenance: "high",
        src: "../angelstrumpet.png",
        fact: "Grows in the form of a bush or small tree up to 36 feet!",
        bee: false,
        sun: "Prefers partial sun to low light",
        water: "Throughly water once a week"
    }
];

const TropGroundProduce = [
    {
        title: "Chinese Cabbage",
        climate: "tropical",
        goodIn: "ground",
        category: "produce",
        maintenance: "low",
        src: "../chinesecabbage.png",
        fact: "Cousins with bok choy!",
        bee: false,
        sun: "Grows best in partial shade",
        water: "Once a week, monitor to ensure soil remains moist"
    },
    {
        title: "Pumpkin",
        climate: "tropical",
        goodIn: "ground",
        category: "produce",
        maintenance: "medium",
        src: "../pumpkin.png",
        fact: "The word pumpkin first showed up in Cinderella!",
        bee: false,
        sun: "Can thrive in any light",
        water: "Keep moist"
    },
    {
        title: "Banana Tree",
        climate: "tropical",
        goodIn: "garden",
        category: "produce",
        maintenance: "high",
        src: "../bananas.png",
        fact: "The worlds largest herb!",
        bee: false,
        sun: "Prefers full sun",
        water: "One inch of water weekly"
    }
];

const AridPotsProduce = [
    {
        title: "Green Beans",
        climate: "arid",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "low",
        src: "../greenbeans.png",
        fact: "Can also be yellow, purple, or even speckled red!",
        bee: false,
        sun: "Prefers full sun, can manage with partial sun",
        water: "Give a half inch of water daily"
    },
    {
        title: "Tomatoe",
        climate: "arid",
        goodIn: "pots/garden",
        category: "produce",
        maintenance: "moderate",
        src: "../tomatoplant.png",
        fact: "The worlds most popular fruit!",
        bee: false,
        sun: "Grows best in partial shade",
        water: "Once a week, water between one to two inches"
    },
    {
        title: "Basil",
        climate: "arid",
        goodIn: "pots/garden",
        category: "produce",
        maintenance: "high",
        src: "../basil.png",
        fact: "Belongs to the mint family!",
        bee: false,
        sun: "Grows best in all day partial shade",
        water: "Once a week, mist daily to ensure soil remains moist"
    }
];

const AridPotsFlowers = [
    {
        title: "Sedum",
        climate: "arid",
        goodIn: "pots/garden",
        category: "flowers",
        maintenance: "low",
        src: "../sedum.png",
        fact: "Produce star-shaped flowers!",
        bee: true,
        sun: "Can tolerate any level of sun but will thrive in full sun",
        water: "Drought tolerant! Water when soil is fully dry"
    },
    {
        title: "English Lavender",
        climate: "arid",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "moderate",
        src: "../lavendar.png",
        fact: "Used for perfume before baths were common practice!",
        bee: true,
        sun: "Needs full sun",
        water: "Drought tolerant! Water when soil is fully dry"
    },
    {
        title: "Yucca",
        climate: "arid",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../yuccaR.svg",
        fact: "Can bear edible fruit!",
        bee: true,
        sun: "Thrives in full sun or bright, indirect sun",
        water: "Drought tolerant! Water when top half of soil is fully dry"
    }
];

const AridGroundFlowers = [
    {
        title: "Firecracker Plant",
        climate: "arid",
        goodIn: "ground",
        category: "flowers",
        maintenance: "low",
        src: "../firecracker.png",
        fact: "A favourite amung hummingbirds!",
        bee: true,
        sun: "Can tolerate any level of sun but will thrive in full sun",
        water: "When top half of soil is fully dry"
    },
    {
        title: "Purslane",
        climate: "arid",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../purslane.png",
        fact: "Can bloom year round!",
        bee: true,
        sun: "Needs full sun",
        water: "Water thoroughly once a week"
    },
    {
        title: "Phlox",
        climate: "arid",
        goodIn: "ground",
        category: "flowers",
        maintenance: "high",
        src: "../phlox.png",
        fact: "Can be used to help with indigestion!",
        bee: true,
        sun: "Can tolerate any level of sun but will thrive in partial sun",
        water: "Keep soil moist"
    }
];

const AridGroundProduce = [
    {
        title: "Agave",
        climate: "arid",
        goodIn: "ground",
        category: "produce",
        maintenance: "low",
        src: "../agave.png",
        fact: "Lives 10-25 years, but only flowers once!",
        bee: false,
        sun: "Can tolerate partial sun but will thrive in full sun",
        water: "Drought tolerant! Water two to three times per month"
    },
    {
        title: "Prickly Pear",
        climate: "arid",
        goodIn: "ground",
        category: "produce",
        maintenance: "medium",
        src: "../pricklypear.png",
        fact: "Also known as tuna!",
        bee: false,
        sun: "Needs full sun",
        water: "Drought tolerant! Water one to two times per month"
    },
    {
        title: "Pomegranate",
        climate: "arid",
        goodIn: "ground",
        category: "produce",
        maintenance: "high",
        src: "../pomegranate.png",
        fact: "A super healthy, super fruit!",
        bee: false,
        sun: "Prefers full sun, can tolerate partial sun",
        water: "Can survive on rainwater alone!"
    }
];



export default function Results() {

    const [choices, setChoices] = useState({
        climate: null,
        maintenance: null,
        location: null,
        type: null
    })
    const [name, setName] = useState(null)

    const [menuopen, setMenuOpen] = useState(false)

    const OpenMenu = () => {
      setMenuOpen(!menuopen)
    }
    const CloseMenu = () => {
      setMenuOpen(!menuopen)
    }

    const [cardstate, setCardState] = useState(false)


    const [plant1, setPlant1] = useState(false)
    const [plant2, setPlant2] = useState(false)
    const [plant3, setPlant3] = useState(false)
    const [hide, setHide] = useState(false)
    const [dim, setDim] = useState(false)
    const [close1, setClose1] = useState(true)
    const [close2, setClose2] = useState(true)
    const [close3, setClose3] = useState(true)




    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    const router = useRouter();
    const { suggestions } = router.query;

    var cards = [];
    if (suggestions === "one") {
        cards = TempPotsProduce;
    }

    if (suggestions === "two") {
        cards = TempPotsFlowers;
    }

    if (suggestions === "three") {
        cards = TempGroundFlowers;
    }

    if (suggestions === "four") {
        cards = TempGroundProduce;
    }

    if (suggestions === "five") {
        cards = TropPotsProduce;
    }

    if (suggestions === "six") {
        cards = TropPotsFlowers;
    }

    if (suggestions === "seven") {
        cards = TropGroundProduce;
    }

    if (suggestions === "eight") {
        cards = TropGroundFlowers;
    }

    if (suggestions === "nine") {
        cards = AridPotsProduce;
    }

    if (suggestions === "ten") {
        cards = AridPotsFlowers;
    }

    if (suggestions === "eleven") {
        cards = AridGroundFlowers;
    }

    if (suggestions === "twelve") {
        cards = AridGroundProduce;
    }

    if (bee) {
        var beeInfo = document.getElementsByClassName("beeInfo");
        beeInfo.style.visibility = "hidden";
    }

    const Expand1 = () => {
        setDim(true)
        setClose1(false)
        setPlant1(true)
        setClose2(true)
        setPlant2(false)
        setClose3(true)
        setPlant3(false)
    }
    const Expand2 = () => {
        setDim(true)
        setClose2(false)
        setPlant2(true)
        setClose1(true)
        setPlant1(false)
        setClose3(true)
        setPlant3(false)
    }
    const Expand3 = () => {
        setDim(true)
        setClose3(false)
        setPlant3(true)
        setClose1(true)
        setPlant1(false)
        setClose2(true)
        setPlant2(false)
    }

    const Close1 = () => {
        setDim(false)
        setClose1(true)
        setPlant1(false)
    }
    const Close2 = () => {
        setDim(false)
        setClose2(true)
        setPlant2(false)
    }
    const Close3 = () => {
        setDim(false)
        setClose3(true)
        setPlant3(false)
    }


    useEffect(() => {
        if (process.browser) {
            var results = sessionStorage.getItem("choices");
            var obj = JSON.parse(results)
            var name = sessionStorage.getItem("name")
            var nameobj = JSON.parse(name)
            var key = obj.climate + obj.location + obj.type
            console.log(obj)
            console.log(obj.climate)
            console.log(obj.location)
            console.log(obj.type)
            setName(nameobj + ", here's what you should plant!")

        }
    }, [])

    return <div className="garden">
        <div className="background"><Clouds /></div>
        <div className="app">
            <div className="main">

                <Menu />
                {menuopen === false && <div className="Nav">
                <HiMenu onClick={OpenMenu} color="white" size={40}/>
                </div>}
                {menuopen === true && <div className="Nav">
                <AiOutlineClose onClick={CloseMenu} color="white" size={40}/>
                </div>}
                <Nav right={menuopen ? 10 : -100} opacity={menuopen ? 1 : 0}/>
                {menuopen === false && <div data-aos="fade" className="content">
                    <LargeTitles opacity={dim ? 0.2 : 1} text={name} />
                    <Description opacity={dim ? 0 : 1} text="Click each plant for details and care instructions!" />

                    {suggestions === "one" && <Garden
                        src1="../blackberryR.svg"
                        src2="../raspberryR.svg"
                        src3="../blueberryR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "one" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Blackberries"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="low"
                            src="../blackberry.png"
                            fact="High in antioxidants!"
                            bee={true}
                            sun="Prefers full sun"
                            water="Keep moist"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : 0} />
                    </div>}
                    {suggestions === "one" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Raspberries"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="medium"
                            src="../raspberry.png"
                            fact="Can symbolize kindness!"
                            bee={true}
                            sun="Prefers full sun"
                            water="Keep moist"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : 0}
                        />
                    </div>}
                    {suggestions === "one" && close3 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Blueberries"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="high"
                            src="../blueberry.png"
                            fact="One of the only naturally blue foods!"
                            bee={true}
                            sun="Prefers full sun"
                            water="Keep moist"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : 0}
                        />
                    </div>}
                    {suggestions === "two" && <Garden
                        src1="../milkweedR.svg"
                        src2="../daisyR.svg"
                        src3="../coneflowerR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "two" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Milkweed"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="low"
                            src="../milkweed.png"
                            fact="Poisonous- Caution!"
                            bee={true}
                            sun="Needs full sun"
                            water='When top inch of soil is dry'
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "two" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Daisies"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="medium"
                            src="../daisy.svg"
                            fact="Found everywhere on eath but Antarctica!"
                            bee={true}
                            sun="Needs full sun"
                            water="One to two inches a week"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "two" && close3 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Coneflowers"
                            climate="temperate"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="high"
                            src="../coneflower.png"
                            fact="Produce chemicals to prevent growth in competing plants!"
                            bee={true}
                            sun="Needs full to partial sun"
                            water="Drought tolerant! Thrives with occasional water"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "three" && <Garden
                        src1="../witchhazelR.svg"
                        src2="../lungwortR.svg"
                        src3="../sunflowerR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "three" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Witch Hazel"
                            climate="temperate"
                            goodIn="ground"
                            category="flowers"
                            maintenance="low"
                            src="../witchhazel.png"
                            fact="Deer resistant!"
                            bee={true}
                            sun="Needs full to partial sun"
                            water="Can survive on rainfall alone!"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "three" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Lungwort"
                            climate="temperate"
                            goodIn="ground"
                            category="flowers"
                            maintenance="medium"
                            src="../lungwort.png"
                            fact="Namesake's from its unique leaf structure!"
                            bee={true}
                            sun="Needs full to partial sun"
                            water="When soil is completly dry"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "three" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Sunflower"
                            climate="temperate"
                            goodIn="pots/garden"
                            category="flowers"
                            maintenance="high"
                            src="../sunflower.svg"
                            fact="Tallest sunflower recorded was over 30 feet tall!"
                            bee={false}
                            sun="Needs full sun"
                            water="Throughly water once a week"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "four" && <Garden
                        src1="../carrotR.svg"
                        src2="../wheatR.svg"
                        src3="../sweetcornR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "four" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Carrot"
                            climate="temperate"
                            goodIn="ground"
                            category="produce"
                            maintenance="low"
                            src="../carrot.png"
                            fact="Has been grown for over 5,000 years!"
                            bee={true}
                            sun="Prefers full sun"
                            water="Throughly water once a week"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "four" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Wheat"
                            climate="temperate"
                            goodIn="ground"
                            category="produce"
                            maintenance="low"
                            src="../wheat.png"
                            fact="Was first planted in 1777 as a hobby crop!"
                            bee={false}
                            sun="Full sun is required"
                            water="Water once a week, mist on hot days"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "four" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Sweet corn"
                            climate="temperate"
                            goodIn="ground"
                            category="produce"
                            maintenance=" high"
                            src="../sweetcorn.png"
                            fact="Leaves have been used as chewing gum!"
                            bee={false}
                            sun="Needs full sun"
                            water="Alternate between a small water and a big water every week"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "five" && <Garden
                        src1="../bokchoyR.svg"
                        src2="../eggplantR.svg"
                        src3="../riceR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "five" && close1 === false && <div className="optionsCard">

                        <Options
                            title="Bok Choy"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="low"
                            src="../bokchoy.png"
                            fact="Grown in China for over 5,000 years!"
                            bee={false}
                            sun="Grows best in partial shade"
                            water="Once a week and keep soil moist"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "five" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Eggplant"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="medium"
                            src="../eggplant.png"
                            fact="Eggplants aren't really veggies- they're berries!"
                            bee={false}
                            sun="Prefers full sun"
                            water="Throughly water once a week"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "five" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Rice"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="high"
                            src="../rice.png"
                            fact="The oldest known food that is still widely consumed today!"
                            bee={false}
                            sun="Needs full sun"
                            water="Give lots of water and keep moist"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "six" && <Garden
                        src1="../anthurium.png"
                        src2="../cannabis.png"
                        src3="../hibiscusR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "six" && close1 === false && <div className="optionsCard">

                        <Options
                            title="Anthurium"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="low"
                            src="../anthurium.png"
                            fact="Symbolizes hospitality!"
                            bee={false}
                            sun="Prefers partial sun"
                            water="Once a week, mist occasionally"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "six" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Cannabis"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="medium"
                            src="../cannabis.png"
                            fact="Great chronic pain reliever!"
                            bee={true}
                            sun="Prefers full sun"
                            water="When top inch of soil feels dry"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "six" && close3 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Hibiscus"
                            climate="tropical"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="high"
                            src="../hibiscus.png"
                            fact="Both its buds and flowers are edible!"
                            bee={true}
                            sun="Needs full sun"
                            water="Keep moist"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "seven" && <Garden
                        src1="../chinesecabbageR.svg"
                        src2="../pumpkin.png"
                        src3="../bananaR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "seven" && close1 === false && <div className="optionsCard">

                        <Options
                            title="Chinese Cabbage"
                            climate="tropical"
                            goodIn="ground"
                            category="produce"
                            maintenance="low"
                            src="../chinesecabbage.png"
                            fact="Cousins with bok choy!"
                            bee={false}
                            sun="Grows best in partial shade"
                            water="Once a week and keep soil moist"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "seven" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Pumpkin"
                            climate="tropical"
                            goodIn="ground"
                            category="produce"
                            maintenance="medium"
                            src="../pumpkin.png"
                            fact="The word pumpkin first showed up in Cinderella!"
                            bee={false}
                            sun="Can thrive in any light"
                            water="Keep moist"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "seven" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Banana Tree"
                            climate="tropical"
                            goodIn="garden"
                            category="produce"
                            maintenance="high"
                            src="../bananas.png"
                            fact="The worlds largest herb!"
                            bee={false}
                            sun="Prefers full sun"
                            water="One inch of water weekly"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "eight" && <Garden
                        src1="../cosmosR.svg"
                        src2="../chrysanthemum.png"
                        src3="../angelstrumpetR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "eight" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Cosmos"
                            climate="tropical"
                            goodIn="ground"
                            category="flowers"
                            maintenance="low"
                            src="../cosmos.png"
                            fact="Can grow up to 3-6 feet tall!"
                            bee={true}
                            sun="Prefers full sun"
                            water="Let soil dry before watering"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "eight" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Chrysanthemum"
                            climate="tropical"
                            goodIn="ground"
                            category="flowers"
                            maintenance="medium"
                            src="../chrysanthemum.png"
                            fact="Chrysanthemum tea has anti-viral properties!"
                            bee={false}
                            sun="Prefers full sun"
                            water="Once a week, mist occasionally"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "eight" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Angels Trumpet"
                            climate="tropical"
                            goodIn="ground"
                            category="flowers"
                            maintenance="high"
                            src="../angelstrumpet.png"
                            fact="Grows in the form of a bush or small tree up to 36 feet!"
                            bee={false}
                            sun="Prefers partial sun"
                            water="Throughly water once a week"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "nine" && <Garden
                        src1="../greenbeansR.svg"
                        src2="../tomatoplant.png"
                        src3="../basilR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "nine" && close1 === false && <div className="optionsCard">

                        <Options
                            title="Green Beans"
                            climate="arid"
                            goodIn="pots/planters"
                            category="produce"
                            maintenance="low"
                            src="../greenbeans.png"
                            fact="Can also be yellow, purple, or even speckled red!"
                            bee={false}
                            sun="Prefers full sun"
                            water="Give a half inch of water daily"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "nine" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Tomato"
                            climate="arid"
                            goodIn="pots/garden"
                            category="produce"
                            maintenance="moderate"
                            src="../tomatoplant.png"
                            fact="The worlds most popular fruit!"
                            bee={false}
                            sun="Grows best in partial shade"
                            water="Once a week, one to two inches"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "nine" && close3 === false && <div className="optionsCard">

                        <Options
                            title="Basil"
                            climate="arid"
                            goodIn="pots/garden"
                            category="produce"
                            maintenance="high"
                            src="../basil.png"
                            fact="Belongs to the mint family!"
                            bee={false}
                            sun="Grows best in all day partial shade"
                            water="Once a week and keep soil moist"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "ten" && <Garden
                        src1="../sedumR.svg"
                        src2="../lavendar.png"
                        src3="../yuccaR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "ten" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Sedum"
                            climate="arid"
                            goodIn="pots/garden"
                            category="flowers"
                            maintenance="low"
                            src="../sedum.png"
                            fact="Produce star-shaped flowers!"
                            bee={true}
                            sun="Can tolerate any level of sun but will thrive in full sun"
                            water="Drought tolerant! Water when soil is fully dry"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "ten" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="English Lavender"
                            climate="arid"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="moderate"
                            src="../lavendar.png"
                            fact="Used for perfume before baths were common practice!"
                            bee={true}
                            sun="Needs full sun"
                            water="Drought tolerant! Water when soil is fully dry"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "ten" && close3 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Yucca"
                            climate="arid"
                            goodIn="pots/planters"
                            category="flowers"
                            maintenance="high"
                            src="../yuccaSmall.png"
                            fact="Can bear edible fruit!"
                            bee={true}
                            sun="Thrives in full sun or bright, indirect sun"
                            water="Drought tolerant! Water when top half of soil is fully dry"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "eleven" && <Garden
                        src1="../firecrackerR.svg"
                        src2="../purslane.png"
                        src3="../phloxR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "eleven" && close1 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Firecracker Plant"
                            climate="arid"
                            goodIn="ground"
                            category="flowers"
                            maintenance="low"
                            src="../firecracker.png"
                            fact="A favourite amung hummingbirds!"
                            bee={true}
                            sun="Thrives in full sun"
                            water="When top half of soil is fully dry"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "eleven" && close2 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Purslane"
                            climate="arid"
                            goodIn="ground"
                            category="flowers"
                            maintenance="medium"
                            src="../purslane.png"
                            fact="Can bloom year round!"
                            bee={true}
                            sun="Needs full sun"
                            water="Water thoroughly once a week"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "eleven" && close3 === false && <div className="optionsCard">
                        <BeeInfo />
                        <Options
                            title="Phlox"
                            climate="arid"
                            goodIn="ground"
                            category="flowers"
                            maintenance="high"
                            src="../phlox.png"
                            fact="Can be used to help with indigestion!"
                            bee={true}
                            sun="Thrives in partial sun"
                            water="Keep soil moist"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "twelve" && <Garden
                        src1="../agave.png"
                        src2="../pricklypear.png"
                        src3="../pomegranateR.svg"
                        onClick1={Expand1}
                        onClick2={Expand2}
                        onClick3={Expand3}
                        opacity={dim ? 0.2 : 1}
                    />}
                    {suggestions === "twelve" && close1 === false && <div className="optionsCard">
                        <Options
                            title="Agave"
                            climate="arid"
                            goodIn="ground"
                            category="produce"
                            maintenance="low"
                            src="../agave.png"
                            fact="Lives 10-25 years, but only flowers once!"
                            bee={false}
                            sun="Will thrive in full sun"
                            water="Drought tolerant! Water 2-3 times per month"
                            opacity={plant1 ? 1 : 0}
                            onClickClose={Close1}
                            zindex={plant1 ? 5 : -1} />
                    </div>}
                    {suggestions === "twelve" && close2 === false && <div className="optionsCard">
                        <Options
                            title="Prickly Pear"
                            climate="arid"
                            goodIn="ground"
                            category="produce"
                            maintenance="medium"
                            src="../pricklypear.png"
                            fact="Also known as tuna!"
                            bee={false}
                            sun="Needs full sun"
                            water="Drought tolerant! Water 1-2 times per month"
                            opacity={plant2 ? 1 : 0}
                            onClickClose={Close2}
                            zindex={plant2 ? 5 : -1}
                        />
                    </div>}
                    {suggestions === "twelve" && close3 === false && <div className="optionsCard">
                        <Options
                            title="Pomegranate"
                            climate="arid"
                            goodIn="ground"
                            category="produce"
                            maintenance="high"
                            src="../pomegranate.png"
                            fact="A super healthy, super fruit!"
                            bee={false}
                            sun="Prefers full sun"
                            water="Can survive on rainwater alone!"
                            opacity={plant3 ? 1 : 0}
                            onClickClose={Close3}
                            zindex={plant3 ? 5 : -1}
                        />
                    </div>}
                    <div className="finish" onClick={() => router.push('/end')}><MainButton opacity={dim ? 0 : 1} text="Finish" /></div>
                </div>}
            </div>
        </div>
    </div>



}
