
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import Description from '../comps/DescriptiveText';


export default function Home() {

  const router = useRouter()

  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Congratulations!"/>
      <Description text="You've started on your plant growing journey"/>
      <MainImg src="happy"/>

    </div>
  )
}