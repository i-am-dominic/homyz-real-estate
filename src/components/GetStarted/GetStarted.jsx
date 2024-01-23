import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started with Homyz</span>
          <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.
            <br />
            Lorem ipsum dolor sit.
          </span>
          <button className="button">
            <a href="/">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted