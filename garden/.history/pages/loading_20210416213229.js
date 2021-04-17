import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import Loading from '../comps/LoadingPage';

import { Redirect } from 'react'

export default function RedirectExample() {
  const [redirectNow, setRedirectNow] = useState(false)
  if (redirectNow) {
    return <Redirect to='/test' />
  }
  

  return <div>
    <div className="quiz">
       <StatusBar percent="100%" width="100"/>
       <MedTitles text="Calculating your results..."/>
       <Loading />
     </div>
  </div>
}

// export default function Quiz() {


//   const router = useRouter()

//   return (
//     <div className="quiz">
//       <StatusBar percent="100%" width="100"/>
//       <MedTitles text="Calculating your results..."/>
//       <Loading />
//     </div>
//   )
// }