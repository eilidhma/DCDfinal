import { useRouter } from 'next/router';
import StatusBar from '../../comps/StatusBar'
import MedTitles from '../../comps/MediumTitles'
import Question from '../../comps/Questions'
import React, {useState, useEffect} from 'react';
import MainButton from '../../comps/MainButton';
import QuestionButton from '../../comps/QuestionButtons';
import Clock from '../../comps/Clock';
import Map from '../../comps/WorldMap';
import Plant from '../../comps/Plant-grow';
import Bouquet from '../../comps/Bouquet';
import 'aos/dist/aos.css';
import NameInput from '../../comps/NameInput';
import {BsCircleFill} from 'react-icons/bs';
import Clouds from '../../comps/Clouds';
import Logo from '../../comps/Logo'
import Menu from '../../comps/HambMenu'
import Back from '../../comps/Back';
import AOS from 'aos';
import 'aos/dist/aos.css';



var choices = {
  name:null,
  climate:null,
  location:null,
  type:null
}


var percent = "0%"

var width = 10

var title = "Question #1"

var graphic = <Map/>

var Q = "What climate are you living in right now?"

var buttontexts = {
  option1:"",
  option2:"",
  option3:"",
}
  

export default function Quiz(){
  const router = useRouter();

  const {questions} = router.query;

  const [buttonstate, setButtonState] = useState(0);
  const [borderstate, setBorderState] = useState(0);
  const [nextstate, setNext] = useState(false);
  const [resultsstate, setResults] = useState(false);
  const [quiz, setQuiz] = useState(true)
  const [end, setEnd] = useState(false)

  if(questions === "question1"){
    percent = "0%";
    width = 10;
    title = "Question #1";
    graphic = <Clock/>;
    Q = "What is your name?"
  }
  if(questions === "question2"){
    percent = "25%";
    width = 25;
    title = "Question #2";
    graphic = <Map/>;
    Q = "What climate are you living in right now?"
    buttontexts.option1 = "Temperate"
    buttontexts.option2 = "Tropical"
    buttontexts.option3 = "Arid"
  }
  if(questions === "question3"){
    percent = "50%";
    width = 50;
    title = "Question #3";
    graphic = <Plant/>;
    Q = "Where would you be growing your plants?"
    buttontexts.option1 = "Pots / Planters"
    buttontexts.option2 = "In the ground / garden"
    
  }
  if(questions === "question4"){
    percent = "75%";
    width = 75;
    title = "Question #4";
    graphic = <Bouquet/>;
    Q = "What are you interested in growing?"
    buttontexts.option1 = "Vegetables / Fruits / Herbs"
    buttontexts.option2 = "Flowers / Houseplants"
    
  }

  useEffect(()=>{
    if(choices[questions]){
      if(choices[questions] === buttontexts.option1){
        setButtonState(1)
        setBorderState(1)
      }
      if(choices[questions] === buttontexts.option2){
        setButtonState(2)
        setBorderState(2)
      }
      if(choices[questions] === buttontexts.option3){
        setButtonState(3)
        setBorderState(3)
      }
    } else {
      setButtonState(0)
      setBorderState(0)
    }
    
  }, [router.query])

  const HandleClick = (text) =>{
    if(questions === "question1"){
      choices.name = NameInput
      sessionStorage.setItem("name", JSON.stringify(choices.name))
    }
    if(questions === "question2"){
      choices.climate = text
      sessionStorage.setItem("maintenance", JSON.stringify(choices.climate))
    }
    if(questions === "question3"){
      choices.location = text
      sessionStorage.setItem("location", JSON.stringify(choices.location))
    }
    if(questions === "question4"){
      if(buttontexts.option1 === text){
        setButtonState(1)
        setBorderState(1)
      }
      if(buttontexts.option2 === text){
        setButtonState(2)
        setBorderState(2)
      }
      if(buttontexts.option3 === text){
        setButtonState(3)
        setBorderState(3)
      }
      choices.type = text
      sessionStorage.setItem("type", JSON.stringify(choices.type))
      sessionStorage.setItem("choices", JSON.stringify(choices));
    }
  }

  const HandleChange = () => {
    setNext(false)
    if(questions === "question1"){
      router.push("/quiz/question2")
    }
    if(questions === "question2"){
      router.push("/quiz/question3")
    }
    if(questions === "question3"){
      router.push("/quiz/question4")
    }
    if(questions === "question4"){
      router.push('/loading')
    }
  }

  const HandleEnd = () => {
    // sessionStorage.setItem("choices", JSON.stringify(choices))
    // router.push("/loading")
  }

  const getData = (val) => {
    sessionStorage.setItem("name", JSON.stringify(val.target.value))
    console.log(val.target.value)
  }

  const Next = () => {
    if(questions !== "question4"){
      setNext(true)
    }
  }

  const Results = () => {
    if(questions === "question4"){
      setResults(true)
    }
  }

  const HandleBack = () => {
    if(questions === "question1"){
      router.push("/info")
    }
    if(questions === "question2"){
      router.push("/quiz/question1")
    }
    if(questions === "question3"){
      router.push("/quiz/question2")
    }
    if(questions === "question4"){
      router.push("/quiz/question3")
    }
  }
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  

  return (
    <div className="garden">
      <div className="background"><Clouds/></div>
      <div className="app">
        <div className="main">
          <div className="quiz">
            <div data-aos="fade" className="quizWrap"><StatusBar percent={percent} width={width}/></div>
            <div data-aos="fade" className="backButton">
              <Back onClick={HandleBack}/>
            </div>
            <div className="content">
              <div data-aos="fade" className="titleCont">
                <Question text={Q}/>
              </div>
              
              {questions !== "question1" && <div data-aos="fade" className="quizGraphic">
                {graphic}
                  {questions === "question2" && <div>
                  <div className="legendCont">
                    <div className="legend">
                      <span><BsCircleFill fill="#FF6C6C"/></span>
                      <span className="legendTitles">Temperate</span>
                    </div>
                    <div className="legend">
                      <span><BsCircleFill fill="#FFE266"/></span>
                      <span className="legendTitles">Tropical</span>
                    </div>
                    <div className="legend">
                      <span><BsCircleFill fill="#367A17"/></span>
                      <span className="legendTitles">Arid</span>
                    </div>
                  </div>
                </div>}
              
                
              </div>}
              <div className="questionCont">
                {questions === "question1" && <div data-aos="fade" className="quizWrap"><NameInput onKeyUp={Next} onChange={getData}/></div>}
                {questions !== "question1" && <QuestionButton
                  className="questbutton"
                  text={buttontexts.option1} 
                  onClick={()=>{HandleChange(),HandleClick(buttontexts.option1)}}
                  background = {buttonstate === 1 ? "#00000033" : "#FFFFFF33"}
                  borderColor = {borderstate === 1 ? "#00000022" : "#FFFFFF"}/>}
                {questions !== "question1" && <QuestionButton
                  className="questbutton"
                  text={buttontexts.option2} 
                  onClick={()=>{HandleChange(),HandleClick(buttontexts.option2)}}
                  background = {buttonstate === 2 ? "#00000033" : "#FFFFFF33"}
                  borderColor = {borderstate === 2 ? "#00000022" : "#FFFFFF"}/>}
                {questions === "question2" && <QuestionButton 
                  className="questbutton"
                  text={buttontexts.option3} 
                  onClick={()=>{HandleChange(),HandleClick(buttontexts.option3)}}
                  background = {buttonstate === 3 ? "#00000033" : "#FFFFFF33"}
                  borderColor = {borderstate === 3 ? "#00000022" : "#FFFFFF"}/>}
              </div>
              {quiz === true && questions === "question1" && nextstate === true && <MainButton text="Next Question" onClick={HandleChange}/>}
              {/* {resultsstate === true && end === true && <MainButton text="Results" onClick={HandleEnd}/>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
    
    
  )
}