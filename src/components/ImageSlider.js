import React from 'react'
import {useState} from 'react'
import { imageData } from './ImageData'
import './ImageSlider.css'

function ImageSlider({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    function nextSlide(){
        setCurrent(current===length-1 ? 0 : current+1)
    }

    function prevSlide(){
        setCurrent(current===0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    // function moveDot(){
    //   setCurrent(index)
    // }


  return (
    <div className='slider'>
       <i className='fa fa-arrow-circle-left'  onClick={prevSlide}/> 
       <i className='fa fa-arrow-circle-right' aria-hidden='true' onClick={nextSlide}/> 
      {imageData.map((slide,index)=>{
        return (
            <div className={index===current?'slide active':'slide'}>

                {index === current &&  <img src={slide.image} alt='travel' className='image'/>}
                <h1 className="centered">{slide.title}</h1>
                <p className='para'>{slide.text}</p>

            </div>
        )
      })}
      <div className="container-dots">
        {Array.from({length:8}).map((item, index)=>{
          return(
            <div className={current === index ? 'dot active' : 'dot'} onClick={()=>setCurrent(index)}>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider
