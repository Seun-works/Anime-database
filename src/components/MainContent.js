import AnimeCard from "./assets/AnimeCard"

const MainContent = (props) => {
    
    return (
        <main>
            <div className="main-head">
                <form className="search-box"
                onSubmit = {props.onChange}>
                    <input 
                    type="search"  
                    placeholder = "Search for an anime..." 
                    required
                    value = {props.onSearch}
                    onChange = {event => props.onSetSearch(event.target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                {props.onAnimeList.map((anime) => (
                    <AnimeCard
                    key = {anime.mal_id}
                    anime = {anime}/>
                 ) )}
            </div>
        </main>
    )
}

export default MainContent
