import { useState } from "react";

function Search(props) {

  const [search, setSearch] = useState("");

  const fetchSearchResults = props.fetchSearchResults;

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setSearch(value);
  }

  const handleClick = () => {
    console.log(search); //Search from input by clicking on button
    if (search.trim() !== "");
    fetchSearchResults(search.trim());
  }

  let disabled = true;
  if (search.trim() !== "") {
    disabled = false;
  }

  return (

    <div className="search-bar">

      <div className="shadow"></div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange} />

      <input
        type="button"
        value="Go"
        disabled={disabled}
        onClick={handleClick} />

    </div>
  )
}

export default Search;