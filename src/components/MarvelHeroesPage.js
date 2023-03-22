import CardPlaceholder from "./CardPlaceholder";

function MarvelHeroesPage() {

  let placeholderArray = [];
  for (let i = 0; i < 20; i++) {
    placeholderArray.push(null);
  }

  return (
    <div>
      <h1>Marvel Heroes Page</h1>
      
      <div className="marvel-heroes-list">
        {
          placeholderArray.map((item) => {

            return (
              <CardPlaceholder />
            )
          })
        }

      </div>
    </div>
  )
}

export default MarvelHeroesPage;