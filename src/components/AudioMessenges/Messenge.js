import React from 'react';
import { useEffect, useState } from 'react';
import Messenge1 from './messenge1';
import Messenge2 from './messenge2';
import Messenge_Error from './messenge_error';
import Messenge_Error2 from './messenge_error2';

// import User_Scientist1 from './Users/user_scientist';
function Messenge() {
  const [note1, set_note1] = useState(false)
  const [note2, set_note2] = useState(false)
  const [note3, set_note3] = useState(false)
  const [note4, set_note4] = useState(false)
  
  // let yourId = 'user#830762'
  // let StalkerId = 'user#395029'
  // let BanditId = 'user#736972'
  // let ScientistId = 'user#003826'
  return (
    <div >

    
         <div className='chatNotes'>
                <div className='test1'>
                  <span className='userid' onClick={()=> (set_note1(true), set_note2(false), set_note3(false), set_note4(false))}>Запись в кпк1</span>
                  <span className='userid' onClick={()=> (set_note2(true), set_note1(false), set_note3(false), set_note4(false))}>Запись в кпк2</span>
                  <span className='userid' onClick={()=> (set_note2(false), set_note1(false), set_note3(true), set_note4(false))}>Запись повреждена1</span>
                  <span className='userid' onClick={()=> (set_note2(false), set_note1(false), set_note3(false), set_note4(true))}>Запись повреждена2</span>
                  {/* <span className='userid' onClick={()=> (set_note3(false), set_note2(false),set_note1(true))}>Заметка3</span> */}
                </div>
                <div >
                { note1 &&  <Messenge1/>}
                { note2 &&  <Messenge2/>}
                { note3 &&  <Messenge_Error/>}
                { note4 &&  <Messenge_Error2/>}
                {/* { note3 &&  <User_Scientist1 yourId={yourId} friendId={ScientistId}></User_Scientist1>} */}
                </div>
                
         </div>
       





         
    </div>

    
  );
}

export default Messenge;
