//This component displays the sidebar with the top 5 post popular animes

import React from "react";

const SideBar = (props) => {
  return (
    <div>
      <aside>
        <nav>
          <h3>Top Anime</h3>
          {props.topAnime.map((anime) => (
            <React.Fragment>
              <span>
                <img src={anime.image_url} alt="Anime" key={anime.mal_id} />
              </span>

              <a
                href={anime.url}
                key={anime.mal_id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {anime.title}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
