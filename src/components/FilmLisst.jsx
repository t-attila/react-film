import FilmItem from './FilmItem.jsx';

function FilmList({ films }){
  if (films.length == 0){
    return <p className="empty-message">Nincs megjeleníthető film</p>
  }

  return (
    <>
    {
      films.map( film => {
        return <FilmItem key={ film.id } film={ film } />
      })
    }
    </>
  )
}
export default FilmList