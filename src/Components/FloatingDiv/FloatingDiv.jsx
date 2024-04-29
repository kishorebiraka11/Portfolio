import React from 'react'
import './floatingdiv.css'

const FloatingDiv = ({ image, text1, text2 }) => {
    return (
        <div className='floating-div'>
            <img src={image} alt="text1" />
            <span>
                {text1}
                <br />
                {text2}
            </span>

        </div>
    )
}

export default FloatingDiv