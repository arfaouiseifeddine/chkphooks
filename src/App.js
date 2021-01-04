import React, { useState } from 'react';
import Trailer from './Trailer';
import { moviesData } from './MoviesData';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesList from './MoviesList';
import AddMovie from './AddMovie/AddMovie';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';


function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <Router>
        <Switch>
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <Route path='/trailer' component ={Trailer}/>
      </Switch>
      </Router>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
      
      
    </div>
  );
}

export default App;
