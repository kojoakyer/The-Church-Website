import React,{useState,useEffect} from 'react'
import Footer from '../Footer';
import { imageData } from '../ImageData';
import ImageSlider from '../ImageSlider';
import LinkSection from '../LinkSection'
import MainSection from '../MainSection';
import SignupPopup from '../SignUpPopup/SignupPopup';

function Home() {

  const [timedPopup, setTimedPopup] = useState(false)

  function closePopup(){
     setTimedPopup(false)
  }

  useEffect(() => {
    setTimeout(()=>{
      setTimedPopup(true)
    },3000)
  }, [])
    return (
        <div>
          <ImageSlider slides={imageData}/>
          <LinkSection/>
          <MainSection/>
          <Footer/>
          {timedPopup &&   <SignupPopup onClick={closePopup}/>}
        </div>
    )
}

export default Home
