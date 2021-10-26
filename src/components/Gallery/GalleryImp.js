import React from 'react'
import './Gallery.css'
import {imageData} from './imageData'
import { SRLWrapper } from "simple-react-lightbox";


function GalleryImp() {



    // const [model, setModel] = useState(false)
    // const [tempimgsrc, setTempImgsrc] = useState('')
    // function getImg(image){
    //     setTempImgsrc(image)
    //     setModel(true)
    // }

    return (
        <>
            <h1>Image Gallery</h1>
            <h2>Here are some pictures we captured, we hope you like them, give us a like.</h2>
            {/* <div className={model?'model open':'model'}>
                <img src={tempimgsrc} alt="" />
                <i className='fas fa-times' onClick={()=>setModel(false)}/>
            </div> */}
             <SRLWrapper>
            <div className="gallery">
                {imageData.map((item, index)=>{
                    return(
                       
                          <div className="item" >
                            <a href={item.image}>
                              <img src={item.image} alt="" />
                            </a>
                           
                         </div>
                       
                    )
                })}
            </div>
            </SRLWrapper>
        </>
    )
}

export default GalleryImp

