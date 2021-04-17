import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import Loading from '../comps/LoadingPage';


export default function Quiz() {

  class RedirectExample extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }
 
  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent="100%" width="100"/>
      <MedTitles text="Calculating your results..."/>
      <Loading />
    </div>
  )
}