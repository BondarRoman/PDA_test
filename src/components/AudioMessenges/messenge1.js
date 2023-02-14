
import React from 'react';

import messenge from '../../audio/tremor_diary.mp3'
function Messenge1(props) {
 
 
  return (
    <div className='messenges'>
        
        <div>
            <audio controls  src={messenge}>Ваш кпк не может вооспроизвести это сообщение</audio>
        </div>
       
    </div>

    
  );
}

export default Messenge1;
