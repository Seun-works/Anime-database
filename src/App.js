import './components/assets/css/main.css';

import React, {useEffect, useState} from 'react';

import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';
import Header from './components/Header';
import ReactSpinner from './components/UI/ReactSpinner';
import SideBar from './components/SideBar';

// import MainContent from './components/MainContent';
 
function App() {
  const [animeLst, setAnimeLst] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  // const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const GetTopAnime = async() => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity').then((res) => res.json());
    setTopAnime(temp.top.slice(0, 5));
  }

  useEffect(() => {
    GetTopAnime();
  }, []);

// const searchHandle = event => {
//       event.preventDefault();

//       FetchAnime(search);

// }

const FetchAnime = async(query) => {
    setIsLoading(true);
    const temp = await fetch (`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`);
    const data = await temp.json();
    setAnimeLst(data.results);
    console.log(data.results);
 
  setIsLoading(false);
}

// let content;

// if(isLoading) {
//   content = <ReactSpinner/>
// }




  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <SideBar
         topAnime = {topAnime}/>
         <main>
         <AnimeForm
          onSearch = {FetchAnime}/>
          {isLoading && <ReactSpinner/>}
          {!isLoading && <AnimeList
          onAnimeList = {animeLst}/>}
         </main>
         
         {/* <MainContent 
            onChange = {searchHandle}
            onSearch = {search}
            onAnimeList = {animeLst}
            onSetSearch = {setSearch}/> */}
            {/* <span>{content}</span> */}
      </div>
      
    </div>
  );
}

export default App;
