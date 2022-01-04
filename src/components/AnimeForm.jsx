import './assets/css/AnimeForm.css';

import React, { useState } from "react";

const AnimeForm = (props) => {
  const [search, setSearch] = useState("");

  const searchHandle = (event) => {
    event.preventDefault();

    props.onSearch(search);
  };

  return (
    <div className='anime-form'>
      <div className="main-head">
        <form className="search-box" onSubmit={searchHandle}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default AnimeForm;
