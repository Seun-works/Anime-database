import React from 'react';

const MainContent = () => {
    return (
        <main>
            <div className="main-head">
                <form className="search-bar">
                    <input 
                    type="search"  
                    placeholder = "Search for an anime..." 
                    required/>
                </form>
            </div>
        </main>
    )
}

export default MainContent
