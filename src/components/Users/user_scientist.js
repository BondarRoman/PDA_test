
import React from 'react';
import you from '../../img/avatars/stalker/stalker1.jpg'
import friend from '../../img/avatars/scientist/scientist1.jpg'
function User_Scientist1(props) {
  let yourId = props.yourId
  let friendId = props.friendId
  return (
    <div className='test2'>
      <div>

        <img src={you} width='80px' height='50px'></img>
        <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>
        
        <p>Добрый день, профессор! Я выполнил ваше задание по поводу замеров в аномалии рубец. </p>
        <p>Несу вам сканнер, который вы мне ранее давали</p>
        <p>Также в аномалии мною было замечен очень интересный образец одного артефакта</p>
        <p>Я поместил его в симк и в скором времени после небольшой передышки на скадовске буду выдвигаться к вам на территорию МБУ</p>
      </div>

      <div>

          <img src={friend} width='80px' height='50px'></img>
          <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{friendId}</span>

          <p>Это просто замечательно!</p>
          <p>Выдвигайтесь скорее! Нашим сотрудникам просто нетерпится увидеть результаты замеров и к тому же как вы мне сообщили чрезвычайно любопытно взлянуть на образец, который вам удалось достать.</p>
      </div>
        
      <div>

                <img src={you} width='80px' height='50px'></img>
                <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>

                <p>Также хочу заранее узнать будет ли дополнительная оплата за аномальное образование, которое я смог добыть? </p>
                
      </div>
        
      <div>

                <img src={friend} width='80px' height='50px'></img>
                <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{friendId}</span>

                <p>Разумееться мы вам заплатим дополнительно за данный артефакт</p>
                <p>Но опять же если он предоставляет хоть какуе-ту ценность</p>
                <p>А по поводу замеров если вы хотите знать, то вам полагается 56к рублей</p>
                
      </div>

      <div>

                <img src={you} width='80px' height='50px'></img>
                <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>

                <p>Вполне недурно!</p>
                <p>С артефакта идет непонятное свечение внутри и к тому же Борода предлагает за него 150к рублей. Придется вам розкашелится, профессор</p>

      </div>


    </div>

    
  );
}

export default User_Scientist1;
