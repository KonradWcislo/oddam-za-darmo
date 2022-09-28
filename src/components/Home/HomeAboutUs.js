import React from 'react'
import DecorationText from "./../../assets/Decoration.svg"
import signature from "./../../assets/Signature.svg"
import People from "./../../assets/People.jpg"


export const HomeAboutUs = () => {
  return (
    <section name="HomeAboutUs" className="about-us-columns ">
        <div className='about-us-first-column'>
            <h1>O nas</h1>
            <img src={DecorationText} alt=''/>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img className='about-us-signature' src={signature} alt="" />
        </div>
        <img className='about-us-second-column' src={People} alt="." />
    </section>
  )
}
