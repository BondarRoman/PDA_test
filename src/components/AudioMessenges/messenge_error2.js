
import React from 'react';

import messenge from '../../audio/pomehi-na-radio-versiya-2-26265.mp3'
function Messenge_Error2(props) {
 
 
  return (
    <div className='messenges'>
        
        <div>
            <audio controls  src={messenge}>Ваш кпк не может вооспроизвести это сообщение</audio>
        </div>
       
    </div>

    
  );
}

export default Messenge_Error2;
