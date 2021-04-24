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
import Menu from '../../comps/TestMenu';
import Logo from '../../comps/Logo';


const TempPotsProduce = [
    {
        title: "Blackberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "low",
        src: "../blackberries.png",
        fact: "High in antioxidants!",
        bee: true
    },
    {
        title: "Raspberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "medium",
        src: "../raspberries.png",
        fact: "Can symbolize kindness!",
        bee: true
    },
    {
        title: "Blueberries",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "high",
        src: "../blueberries.png",
        fact: "One of the only naturally blue foods!",
        bee: true
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
        bee: true
    },
    {
        title: "Daisies",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "medium",
        src: "../daisies.png",
        fact: "Found everywhere on eath but Antarctica!",
        bee: true
    },
    {
        title: "Coneflowers",
        climate: "temperate",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../coneflowers.png",
        fact: "Produce chemicals to prevent growth in competing plants!",
        bee: true
    }
];

const TempGroundFlowers = [
    {
        title: "Witch Hazel",
        climate: "temperate",
        goodIn: "ground",
        category: "flowers",
        maintenance: "low",
        src: "../WitchHazel.png",
        fact: "Deer resistant!",
        bee: true
    },
    {
        title: "Lungswort",
        climate: "temperate",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../lungswort.png",
        fact: "Gets its namesake from its unique leaf structure!",
        bee: true
    },
    {
        title: "Sunflower",
        climate: "temperate",
        goodIn: "pots/garden",
        category: "flowers",
        maintenance: "high",
        src: "../sunflower.png",
        fact: "Tallest sunflower recorded was over 30 feet tall!",
        bee: false
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
        bee: true
    },
    {
        title: "Wheat",
        climate: "temperate",
        goodIn: "ground",
        category: "produce",
        maintenance: "low",
        src: "../wheat.png",
        fact: "Was first planted in 1777 as a hobby crop!",
        bee: false
    },
    {
        title: "Sweet corn",
        climate: "temperate",
        goodIn: "ground",
        category: "produce",
        maintenance: " high",
        src: "../sweetcorn.png",
        fact: "Leaves have been used as chewing gum!",
        bee: false
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
        bee: false
    },
    {
        title: "Eggplant",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "medium",
        src: "../eggplant.png",
        fact: "Eggplants aren't really veggies- they're berries!",
        bee: false
    },
    {
        title: "Rice",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "produce",
        maintenance: "high",
        src: "../rice.png",
        fact: "The oldest known food that is still widely consumed today!",
        bee: false
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
        bee: false
    },
    {
        title: "Cannabis",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "medium",
        src: "../cannabis.png",
        fact: "Great chronic pain reliever!",
        bee: true
    },
    {
        title: "Hibiscus",
        climate: "tropical",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../hibiscus.png",
        fact: "Both its buds and flowers are edible!",
        bee: true
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
        bee: true
    },
    {
        title: "Chrysanthemum",
        climate: "tropical",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../Chrysanthemum.png",
        fact: "Chrysanthemum tea has anti-viral properties!",
        bee: false
    },
    {
        title: "Angels Trumpet",
        climate: "tropical",
        goodIn: "ground",
        category: "flowers",
        maintenance: "high",
        src: "../angelstrumpet.png",
        fact: "Grows in the form of a bush or small tree up to 36 feet!",
        bee: false
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
        bee: false
    },
    {
        title: "Pumpkin",
        climate: "tropical",
        goodIn: "ground",
        category: "produce",
        maintenance: "medium",
        src: "../pumpkin.png",
        fact: "The word pumpkin first showed up in Cinderella!",
        bee: false
    },
    {
        title: "Banana Tree",
        climate: "tropical",
        goodIn: "garden",
        category: "produce",
        maintenance: "high",
        src: "../banana.png",
        fact: "The worlds largest herb!",
        bee: false
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
        bee: false
    },
    {
        title: "Tomatoe",
        climate: "arid",
        goodIn: "pots/garden",
        category: "produce",
        maintenance: "moderate",
        src: "../tomato.png",
        fact: "The worlds most popular fruit!",
        bee: false
    },
    {
        title: "Basil",
        climate: "arid",
        goodIn: "pots/garden",
        category: "produce",
        maintenance: "high",
        src: "../basil.png",
        fact: "Belongs to the mint family!",
        bee: false
    }
];

const AridPotsFlowers = [
    {
        title: "Sedum",
        climate: "arid",
        goodIn: "pots/garden",
        category: "flowers",
        maintenance: "high",
        src: "../sedum.png",
        fact: "Produce star-shaped flowers!",
        bee: true
    },
    {
        title: "English Lavender",
        climate: "arid",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "moderate",
        src: "../englishlavender.png",
        fact: "Used for perfume before baths were common practice!",
        bee: true
    },
    {
        title: "Yucca",
        climate: "arid",
        goodIn: "pots/planters",
        category: "flowers",
        maintenance: "high",
        src: "../yucca.png",
        fact: "Can bear edible fruit!",
        bee: true
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
        bee: true
    },
    {
        title: "Purslane",
        climate: "arid",
        goodIn: "ground",
        category: "flowers",
        maintenance: "medium",
        src: "../purslane.png",
        fact: "Can bloom year round!",
        bee: true
    },
    {
        title: "Phlox",
        climate: "arid",
        goodIn: "ground",
        category: "flowers",
        maintenance: "high",
        src: "../phlox.png",
        fact: "Can be used to help with indigestion!",
        bee: true
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
        bee: false
    },
    {
        title: "Prickly Pear",
        climate: "arid",
        goodIn: "ground",
        category: "produce",
        maintenance: "medium",
        src: "../pricklypear.png",
        fact: "Also known as tuna!",
        bee: false
    },
    {
        title: "Pomegrante",
        climate: "arid",
        goodIn: "ground",
        category: "produce",
        maintenance: "high",
        src: "../pometranate.png",
        fact: "A super healthy, super fruit!",
        bee: false
    }
];

export default function ResultsTEST() {
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
        cards = TropGroundFlowers;
    }

    if (suggestions === "seven") {
        cards = TropGroundProduce;
    }

    if (suggestions === "eight") {
        cards = TropGroundProduce;
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



    return <div className="results">
        <Logo src="../logo-hands.png" />
        <MainImg src="../watermark.png" />
        <LargeTitles text="Our recommendations" />

        {suggestions === "one" && cards.map((value, index) => {
            return (

                <Options
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
                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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

                <Options
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
        <div className="resultsButton" data-aos="fade-in" data-aos-duration="4000" onClick={() => router.push('/end')}><MainButton text="Finish" /></div>
    </div>
}

