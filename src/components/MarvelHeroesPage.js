import axios from "axios";
import { useEffect, useState } from "react";
import CardPlaceholder from "./CardPlaceholder";
import MarvelHeroesCard from "./MarvelHeroesCard";

function MarvelHeroesPage() {

  const [marvelHeroes, setMarvelHeroes] = useState([]);

  useEffect(() => {

    //this would be invoked just once, when the component mounts
    console.log("Fetching data from server");

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
      })

  }, []);

  let placeholderArray = [];
  for (let i = 0; i < 20; i++) {
    placeholderArray.push(null);
  }

  return (
    <div className="heroes">
      <h1>Marvel Heroes Page</h1>

      <div className="marvel-heroes-list">

        {
          marvelHeroes.length === 0 && 
            placeholderArray.map((item, index) => {
              return (
                <CardPlaceholder key={index} />
              )
            })
        }

        {
          marvelHeroes.length > 0 && 
            marvelHeroes.map((item) => {
              return (
                <MarvelHeroesCard key={item.id} item={item}/>
              )
            })
        }

      </div>
    </div>
  )
}

export default MarvelHeroesPage;