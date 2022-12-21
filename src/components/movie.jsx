import React from 'react'
import { useState, useEffect } from 'react'
import './movie.scss'

const Movie = () => {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  // http://www.omdbapi.com/?i=tt3896198&apikey=5fa06ba4

  const fetchMovies = async (searchMovies) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&s=${searchMovies}&apikey=5fa06ba4`,
    )
    const data = await response.json()

    if (data.Search) {
      setMovies(data.Search)
    } else {
      setMovies([data])
    }
  }

  useEffect(() => {
    fetchMovies(searchMovies)
  }, [searchMovies])

  return (
    <div className="movie_container">
      <nav>
        <img
          src="https://i.ibb.co/vDTMyHc/movie-Logo.png"
          alt="movieLogo"
          className="logo"
        />
      </nav>
      <header>
        <p className='watch'>Watch <br /> something <br /> incredible</p>
      </header>

        <div className="search_input">
          <p className="search">Search</p>
          <input
            type="text"
            value={searchMovies}
            onChange={(e) => setSearchMovies(e.target.value)}
            className="movie_input"
          />
        </div>

        <div className="display_movies">
          {movies.map((oneMovie, index) => (
            <div key={index}>
              <p className="movie_name">{oneMovie.Title}</p>
              <img src={oneMovie.Poster} alt="posters" className="poster" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Movie
