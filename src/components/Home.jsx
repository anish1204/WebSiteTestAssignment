import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import Calender from '../images/calender.png'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <NavBar/>
        

        <div className='reminder-slot'>
            <div className='rm-slt-heading'>
              <h1>Upcoming<br/> Examinations </h1>
              
              <p>
                Enquire about the examinations &<br/>register for the exams
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
                  Level 2<br/>
                 Lorem Ipsum<br/>
                 
                  
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


        <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",}} >FAQ</h2>

        <div className="inquiry-section">
          <div className="lft-sec">
            <h1 style={{color:"#12406f"}}>Subscribe</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
            <br/>
            quibusdam obcaecati unde nemo quod asperiores?
            Lorem ipsum dolor <br/>sit amet. Lorem ipsum dolor sit amet.
            <form className='inq-form'>
            <input className='email-box' placeholder='Enter your Email Address'  />
            <button type='submit'>Subscribe Now</button>
            </form>
            
          </div>
          <div className="rgh-sec">
            <img/>
          </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Home