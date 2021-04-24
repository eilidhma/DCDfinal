import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'
import React, {useState, useEffect} from 'react';
import {questions} from '../data/text';
import MainButton from '../comps/MainButton';
import QuestionButton from '../comps/QuestionButtons';
import {reactLocalStorage} from 'reactjs-localstorage';
import Clock from '../comps/Clock';
import Map from '../comps/WorldMap';
import Plant from '../comps/Plant-grow';
import Bouquet from '../comps/Bouquet';

import Options from '../comps/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlantCatalogue from '../data/plants';
import Logo from '../comps/Logo';
impor


export default function Quiz() {
  const [buttonstate, setButtonState] = useState(0);
  const [borderstate, setBorderState] = useState(0);
  const [hidestate, setHideState] = useState(true);

  const[percent, setPercent] = useState(questions.percent.zero)
  
  const[width, setWidth] = useState(questions.width.ten)

  const[title, setTitle] = useState(questions.title.one)

  const[graphic, setGraphic] = useState(0)

  const [question, setQuestionState] = useState(questions.first.Q);

  const [button1, setButton1State] = useState(questions.first.Temperate);
  const [button2, setButton2State] = useState(questions.first.Tropical);
  const [button3, setButton3State] = useState(questions.first.Arid);
  
  const storeAnswer = () =>{
    reactLocalStorage.setObject(this.text)
  }
  

  const HandleChange = () =>{
    setButtonState(0);
    setBorderState(0)
    setGraphic(0)
    if(question === questions.first.Q){
      setPercent(questions.percent.twentyfive)
      setWidth(questions.width.twentyfive)
      setTitle(questions.title.two)
      setQuestionState(questions.second.Q)
      setButton1State(questions.second.Low);
      setButton2State(questions.second.Med);
      setButton3State(questions.second.High);
      setGraphic(1);
      
      

      // if(buttonstate === 1){
      //   reactLocalStorage.setObject('climate',{'climate':'temperate'})
      // }
      // if(buttonstate === 2){
      //   reactLocalStorage.setObject('climate',{'climate':'tropical'})
      // }
      // if(buttonstate === 3){
      //   reactLocalStorage.setObject('climate',{'climate':'arid'})
      // }

    }
    if(question === questions.second.Q){
      setPercent(questions.percent.fifty)
      setWidth(questions.width.fifty)
      setTitle(questions.title.three)
      setQuestionState(questions.third.Q)
      setButton1State(questions.third.Pots);
      setButton2State(questions.third.Ground);
      setHideState(false);
      setGraphic(2);
     

    }
    if(question === questions.third.Q){
      setPercent(questions.percent.seventyfive)
      setWidth(questions.width.seventyfive)
      setTitle(questions.title.four)
      setQuestionState(questions.fourth.Q)
      setButton1State(questions.fourth.Veg);
      setButton2State(questions.fourth.Flower);
      setHideState(false);
      setGraphic(3);
      

      // if(buttonstate === 1){
      //   reactLocalStorage.setObject('goodIn',{'Good in':'pots/planters'})
      // }
      // if(buttonstate === 2){
      //   reactLocalStorage.setObject('goodIn',{'Good in':'ground'})
      // }
  
    }
    if(question === questions.fourth.Q){
      
      // if(buttonstate === 1){
      //   reactLocalStorage.setObject('category',{'Category':'Vegetables/Fruits/Herbs'})
      // }
      // if(buttonstate === 2){
      //   reactLocalStorage.setObject('category',{'Category':'Flowers/Plants'})
      // }
      
      setHideState(false);
      router.push('/loading')
    }
    
  }
  const router = useRouter()

  return (
    <div>
      <div className="quiz">
        <StatusBar percent={percent} width={width}/>
        <MedTitles text={title}/>
        {graphic === 0 && <Map/>}
        {graphic === 1 && <Clock/>}
        {graphic === 2 && <Plant/>}
        {graphic === 3 && <Bouquet/>}
        <Question text={question}/>
        <div className="questionCont">
          <QuestionButton 
            className="questbutton"
            text={button1} 
            onClick={()=>{setButtonState(1),setBorderState(1),storeAnswer}}
            background = {buttonstate === 1 ? "#367A17" : "#FFFFFF33"}
            borderColor = {borderstate === 1 ? "#367A17" : "#FFFFFF"}/>
          <QuestionButton 
            className="questbutton"
            text={button2} 
            onClick={()=>{setButtonState(2),setBorderState(2),storeAnswer}}
            background = {buttonstate === 2 ? "#367A17" : "#FFFFFF33"}
            borderColor = {borderstate === 2 ? "#367A17" : "#FFFFFF"}/>
          {hidestate === true && <QuestionButton 
            className="questbutton"
            text={button3} 
            onClick={()=>{setButtonState(3),setBorderState(3),storeAnswer}}
            background = {buttonstate === 3 ? "#367A17" : "#FFFFFF33"}
            borderColor = {borderstate === 3 ? "#367A17" : "#FFFFFF"}/>}
        </div>
        <MainButton text="Next Question" onClick={HandleChange}/>
      </div>
      <div className="results">
      <Logo/>
      <MainImg src="watermark.png" width="40%"/>     

      <LargeTitles text="*Name*, Garden recommends"/>
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <div className="resultsButton" data-aos="fade-in" data-aos-duration="4000" onClick={() => router.push('/end')}><MainButton text="Finish" /></div>
    </div>
    </div>
      
    
    
  )
}