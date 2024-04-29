import React from 'react'
import GlassesEmoji from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Resume from '../../img/Resume/kishore_beeraka_react_experience_resume.pdf'
import Card from '../Card/Card'
import './services.css'

const Services = () => {
    return (
        <div className='services'>

            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Specializing in Single Page Applications (SPAs)
                    <br />
                    I utilize React Js to craft responsive, interactive web applications, prioritizing seamless user experiences.
                </span>

                <a href={Resume} download>
                    <button className='button s-button'>
                        Download CV
                    </button>
                </a>


                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}>

                </div>



            </div>

            <div className='cards'>

                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch,  Adobe, Adobe xd'} />
                </div>

                <div style={{ top: "12rem", left: '-4rem' }}>
                    <Card emoji={GlassesEmoji} heading={'Developer'} detail={'Html, Css,  JavaScript, React Js, Redux, Redux Toolkit, Redux Saga'} />
                </div>

                <div className='blur s-blur2' style={{ background: "var(--purple)" }}>

                </div>


            </div>

        </div>
    )
}

export default Services