import React from 'react'

const Movies = ({movie:{imdbID, Year, Poster, Title, Type}}) => {
  return (
    <div className="w-310px h-460px relative rounded-xl overflow-hidden movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Movies