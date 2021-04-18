
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter()

  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>
      
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}