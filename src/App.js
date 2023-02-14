import { Routes, Route, Link } from 'react-router-dom';
import Map from './components/Map'
import Contacts from './components/Contacts'
import MainNotes from '../src/components/MainNotes'
import {Helmet} from "react-helmet";
import './App.css';
import { useState } from 'react';
function App() {
  const [select1, set_select1] = useState('not_select')
  const [select2, set_select2] = useState('not_select')
  const [select3, set_select3] = useState('not_select')
  return (
    <div >
      <Helmet>
                <meta charSet="utf-8" />
                <title>USER#830762</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="USER#830762" />
      </Helmet>
      
      <div className="Link">
      <Link className={select1} onClick={() => (set_select1('select'), set_select2('not_select'), set_select3('not_select'))} to="/Map">Карта Зоны</Link>
      <Link className={select2} onClick={() => (set_select2('select'), set_select1('not_select'), set_select3('not_select'))}  to="/Contacts">Контакты</Link>
      <Link className={select3} onClick={() =>(set_select3('select'), set_select1('not_select'), set_select2('not_select'))}  to="/MainNotes">Заметки</Link>
      </div>
      

      <main>
             <Routes>     

                   <Route path="/Map" element={<Map/>}></Route>
                   <Route path="/Contacts" element={<Contacts/>}></Route>
                   <Route path="/MainNotes" element={<MainNotes/>}></Route>
             </Routes>
      </main>
    </div>

    
  );
}

export default App;
