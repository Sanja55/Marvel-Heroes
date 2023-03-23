function MarvelHeroesCard (props) {

  const item = props.item;
  const imgSrc = item.thumbnail.path + "." + item.thumbnail.extension;
  
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <img src={imgSrc} alt="A Marvel Hero" />
    </div>
  )
}

export default MarvelHeroesCard;