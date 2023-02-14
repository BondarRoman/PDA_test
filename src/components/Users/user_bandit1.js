
import React from 'react';
import you from '../../img/avatars/stalker/stalker1.jpg'
import friend from '../../img/avatars/bandits/bandit1.jpg'
function User_Bandit1(props) {
  let yourId = props.yourId
  let friendId = props.friendId
  return (
    <div className='test2'>

          <div>

                  <img src={friend} width='80px' height='50px'></img>
                  <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{friendId}</span>

                  <p>Слышь, чепушило!</p>
                  <p>Ты че пацанам не занес вчера?</p>
          </div>

      <div>

        <img src={you} width='80px' height='50px'></img>
        <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>
        
        <p>Занят был</p>
        <p>Извините пожалуйста</p>
        <p>Сегодня постараюсь занести, братва</p>
       
      </div>

      <div>

          <img src={friend} width='80px' height='50px'></img>
          <span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{friendId}</span>

          <p>Я тебе че, на обиженного похож?</p>
          <p>Фильтруй базар, чепушило. За такои словечки выкинутые 50 кусков сверху накинешь, чтобы ты не обижался</p>
      </div>
        
      <div>

<img src={you} width='80px' height='50px'></img>
<span style={{fontSize: 'medium', marginLeft:'10px', fontWeight: '600'}}>{yourId}</span>

<p>Ну это уже грабеж!</p>
<p>На скадовске я все расскажу чем вы промышлсяете выблядки! Вы у меня еще попляшите! Совсем офонарели, взять с честних сталкеров по 20к в день снимать, ничего не долго вам жить осталось! Завтра к вам прийдет очистительная бригада по искоренению таких как вы. Готовьте гробы, спортсмены</p>
</div>
    </div>

    
  );
}

export default User_Bandit1;
