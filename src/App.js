import "./App.css";
import MarvelHeroesPage from "./components/MarvelHeroesPage";
import Search from "./components/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";


function App() {

  const [marvelHeroes, setMarvelHeroes] = useState([]);

  const fetchCharacters = () => {

    const url = "http://gateway.marvel.com/v1/public/characters?apikey=874ed89f80bf914e4fe26dfb1bb5ca24";
    axios.get(url)
      .then((response) => {
        console.log("Response fetched", response);

        //validate response

        if (response && response.data && response.data.data && Array.isArray(response.data.data.results)) {

          //response is valid
          //the data from server are in response.data.data.results
          //wee need to save them in this component local state 

          setMarvelHeroes(response.data.data.results);

        }
      });

  }

  const fetchSearchResults = (queue) => {

    console.log("Search input", queue)

    const url = "http://gateway.marvel.com/v1/public/characters?apikey=874ed89f80bf914e4fe26dfb1bb5ca24" + "&name=" + queue;
    axios.get(url)
      .then((response) => {
        console.log("Response fetched", response);

        //validate response

        if (response && response.data && response.data.data && Array.isArray(response.data.data.results)) {

          //response is valid
          //the data from server are in response.data.data.results
          //wee need to save them in this component local state 

          setMarvelHeroes(response.data.data.results);

        }
      });

  }

  useEffect(() => {

    //this would be invoked just once, when the component mounts
    console.log("Fetching data from server");

    fetchCharacters();

  }, []);


  return (

    <div>
      <Header onClick={fetchCharacters}/>
      <Search fetchSearchResults={fetchSearchResults}/>
      <MarvelHeroesPage marvelHeroes={marvelHeroes} />
    </div>
  )
}

export default App;