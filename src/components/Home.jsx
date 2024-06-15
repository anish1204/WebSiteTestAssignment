import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import Calender from '../images/calender.png'
import Footer from './Footer'
import { useState } from 'react'
import Card from './Card'
import Accordian from './Accordian'
import Carousel from './Carousel'
import {countries} from '../sliderdata.js'

const Home = () => {

 

  const [count, setCount] = useState(1);

  const pdt = document.querySelectorAll(".slider .product")

  const btnPresPrev = () => {
    
    scroll();
    setCount((count) => count - 1);
  }

  const btnPresNext = () => {
    
    scroll();
    setCount((count) => count + 1);
  }

  function scroll() {
    pdt.forEach(function (item) {
      console.log(count);
      item.style.transform = `translateX(-${count * 500}px)`
    })
  }

  return (
    <div>
      <NavBar />
      
      <Carousel images={countries}/>
      <br/>

      <div className='reminder-slot'>
        <div className='rm-slt-heading'>
          <h1>Upcoming<br /> Examinations </h1>

          <p>
            Enquire about the examinations &<br />register for the exams
          </p>
        </div>
        <div className='rm-slt-item'>
          <div className='slt-item-icon'>
            <img src={Calender} alt="" />
          </div>
          <div className="slt-item-ctnt">
            <h2>02th October 2014</h2>
            <p>Level 1 exam</p>
          </div>
        </div>
        <div className='rm-slt-item'>
          <div className='slt-item-icon'>
            <img src={Calender} alt="" />
          </div>
          <div className="slt-item-ctnt">
            <h2>Nov-Dec 2016</h2>
            Level 2<br />
            Lorem Ipsum<br />


          </div>
        </div>
        <div className='rm-slt-item'>
          <div className='slt-item-icon'>
            <img src={Calender} alt="" />
          </div>
          <div className="slt-item-ctnt">
            <h2>Ongoing This year</h2>
            <p>Level 3 (grad)</p>
          </div>
        </div>
      </div>
      <br/>
            <br />

      <div className='slider'>
        <button className='prev-btn' onClick={btnPresPrev}><p>&lt;</p></button>
        <button className='nxt-btn' onClick={btnPresNext}><p>&gt;</p></button>

        <div className='product'>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>

      <br />
      <div className='rating-section'>
        <div className="item-box" id='fst-box'>
          <h3>Lorem Ipsum</h3>
          <h1>123+</h1>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex ut repellendus architecto quidem quae doloremque itaque reprehenderit sunt quia.</p>
        </div>
        <div className="item-box">
          <h3>Lorem Ipsum</h3>
          <h1>12+</h1>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex ut repellendus architecto quidem quae doloremque itaque reprehenderit sunt quia.</p>
        </div>
        <div className="item-box">
          <h3>Lorem Ipsum</h3>
          <h1>12+</h1>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex ut repellendus architecto quidem quae doloremque itaque reprehenderit sunt quia.</p>
        </div>
        <div className="item-box" id='lst-box'>
          <h3>Lorem Ipsum</h3>
          <h1>123</h1>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex ut repellendus architecto quidem quae doloremque itaque reprehenderit sunt quia.</p>
        </div>


      </div>


      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", }} >FAQ</h2>

      {/* <div className='accordian'>

            <div className="item">
            <div className="title">
            <h2>How does an investor gain access to MF Utility</h2>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae.
            </div>
            
            </div>

          
      </div> */}
      <Accordian/>






      <div className="inquiry-section">
        <div className="lft-sec">
          <h1 style={{ color: "#12406f" }}>Subscribe</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          <br />
          quibusdam obcaecati unde nemo quod asperiores?
          Lorem ipsum dolor <br />sit amet. Lorem ipsum dolor sit amet.
          <form className='inq-form'>
            <input className='email-box' placeholder='Enter your Email Address' />
            <button type='submit'>Subscribe Now</button>
          </form>

        </div>
        <div className="rgh-sec">
          <img src='https://img.freepik.com/premium-vector/team-discusses-ideas-developing-business_18660-5387.jpg?w=740' />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Home