import './components/assets/css/main.css';

import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';

function App() {
  const [animeLst, setAnimeLst] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  const GetTopAnime = async() => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity').then((res) => res.json());
    setTopAnime(temp.top.slice(0, 5));
  }

  useEffect(() => {
    GetTopAnime();
  }, []);

const searchHandle = event => {
      event.preventDefault();

      FetchAnime(search);

}

const FetchAnime = async(query) => {
  const temp = await fetch (`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`).then((res) => res.json());
  setAnimeLst(temp.results);
  console.log(temp.results);
}
  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <SideBar
         topAnime = {topAnime}/>
         <MainContent 
         onChange = {searchHandle}
         onSearch = {search}
         onAnimeList = {animeLst}
         onSetSearch = {setSearch}/>

      </div>
      
    </div>
  );
}

export default App;
