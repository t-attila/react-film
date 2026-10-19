import { useContext } from 'react';
import ToggleFavorite from './FilmContext';
import styles from './css/film.module.css';

function FilmItem({ film }){
  const toggleFav = useContext(ToggleFavorite);
  return (
    <>
    <div className={ styles.filmItem }>
      <div className={ styles.info }>
        <p className={ styles.title }>{ film.title }</p>
        <p className={ styles.year }>{ film.year }</p>
      </div>
      <button className={ styles.fav } onClick={ () => toggleFav(film.id) }>
        { film.favorite ? "♥" : "♡" }
      </button>
    </div>
    </>
  )
}
export default FilmItem;