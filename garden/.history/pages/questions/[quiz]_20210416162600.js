import React, {useState} from 'react'
import {useRouter} from "next/router"
import {questions} from "../../data/text"

export default function QuizPage(){
  const router = useRouter()

  var quest = "*name*, what climate are you living in right now?";
  var option1 = "Temperate"
  var option2 = "Tropical"
  var option3 = "Arid"
}