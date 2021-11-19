//This component displays the sidebar with the top 5 post popular animes

import React from "react";

const SideBar = (props) => {
  return (
    <div>
      <aside>
        <nav>
          <h3>Top Anime</h3>
          {props.topAnime.map((anime) => (
            <a
            key = {anime.mal_id}
            href={anime.url} 
            target="_blank" 
            rel="noopener noreferrer">
              {anime.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
