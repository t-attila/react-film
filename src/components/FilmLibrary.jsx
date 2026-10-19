import { useState, useEffect } from "react";
import FilmList from "./FilmLisst";
function FilmLibrary({ films }){
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");

  const totalCount = films.length;
  const favCount = films.filter( film => film.favorite ).length;

  const filteredFilms = films.filter( film => {
    const lcText = searchText.toLowerCase();
    return film.title.toLowerCase().includes(lcText);
  } )

  useEffect( ()=> {
    if (filteredFilms.length > 0){
      setMessage(filteredFilms.length + ' film található');
    } else {
      setMessage('Nincs ilyen film');
    }
  }, [filteredFilms])

  return (
    <>
      <input type="text" placeholder="Filmcím..." 
        value={ searchText } onChange={ (e) => setSearchText(e.target.value) } />
      <div className="stat">
        <span>Összes film: { totalCount }</span>
        <span>{ message }</span>
        <span>Kedvenc film: { favCount }</span>
      </div>
      <FilmList films={ filteredFilms } />
    </>
  )
}
export default FilmLibrary