import { useState } from 'react';
import FilmLibrary from './components/FilmLibrary.jsx';
import ToggleFavorite from './components/FilmContext.jsx';
import './App.css';

const initFilms = [
  {
    id: 1,
    title: 'Matrix',
    year: 1999,
    favorite: true
  },
  {
    id: 2,
    title: 'Szárnyas fejvadász',
    year: 1982,
    favorite: false
  },
  {
    id: 3,
    title: 'Szárnyas fejvadász 2049',
    year: 2017,
    favorite: true
  },
  {
    id: 4,
    title: 'Dűne',
    year: 2021,
    favorite: true
  },
  {
    id: 5,
    title: 'Csillagok között',
    year: 2014,
    favorite: false
  }
]

function App() {
  const [films, setFilms] = useState(initFilms);
  
  const toggleFav = function(filmId){
    setFilms( prevFilms =>
      prevFilms.map( film => 
        film.id == filmId ? { ...film, favorite: !film.favorite } : { ...film }
      )
    )
  }

  return (
    <>
      <main>
        <h1>Film nyilvántartó</h1>
        <ToggleFavorite.Provider value={ toggleFav } >
          <FilmLibrary films={ films } />
        </ToggleFavorite.Provider>
      </main>
    </>
  )
}

export default App
