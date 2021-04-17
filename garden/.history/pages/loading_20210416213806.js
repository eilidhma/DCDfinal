import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import Loading from '../comps/LoadingPage';



export default function Quiz() {
  
  const router = useRouter()

  return (
    setTimeout(() => { 
      router.push('/index')
    }, 5000),
    <div className="quiz">
      <StatusBar percent="100%" width="100"/>
      <MedTitles text="Calculating your results..."/>
      <Loading />
    </div>
  )
}