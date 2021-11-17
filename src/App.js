import './components/assets/css/main.css';

import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';

function App() {
  const [animeLst, setAnimeLst] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <SideBar
         topAnime = {topAnime}/>
         <MainContent/>

      </div>
      
    </div>
  );
}

export default App;
