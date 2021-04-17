import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import Loading from '../comps/LoadingPage';

import { Redirect } from 'react'


  const router = useRouter()

  setTimeout(() => { 
    router.push('/index')
  }, 5000)

  return <div>
    <div className="quiz">
       <StatusBar percent="100%" width="100"/>
       <MedTitles text="Calculating your results..."/>
       <Loading />
     </div>
  </div>
}

export default function Quiz() {


  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent="100%" width="100"/>
      <MedTitles text="Calculating your results..."/>
      <Loading />
    </div>
  )
}