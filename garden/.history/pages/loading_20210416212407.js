import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import Loading from '../comps/LoadingPage';



class RedirectExample extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to='/event' />
      : <div>Content</div>
  }
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