import React from 'react'
import './Home.css'
import { useState } from 'react';

const IndividualAccrodian = ({ questions, answer }) => {
   

   const [show,setShow] = useState(false);
    return (
        <div>
            <div className="acc-bdy">
                <div className={show?"acc-cnt":"acc-cntoC"}>
                    <h5 >{questions}</h5>
                </div>

                <div className={show?"acc-btn":"acc-btnoC"} onClick={()=>setShow((prev)=>!prev)}>
                   {
                     show ? <button>-</button>  :  <button>+</button>
                   } 
                </div>

            </div>
            {
                show ?
                <div className='ans-sec'>{answer}</div>
                :
                ''
            }
            



        </div>
    )
}

export default IndividualAccrodian