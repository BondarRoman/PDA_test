

import { useEffect, useState } from 'react';
import User_Stalker1 from './Users/user_stalker1';
import User_Bandit1 from './Users/user_bandit1';
import User_Scientist1 from './Users/user_scientist';
import { OverlayScrollbars } from 'overlayscrollbars';
function Contacts() {
  const [speak1, set_speak1] = useState(false)
  const [speak2, set_speak2] = useState(false)
  const [speak3, set_speak3] = useState(false)
  let yourId = 'user#830762'
  let StalkerId = 'user#395029'
  let BanditId = 'user#736972'
  let ScientistId = 'user#003826'
  return (
    <div >

    
         <div className='chat'>
                <div className='test1'>
                  <span className='userid' onClick={()=> (set_speak1(true), set_speak2(false), set_speak3(false))}>{StalkerId}</span>
                  <span className='userid' onClick={()=> (set_speak2(true), set_speak1(false), set_speak3(false))}>{BanditId}</span>
                  <span className='userid' onClick={()=> (set_speak1(false), set_speak2(false), set_speak3(true))}>{ScientistId}</span>
                </div>
                <div >
                { speak1 &&  <User_Stalker1 yourId={yourId} friendId={StalkerId}></User_Stalker1>}
                { speak2 &&  <User_Bandit1 yourId={yourId} friendId={BanditId}></User_Bandit1>}
                { speak3 &&  <User_Scientist1 yourId={yourId} friendId={ScientistId}></User_Scientist1>}
                </div>
                
         </div>
       





         
    </div>

    
  );
}

export default Contacts;
