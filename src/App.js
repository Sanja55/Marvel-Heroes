import "./App.css";
import MarvelHeroesPage from "./components/MarvelHeroesPage";
import Search from "./components/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MyTeam from "./components/MyTeam";


function App() {

  const [marvelHeroes, setMarvelHeroes] = useState([]);
  const [myTeam, setMyTeam] = useState([]);
  
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

  const addHeroToMyTeam = (hero) => {

    let alreadyExists = false;
    
    myTeam.forEach((item) => {
      
      if(hero.id === item.id) {
        alreadyExists = true;
      }

    });

    if (alreadyExists === false) {
      setMyTeam([...myTeam, hero]);
    } else {
      window.alert("You cannot add the same character two times!");
    }
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
      
      <div className="main-content">
        <MarvelHeroesPage marvelHeroes={marvelHeroes} addHeroToMyTeam={addHeroToMyTeam} />
        <MyTeam myTeam={myTeam}/>
      </div>
    </div>
  )
}

export default App;