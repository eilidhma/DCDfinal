import React, {useState} from 'react'
import {useRouter} from "next/router"
import {questions} from "../../data/text"

export default function QuizPage(){
  const router = useRouter()

  var quest = "*name*, what climate are you living in right now?";
  var option1 = "Temperate";
  var option2 = "Tropical";
  var option3 = "Arid";

  const {quizquestions} = router.query;

  if(quizquestions === "question1"){
    quest =
    option1 = 
    option2 = 
    option3 = 
  }

  if(quizquestions === "question2"){
    quest = "What kind of plants interest you in terms of maintenance required?"
    option1 = "Low maintenance";
    option2 = "Medium maintenance";
    option3 = "High maintenance";
  }

  if(quizquestions === "question3"){
    quest = "What kind of plants interest you in terms of maintenance required?"
    option1 = "Low maintenance";
    option2 = "Medium maintenance";
    option3 = "High maintenance";
  }
}