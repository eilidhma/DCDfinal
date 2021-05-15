import { useRouter } from 'next/router';
import React, { useDebugValue, useEffect, useState } from 'react';
//for garden
import MainButton from '../../comps/MainButton';
import LargeTitles from '../../comps/LargeTitles';
import MainImg from '../../comps/MainImg';
import Options from '../../comps/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
//for test
import Menu from '../../comps/HambMenu';
import Logo from '../../comps/Logo';
import Clouds from '../../comps/Clouds';
import Garden from '../../comps/Garden';
import Description from '../../comps/DescriptiveText';


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
        src: "../coneflower.svg",
        fact: "Produce chemicals to prevent growth in competing plants!",
        bee: true,
        sun: "Needs full to partial sun",
        water: "Drought tolerant! But will thrive with the occasional water"
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
        fact: "Gets its namesake from its unique leaf structure!",
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
        fact: "People have been growing carrots for over 5,000 years!",
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
        sun: "Prefers partial sun, can survive low light",
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
        title: "Sedum", //NEED
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



export default function ResultsTEST() {

    const [choices, setChoices] = useState({
        climate: null,
        maintenance: null,
        location: null,
        type: null
    })
    const [name, setName] = useState(null)


    const [cardstate, setCardState] = useState(false)
    


    useEffect(() => {
        AOS.init({});
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
            // console.log(nameobj)
            setName(nameobj + ", here's what you should plant!")

        }
    }, [])

    return <div className="garden">
        <div className="background"><Clouds /></div>
        <div className="app">
            <div className="main">

                <Menu/>

                <div className="content">
                    <LargeTitles text={name} />
                    <Description text="click each plant for details!"/>
                    <p>{choices.climate}</p>
                    {suggestions === "one" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />

                        )
                    })}

                    {suggestions === "two" && cards.map((value, index) => {
                        return (
                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "three" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "four" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "five" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "six" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "seven" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "eight" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "nine" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "ten" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "eleven" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee
                            />
                        )
                    })}

                    {suggestions === "twelve" && cards.map((value, index) => {
                        return (

                            cardstate === true && <Options
                                key={index}
                                title={value.title}
                                src={value.src}
                                climate={value.climate}
                                goodIn={value.goodIn}
                                category={value.category}
                                maintenance={value.maintenance}
                                maintenance={value.maintenance}
                                sun={value.sun}
                                water={value.water}
                                fact={value.fact}
                            //still need bee

                                    />
                                )
                            })}
                {suggestions === "one" && <Garden
                src1="../blackberryR.svg"
                src2="../raspberryR.svg"
                src3="../blueberryR.svg"
                onClick1={() => router.push('/details/blackberry')}
                onClick2={() => router.push('/details/raspberry')}
                onClick3={() => router.push('/details/blueberry')}
                />}
                {suggestions === "two" && <Garden
                src1="../milkweedR.svg"
                src2="../daisyR.svg"
                src3="../coneflowerR.svg"
                onClick1={() => router.push('/details/milkweed')}
                onClick2={() => router.push('/details/daisy')}
                onClick3={() => router.push('/details/coneflower')}
                />}
                {suggestions === "three" && <Garden
                src1="../witchhazelR.svg"
                src2="../lungwortR.svg"
                src3="../sunflowerR.svg"
                onClick1={() => router.push('/details/witchhazel')}
                onClick2={() => router.push('/details/lungwort')}
                onClick3={() => router.push('/details/sunflower')}
                />}
                {suggestions === "four" && <Garden
                src1="../carrotR.svg"
                src2="../wheatR.svg"
                src3="../sweetcornR.svg"
                onClick1={() => router.push('/details/carrot')}
                onClick2={() => router.push('/details/wheat')}
                onClick3={() => router.push('/details/sweetcorn')}
                />}
                {suggestions === "five" && <Garden
                src1="../bokchoyR.svg"
                src2="../eggplantR.svg"
                src3="../riceR.svg"
                onClick1={() => router.push('/details/bokchoy')}
                onClick2={() => router.push('/details/eggplant')}
                onClick3={() => router.push('/details/rice')}
                />}
                {suggestions === "six" && <Garden
                src1="../anthurium.png"
                src2="../cannabis.png"
                src3="../hibiscusR.svg"
                onClick1={() => router.push('/details/anthurium')}
                onClick2={() => router.push('/details/cannabis')}
                onClick3={() => router.push('/details/hibiscus')}
                />}
                {suggestions === "seven" && <Garden
                src1="../chinesecabbageR.svg"
                src2="../pumpkin.png"
                src3="../bananaR.svg"
                onClick1={() => router.push('/details/chinesecabbage')}
                onClick2={() => router.push('/details/pumpkin')}
                onClick3={() => router.push('/details/banana')}
                />}
                {suggestions === "eight" && <Garden
                src1="../cosmosR.svg"
                src2="../chrysanthemum.png"
                src3="../angelstrumpetR.svg"
                onClick1={() => router.push('/details/cosmos')}
                onClick2={() => router.push('/details/chrysanthemum')}
                onClick3={() => router.push('/details/angelstrumpet')}
                />}
                {suggestions === "nine" && <Garden
                src1="../greenbeansR.svg"
                src2="../tomatoplant.png"
                src3="../basilR.svg"
                onClick1={() => router.push('/details/greenbeans')}
                onClick2={() => router.push('/details/tomatoplant')}
                onClick3={() => router.push('/details/basil')}
                />}
                {suggestions === "ten" && <Garden
                src1="../sedum.png"
                src2="../lavendar.png"
                src3="../yuccaR.svg"
                onClick1={() => router.push('/details/sedum')}
                onClick2={() => router.push('/details/lavender')}
                onClick3={() => router.push('/details/yucca')}
                />}
                {suggestions === "eleven" && <Garden
                src1="../firecrackerR.svg"
                src2="../purslane.png"
                src3="../phloxR.svg"
                onClick1={() => router.push('/details/firecracker')}
                onClick2={() => router.push('/details/purslane')}
                onClick3={() => router.push('/details/phlox')}
                />}
                {suggestions === "twelve" && <Garden
                src1="../agave.png"
                src2="../pricklypear.png"
                src3="../pomegranateR.svg"
                onClick1={() => router.push('/details/agave')}
                onClick2={() => router.push('/details/pricklypear')}
                onClick3={() => router.push('/details/pomegranate')}
                />}
                <div className="finish" onClick={() => router.push('/end')}><MainButton text="Finish" /></div>
            </div>
        </div>
    </div>
</div>


}
