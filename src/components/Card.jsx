import React from 'react'
import './Home.css'


const Card = (props) => {
  return (
    <div className='Card-body'>
        <div className="cd-container">
        <div className="cd-title">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="cd-desc">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae.
            </p>
        </div>
        <a href="" className="cd-btn">
            Know more
            <div className='arw-btn'>
                <p>{props.name}</p>
                <p className='arw-mk'> > </p>
            </div>
        </a>
        <br/>
        </div>
        
    </div>
  )
}

export default Card