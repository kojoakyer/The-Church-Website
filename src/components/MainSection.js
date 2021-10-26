import React from 'react'
import './MainSection.css'
import Button from './Button';


function MainSection() {
    return (
        <>
          <div className="">
              <div className="main-container">
                    <div className="col">
                        <img className='main-image1' src="images/slide_3.jpg" alt="" />
                        <div className="sub">
                            <div className="sub-row">
                              <img className='sub-image' src="images/img4.jpg" alt="" />
                              <p>
                                 Persercutions are included in the process, 'persecuted, but not forsaken. ' People accuse us, misunderstand us. Still, we know we are not abandoned by our Lord who lives within us. ' For He Himself has said, 'i will never leave you nor forsake you'.
                                </p>
                                <Button className='btns' buttonStyle='btn--secondary' buttonsize='btn--large'>
                                 Read More
                                </Button>
                            </div>
                            <div className="sub-row">
                                <img className='sub-image' src="images/img4.jpg" alt="" />
                                <p>
                                   Persercutions are included in the process, 'persecuted, but not forsaken. ' People accuse us, misunderstand us. Still, we know we are not abandoned by our Lord who lives within us. ' For He Himself has said, 'i will never leave you nor forsake you'.
                                </p>
                                <Button className='btns' buttonStyle='btn--secondary' buttonsize='btn--medium'>
                                 Read More
                                </Button>
                            </div>
                        </div>  
  
                    </div>
                    <div className="col">
                        <div className="img_p">
                             <img className='main-image2' src="images/slide_3.jpg" alt="" />
                             <p className='para_Main'> Persercutions are included in the process, 'persecuted, but not forsaken. ' People accuse us, misunderstand us. Still, we know we are not abandoned by our Lord who lives within us. ' For He Himself has said, 'i will never leave you nor forsake you'.
                             </p>
                             <Button className='btns' buttonStyle='btn--secondary' buttonsize='btn--large' style={{marginLeft:'20px'}}>
                              Read More
                             </Button>
                        </div>
                        
                        <div className="sub">
                            <div className="sub-row">
                              <img className='sub-image' src="images/img4.jpg" alt="" />
                              <p>
                                 Persercutions are included in the process, 'persecuted, but not forsaken. ' People accuse us, misunderstand us. Still, we know we are not abandoned by our Lord who lives within us. ' For He Himself has said, 'i will never leave you nor forsake you'.
                                </p>
                                <Button className='btns' buttonStyle='btn--secondary' buttonsize='btn--large'>
                                 Read More
                                </Button>
                            </div>
                            <div className="sub-row">
                                <img className='sub-image' src="images/img4.jpg" alt="" />
                             <p>
                                Persercutions are included in the process, 'persecuted, but not forsaken. ' People accuse us, misunderstand us. Still, we know we are not abandoned by our Lord who lives within us. ' For He Himself has said, 'i will never leave you nor forsake you'.
                               </p>
                               <Button className='btns' buttonStyle='btn--secondary' buttonsize='btn--large'>
                                 Read More
                                </Button>

                            </div>
                        </div>  
  
                    </div>
                  
                </div>
          </div>
            
        </>
    )
}

export default MainSection
