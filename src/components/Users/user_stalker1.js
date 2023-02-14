
import React from 'react';
import you from '../../img/avatars/stalker/stalker1.jpg'
import friend from '../../img/avatars/stalker/stalker2.jpg'
function User_Stalker1(props) {
  let yourId = props.yourId
  let friendId = props.friendId
  return (
    <div className='test2'>
      <div>

        <img src={you} width='80px' height='50px'></img>
        <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>
        
        <p>Привет, братан. Как дела с зароботком? </p>
        <p>Надеюсь у тебя все хорошо на затоне</p>
      </div>

      <div>

          <img src={friend} width='80px' height='50px'></img>
          <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{friendId}</span>

          <p>Да, привет Сумрак, все вполне нормально, ты как сам то?</p>
          <p>Я так то тут нормально разжился на севере. Не то что на югах, но все равно. Я сейчас с Димоном Твердюком общаюсь и это очень прикольно что я завтра</p>
      </div>
        
        
    </div>

    
  );
}

export default User_Stalker1;
