
import React from 'react';

import messenge from '../../audio/lebedev_agroprom_pda.mp3'
function Messenge2(props) {
 
 
  return (
    <div className='messenges'>
        
        <div>
            <audio controls  src={messenge}>Ваш кпк не может вооспроизвести это сообщение</audio>
        </div>
       
    </div>

    
  );
}

export default Messenge2;
