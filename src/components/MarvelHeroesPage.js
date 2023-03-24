
import CardPlaceholder from "./CardPlaceholder";
import MarvelHeroesCard from "./MarvelHeroesCard";

function MarvelHeroesPage(props) {

  const marvelHeroes = props.marvelHeroes;

  let placeholderArray = [];
  for (let i = 0; i < 20; i++) {
    placeholderArray.push(null);
  }

  return (
    <div className="heroes">

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
                <MarvelHeroesCard key={item.id} item={item} addHeroToMyTeam={props.addHeroToMyTeam}/>
              )
            })
        }

      </div>
    </div>
  )
}

export default MarvelHeroesPage;