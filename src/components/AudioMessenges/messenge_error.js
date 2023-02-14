
import React from 'react';

import messenge from '../../audio/pomehi-dolgiy-shumnyiy-monotonnyiy.mp3'
function Messenge_Error(props) {
 
 
  return (
    <div className='messenges'>
        
        <div>
            <audio controls  src={messenge}>Ваш кпк не может вооспроизвести это сообщение</audio>
        </div>
       
    </div>

    
  );
}

export default Messenge_Error;
