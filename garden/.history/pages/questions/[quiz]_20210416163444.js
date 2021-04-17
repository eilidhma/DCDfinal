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
    quest = questions.first.Q
    option1 = questions.first.Temperate
    option2 = questions.first.Tropical
    option3 = questions.first.Arid
  }

  if(quizquestions === "question2"){
    quest = questions.second.Q
    option1 = questions.second.Low
    option2 = questions.second.Med
    option3 = questions.second.High
  }

  if(quizquestions === "question3"){
    quest = questions.third.Q
    option1 = questions.third.Pots
    option2 = "Medium maintenance";
    option3 = "High maintenance";
  }
}