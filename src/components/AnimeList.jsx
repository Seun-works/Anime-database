import './assets/css/AnimeList.css';

import AnimeCard from "./assets/AnimeCard";
import React from "react";

const AnimeList = (props) => {
  return (
    <div className='listed-anime'>
      <div className="anime-list">
        {props.onAnimeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
