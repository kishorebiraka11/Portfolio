import React from 'react'
import './intro.css'

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/kishore-pic-bg-preview.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import GlassesEmoji from '../../img/glassesimoji.png'




const profileDetailsList = [
    {
        id: 1,
        text: "Hi! I Am",
    },

    {
        id: 2,
        text: "Beeraka Kishore",
    },

    {
        id: 3,
        text: "Frontend developer with high level of experience in building and maintaining responsive websites",
    },



]

const iconsList = [
    {
        id: 1,
        imgIcon: Github,
        text: "Github",
        iconLink: "https://github.com/kishorebiraka11",

    },

    {
        id: 2,
        imgIcon: Linkedin,
        text: "Linkedin",
        iconLink: "https://www.linkedin.com/in/kishore-beeraka-333665217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },

    {
        id: 3,
        imgIcon: Instagram,
        text: "Instagram",
        iconLink: "https://www.instagram.com/kishorebiraka?igsh=MTdvc2o5cWcxMnQxOQ==",

    },


]


const picturesList = [
    {
        id: 1,
        img: Vector1,
        alt: "Vector1"

    },

    {
        id: 2,
        img: Vector2,
        alt: "Vector2"

    },

    {
        id: 3,
        img: boy,
        alt: "boy"

    },

    {
        id: 4,
        img: GlassesEmoji,
        alt: "Swag"

    },




]






const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    {
                        profileDetailsList?.map((each, index) => (

                            <span key={`profile-details-${index}`}>{each?.text}</span>



                        ))
                    }

                </div>
                <button className='button i-button'>Hire me</button>

                <div className='i-icons'>

                    {
                        iconsList?.map((each, index) => (
                            <a key={`social-media-icons-${each?.id}-${index}`} href={each?.iconLink} target='_blank' rel="noreferrer">
                                <img src={each?.imgIcon} alt={each?.text} />
                            </a>

                        ))
                    }



                </div>

            </div>

            <div className='i-right'>
                {
                    picturesList?.map((each, index) => (

                        <img key={`picture-images-${index}`} src={each?.img} alt={each?.alt} />
                    ))
                }

                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={crown} text1 = "Web" text2 = "Developer" />
                </div>

                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} text1 = "Best Design" text2 = "Award" />
                </div>


                <div className='blur' style={{background: "rgb(238 210 255)"}}>

                </div>
                <div className='blur' style={{
                    background: "#C1F5FF",
                    top: '17rem',
                    width: '21rem',
                    height:"11rem",
                    left: "-9rem"
                }}>

</div>


            </div>

        </div>
    )
}

export default Intro