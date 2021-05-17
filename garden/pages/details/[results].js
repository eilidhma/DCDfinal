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
import Back from '../../comps/Back';

//wanna make this state change ideally

var key = ""
var title = ""
var src = ""
var climate = ""
var goodIn = ""
var category = ""
var maintenance = ""
var maintenance = ""
var sun = ""
var water = ""
var fact = ""
var bee = false



export default function ResultsTEST() {

  const router = useRouter();

  const { results } = router.query;

  if (results === "blackberry") {
    title = "Blackberries"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "low"
    src = "../blackberry.svg"
    fact = "High in antioxidants!"
    bee = true
    sun = "Prefers full sun"
    water = "Keep moist"
  }

  if (results === "raspberry") {
    title = "Raspberries"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "medium"
    src = "../raspberry.png"
    fact = "Can symbolize kindness!"
    bee = true
    sun = "Prefers full sun"
    water = "Keep moist"
  }

  if (results === "blueberry") {
    title = "Blueberries"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "high"
    src = "../blueberry.png"
    fact = "One of the only naturally blue foods!"
    bee = true
    sun = "Prefers full sun"
    water = "Keep moist"
  }

  if (results === "milkweed") {
    title = "Milkweed"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "low"
    src = "../milkweed.png"
    fact = "Poisonous- Caution!"
    bee = true
    sun = "Needs full sun"
    water = 'When top inch of soil is dry'
  }


  if (results === "daisy") {
    title = "Daisies"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "medium"
    src = "../daisy.svg"
    fact = "Found everywhere on eath but Antarctica!"
    bee = true
    sun = "Needs full sun"
    water = "One to two inches a week"
  }

  if (results === "coneflower") {
    title = "Coneflowers"
    climate = "temperate"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "high"
    src = "../coneflower.svg"
    fact = "Produce chemicals to prevent growth in competing plants!"
    bee = true
    sun = "Needs full to partial sun"
    water = "Drought tolerant! But will thrive with the occasional water"
  }

  if (results === "witchhazel") {
    title = "Witch Hazel"
    climate = "temperate"
    goodIn = "ground"
    category = "flowers"
    maintenance = "low"
    src = "../witchhazel.png"
    fact = "Deer resistant!"
    bee = true
    sun = "Needs full to partial sun"
    water = "Can survive on rainfall alone!"
  }

  if (results === "lungwort") {
    title = "Lungwort"
    climate = "temperate"
    goodIn = "ground"
    category = "flowers"
    maintenance = "medium"
    src = "../lungwort.png"
    fact = "Gets its namesake from its unique leaf structure!"
    bee = true
    sun = "Needs full to partial sun"
    water = "When soil is completly dry"
  }

  if (results === "sunflower") {
    title = "Sunflower"
    climate = "temperate"
    goodIn = "pots/garden"
    category = "flowers"
    maintenance = "high"
    src = "../sunflower.svg"
    fact = "Tallest sunflower recorded was over 30 feet tall!"
    bee = false
    sun = "Needs full sun"
    water = "Throughly water once a week"
  }

  if (results === "carrot") {
    title = "Carrot"
    climate = "temperate"
    goodIn = "ground"
    category = "produce"
    maintenance = "low"
    src = "../carrot.png"
    fact = "People have been growing carrots for over 5,000 years!"
    bee = true
    sun = "Prefers full sun but can manage with partial"
    water = "Throughly water once a week"
  }

  if (results === "wheat") {
    title = "Wheat"
    climate = "temperate"
    goodIn = "ground"
    category = "produce"
    maintenance = "low"
    src = "../wheat.png"
    fact = "Was first planted in 1777 as a hobby crop!"
    bee = false
    sun = "For best results, full sun is required"
    water = "Water once a week, mist on hot days"
  }

  if (results === "sweetcorn") {
    title = "Sweet corn"
    climate = "temperate"
    goodIn = "ground"
    category = "produce"
    maintenance = " high"
    src = "../sweetcorn.png"
    fact = "Leaves have been used as chewing gum!"
    bee = false
    sun = "Needs full sun"
    water = "Alternate between a small water and a big water every week"
  }

  if (results === "bokchoy") {
    title = "Bok Choy"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "low"
    src = "../bokchoy.png"
    fact = "Has been grown in China for over 5,000 years!"
    bee = false
    sun = "Grows best in partial shade"
    water = "Once a week, monitor to ensure soil remains moist"
  }

  if (results === "eggplant") {
    title = "Eggplant"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "medium"
    src = "../eggplant.png"
    fact = "Eggplants aren't really veggies- they're berries!"
    bee = false
    sun = "Prefers full sun, can manage with partial sun"
    water = "Throughly water once a week"
  }

  if (results === "rice") {
    title = "Rice"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "high"
    src = "../rice.png"
    fact = "The oldest known food that is still widely consumed today!"
    bee = false
    sun = "Needs full sun"
    water = "Give lots of water- soil should always be moist"
  }

  if (results === "anthurium") {
    title = "Anthurium"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "low"
    src = "../anthurium.png"
    fact = "Symbolizes hospitality!"
    bee = false
    sun = "Prefers partial sun, can survive low light"
    water = "Once a week, mist occasionally"
  }

  if (results === "cannabis") {
    title = "Cannabis"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "medium"
    src = "../cannabis.png"
    fact = "Great chronic pain reliever!"
    bee = true
    sun = "Prefers full sun"
    water = "When top inch of soil feels dry"
  }

  if (results === "hibiscus") {
    title = "Hibiscus"
    climate = "tropical"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "high"
    src = "../hibiscus.png"
    fact = "Both its buds and flowers are edible!"
    bee = true
    sun = "Needs full sun"
    water = "Keep moist"
  }

  if (results === "chinesecabbage") {
    title = "Chinese Cabbage"
    climate = "tropical"
    goodIn = "ground"
    category = "produce"
    maintenance = "low"
    src = "../chinesecabbage.png"
    fact = "Cousins with bok choy!"
    bee = false
    sun = "Grows best in partial shade"
    water = "Once a week, monitor to ensure soil remains moist"
  }

  if (results === "pumpkin") {
    title = "Pumpkin"
    climate = "tropical"
    goodIn = "ground"
    category = "produce"
    maintenance = "medium"
    src = "../pumpkin.png"
    fact = "The word pumpkin first showed up in Cinderella!"
    bee = false
    sun = "Can thrive in any light"
    water = "Keep moist"
  }

  if (results === "banana") {
    title = "Banana Tree"
    climate = "tropical"
    goodIn = "garden"
    category = "produce"
    maintenance = "high"
    src = "../bananas.png"
    fact = "The worlds largest herb!"
    bee = false
    sun = "Prefers full sun"
    water = "One inch of water weekly"
  }

  if (results === "cosmos") {
    title = "Cosmos"
    climate = "tropical"
    goodIn = "ground"
    category = "flowers"
    maintenance = "low"
    src = "../cosmos.png"
    fact = "Can grow up to 3-6 feet tall!"
    bee = true
    sun = "Prefers full sun"
    water = "Let soil dry before watering"
  }

  if (results === "chrysanthemum") {
    title = "Chrysanthemum"
    climate = "tropical"
    goodIn = "ground"
    category = "flowers"
    maintenance = "medium"
    src = "../chrysanthemum.png"
    fact = "Chrysanthemum tea has anti-viral properties!"
    bee = false
    sun = "Prefers full sun"
    water = "Once a week, mist occasionally"
  }

  if (results === "angelstrumpet") {
    title = "Angels Trumpet"
    climate = "tropical"
    goodIn = "ground"
    category = "flowers"
    maintenance = "high"
    src = "../angelstrumpet.png"
    fact = "Grows in the form of a bush or small tree up to 36 feet!"
    bee = false
    sun = "Prefers partial sun to low light"
    water = "Throughly water once a week"
  }

  if (results === "greenbeans") {
    title = "Green Beans"
    climate = "arid"
    goodIn = "pots/planters"
    category = "produce"
    maintenance = "low"
    src = "../greenbeans.png"
    fact = "Can also be yellow, purple, or even speckled red!"
    bee = false
    sun = "Prefers full sun, can manage with partial sun"
    water = "Give a half inch of water daily"
  }

  if (results === "tomato") {
    title = "Tomato"
    climate = "arid"
    goodIn = "pots/garden"
    category = "produce"
    maintenance = "moderate"
    src = "../tomatoplant.png"
    fact = "The worlds most popular fruit!"
    bee = false
    sun = "Grows best in partial shade"
    water = "Once a week, water between one to two inches"
  }

  if (results === "basil") {
    title = "Basil"
    climate = "arid"
    goodIn = "pots/garden"
    category = "produce"
    maintenance = "high"
    src = "../basil.png"
    fact = "Belongs to the mint family!"
    bee = false
    sun = "Grows best in all day partial shade"
    water = "Once a week, mist daily to ensure soil remains moist"
  }

  if (results === "sedum") {
    title = "Sedum"
    climate = "arid"
    goodIn = "pots/garden"
    category = "flowers"
    maintenance = "low"
    src = "../sedum.png"
    fact = "Produce star-shaped flowers!"
    bee = true
    sun = "Can tolerate any level of sun but will thrive in full sun"
    water = "Drought tolerant! Water when soil is fully dry"
  }

  if (results === "lavender") {
    title = "English Lavender"
    climate = "arid"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "moderate"
    src = "../lavendar.png"
    fact = "Used for perfume before baths were common practice!"
    bee = true
    sun = "Needs full sun"
    water = "Drought tolerant! Water when soil is fully dry"
  }

  if (results === "yucca") {
    title = "Yucca"
    climate = "arid"
    goodIn = "pots/planters"
    category = "flowers"
    maintenance = "high"
    src = "../yuccaR.svg"
    fact = "Can bear edible fruit!"
    bee = true
    sun = "Thrives in full sun or bright, indirect sun"
    water = "Drought tolerant! Water when top half of soil is fully dry"
  }

  if (results === "firecracker") {
    title = "Firecracker Plant"
    climate = "arid"
    goodIn = "ground"
    category = "flowers"
    maintenance = "low"
    src = "../firecracker.png"
    fact = "A favourite amung hummingbirds!"
    bee = true
    sun = "Can tolerate any level of sun but will thrive in full sun",
    water = "When top half of soil is fully dry"
  }

  if (results === "purslane") {
    title = "Purslane"
    climate = "arid"
    goodIn = "ground"
    category = "flowers"
    maintenance = "medium"
    src = "../purslane.png"
    fact = "Can bloom year round!"
    bee = true
    sun = "Needs full sun"
    water = "Water thoroughly once a week"
  }

  if (results === "phlox") {
    title = "Phlox"
    climate = "arid"
    goodIn = "ground"
    category = "flowers"
    maintenance = "high"
    src = "../phlox.png"
    fact = "Can be used to help with indigestion!"
    bee = true
    sun = "Can tolerate any level of sun but will thrive in partial sun"
    water = "Keep soil moist"
  }

  if (results === "agave") {
    title = "Agave"
    climate = "arid"
    goodIn = "ground"
    category = "produce"
    maintenance = "low"
    src = "../agave.png"
    fact = "Lives 10-25 years, but only flowers once!"
    bee = false
    sun = "Can tolerate partial sun but will thrive in full sun"
    water = "Drought tolerant! Water two to three times per month"
  }

  if (results === "pricklypear") {
    title = "Prickly Pear"
    climate = "arid"
    goodIn = "ground"
    category = "produce"
    maintenance = "medium"
    src = "../pricklypear.png"
    fact = "Also known as tuna!"
    bee = false
    sun = "Needs full sun"
    water = "Drought tolerant! Water one to two times per month"
  }

  if (results === "pomegranate") {
    title = "Pomegranate"
    climate = "arid"
    goodIn = "ground"
    category = "produce"
    maintenance = "high"
    src = "../pomegranate.png"
    fact = "A super healthy, super fruit!"
    bee = false
    sun = "Prefers full sun, can tolerate partial sun"
    water = "Can survive on rainwater alone!"
  }

  const Close = () => {
    if (results === "blackberry") {
      router.push('/results/one')
    }

    if (results === "raspberry") {
      router.push('/results/one')
    }

    if (results === "blueberry") {
      router.push('/results/one')
    }

    if (results === "milkweed") {
      router.push('/results/two')
    }


    if (results === "daisy") {
      router.push('/results/two')
    }

    if (results === "coneflower") {
      router.push('/results/two')
    }

    if (results === "witchhazel") {
      router.push('/results/three')
    }

    if (results === "lungwort") {
      router.push('/results/three')
    }

    if (results === "sunflower") {
      router.push('/results/three')
    }

    if (results === "carrot") {
      router.push('/results/four')
    }

    if (results === "wheat") {
      router.push('/results/four')
    }

    if (results === "sweetcorn") {
      router.push('/results/four')
    }

    if (results === "bokchoy") {
      router.push('/results/five')
    }

    if (results === "eggplant") {
      router.push('/results/five')
    }

    if (results === "rice") {
      router.push('/results/five')
    }

    if (results === "anthurium") {
      router.push('/results/six')
    }

    if (results === "cannabis") {
      router.push('/results/six')
    }

    if (results === "hibiscus") {
      router.push('/results/six')
    }

    if (results === "chinesecabbage") {
      router.push('/results/seven')
    }

    if (results === "pumpkin") {
      router.push('/results/seven')
    }

    if (results === "banana") {
      router.push('/results/seven')
    }

    if (results === "cosmos") {
      router.push('/results/eight')
    }

    if (results === "chrysanthemum") {
      router.push('/results/eight')
    }

    if (results === "angelstrumpet") {
      router.push('/results/eight')
    }

    if (results === "greenbeans") {
      router.push('/results/nine')
    }

    if (results === "tomato") {
      router.push('/results/nine')
    }

    if (results === "basil") {
      router.push('/results/nine')
    }

    if (results === "sedum") {
      router.push('/results/ten')
    }

    if (results === "lavender") {
      router.push('/results/ten')
    }

    if (results === "yucca") {
      router.push('/results/ten')
    }

    if (results === "firecracker") {
      router.push('/results/eleven')
    }

    if (results === "purslane") {
      router.push('/results/eleven')
    }

    if (results === "phlox") {
      router.push('/results/eleven')
    }

    if (results === "agave") {
      router.push('/results/twelve')
    }

    if (results === "pricklypear") {
      router.push('/results/twelve')
    }

    if (results === "pomegranate") {
      router.push('/results/twelve')
    }
  }



  return <div className="garden">
    <div className="background"><Clouds /></div>
    <div className="app">
      <div className="main">
        <Menu />
        <div className="content">
          <Back onClick={Close} text="Close" />
          <Options

            title={title}
            src={src}
            climate={climate}
            goodIn={goodIn}
            category={category}
            maintenance={maintenance}
            maintenance={maintenance}
            sun={sun}
            water={water}
            fact={fact}
            bee={bee}
          //still need bee
          />

        </div>
      </div>
    </div>
  </div>

}