import React from 'react'
import {Link} from 'react-router-dom'
import './LinkSection.css'

function LinkSection() {
    return (
        <>
            <div className="link-section">
                <div className="link-container">
                <div className="link-section_wrapper">
                        <Link className='link-name'>
                            <h1>Books/Articles</h1>
                        </Link>
                </div>
                </div>
                <div className="link-container">
                    <div className="link-section_wrapper">
                        <Link className='link-name'>
                            <h1>Podcast</h1>
                        </Link>
                     </div>
                </div>
                <div className="link-container">
                    <div className="link-section_wrapper">
                        <Link className='link-name'>
                            <h1>Videos</h1>
                        </Link>
                     </div>
                </div>  
            </div>
        </>
    )
}

export default LinkSection
