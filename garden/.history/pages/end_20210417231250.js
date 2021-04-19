
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter()

  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>
      
    </div>
  )
}