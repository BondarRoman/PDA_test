import React from 'react';
import { useEffect, useState } from 'react';
import Notes from './Notes/Notes';
import Messenge from './AudioMessenges/Messenge';
function MainNotes() {
  const [note1, set_note1] = useState(false)
  const [note2, set_note2] = useState(false)
  const [note3, set_note3] = useState(false)
  
  const [notePlus, set_notePlus] = useState(true)
  
  const [audioPlus, set_audioPlus] = useState(true)

  return (
    <div >

    
         <div className='chat'>
                <div className='test1'>
                  <div className='noites'>
                                 {!note2 && <div className='userid' onClick={()=> (set_note1(!note1), set_note2(false), set_note3(false), set_notePlus(!notePlus) )}><span>{notePlus ? '+' : '-'}</span> Заметки</div>}
                                  { note1 &&  <Notes/>}
                  </div>

                      <div className='audio' >
                           {!note1 && <div className='userid' onClick={()=> (set_note2(!note2), set_note1(false), set_note3(false), set_audioPlus(!audioPlus))}><span>{audioPlus ? '+' : '-'}</span>Аудио</div>}
                            { note2 &&  <Messenge/>}
                      </div>
                  
             
                  {/* <span className='userid' onClick={()=> (set_note2(true), set_note1(false), set_note3(false))}>Заметки</span> */}
                  {/* <span className='userid' onClick={()=> (set_note3(false), set_note2(false),set_note1(true))}>Заметка3</span> */}
                </div>
                <div >
                
                {/* { note2 &&  <Note2/>} */}
                {/* { note3 &&  <User_Scientist1 yourId={yourId} friendId={ScientistId}></User_Scientist1>} */}
                </div>
                
         </div>
       





         
    </div>

    
  );
}

export default MainNotes;
