# The Anime Database

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See results of their favorite anime shows by typing them in the search bar found on top of the page.
- Be able to see the top 5 most popular animes of all time at the side of the web application.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: [The Anime Database](https://kind-clarke-42ccaa.netlify.app)

## My process

My thinking process while building this app was to finally learn how to use an API and display information dynamically from the API. I also needed to get used to knowing how to break down my React app into smalller reusable  components, if the need arises for them to be used.

### Built with

- React Components.
- React hooks.
- [Jikan anime api](https://jikan.moe/)
- [React](https://reactjs.org/) - JS library

### What I learned

Learning how to use react was not as hard as i thought it would be. My major hurdle with this app was trying to figure out how to manage the stateful components in this web application. I learned that in using a react app, it is always good practice to seperate where you dynamically display your component and where you manage its state or rather, how the component is re-rendered. I also learned how to make use of API's, to get data about whatever information i wanted to display dynamically on the application.

The code snippet below shows how i was able to manage the state of the components in the root app component through the use of the ureact hook, useState.
I also made use of asynchronous arrow functions to fetch data from the jikan API and then display the parsed JSON data on the side bar component of the web application.

```js
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
```


### Continued development

Later down the line, i plan on combning this project with bootstrap to provide a cleaner user interface. I also want to readjuust the anime card component that displays the anime search results, by adding a part of the component that displays the anime's synopsis along with its image. This would all be done in due time.




## Author

- Website - [Seun Ogundipe](https://www.your-site.com)



## Acknowledgments

I want to give thanks to Tyler Potts as i made use of his template as an inspiration in building this react application.
