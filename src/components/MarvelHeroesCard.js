function MarvelHeroesCard(props) {

  const item = props.item;
  const addHeroToMyTeam = props.addHeroToMyTeam;

  const imgSrc = item.thumbnail.path + "." + item.thumbnail.extension;
  
  const handleClickAdd = (e) => {
    addHeroToMyTeam(item);
  }
  

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <img src={imgSrc} alt="A Marvel Hero" />
      <div className="buttons">
        <button>Info</button>
        <button onClick={handleClickAdd}>Add</button>
      </div>
    </div>
  )
}

export default MarvelHeroesCard;