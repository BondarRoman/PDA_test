import React from 'react';
import { useEffect, useState } from 'react';
import Note1 from './note1';
import Note2 from './note2';
// import User_Scientist1 from './Users/user_scientist';
function Notes() {
  const [note1, set_note1] = useState(false)
  const [note2, set_note2] = useState(false)
  const [note3, set_note3] = useState(false)
  
  // let yourId = 'user#830762'
  // let StalkerId = 'user#395029'
  // let BanditId = 'user#736972'
  // let ScientistId = 'user#003826'
  return (
    <div >

    
         <div className='chatNotes'>
                <div className='test1'>
                  <span className='userid' onClick={()=> (set_note1(true), set_note2(false), set_note3(false))}>Заметка1</span>
                  <span className='userid' onClick={()=> (set_note2(true), set_note1(false), set_note3(false))}>Заметка2</span>
                  {/* <span className='userid' onClick={()=> (set_note3(false), set_note2(false),set_note1(true))}>Заметка3</span> */}
                </div>
                <div >
                { note1 &&  <Note1/>}
                { note2 &&  <Note2/>}
                {/* { note3 &&  <User_Scientist1 yourId={yourId} friendId={ScientistId}></User_Scientist1>} */}
                </div>
                
         </div>
       





         
    </div>

    
  );
}

export default Notes;
