import React from 'react';
import movie from './MoviesData'
import Rate from './Rate';
const Trailer = ({
    movie: { name, date, rating, image, type, description, video  },
  }) => {
    return (
      <div className="card">
        <div className="card_left">
          <img src={image} alt="poster" />
        </div>
        <div className="card_right">
          <h1>{name}</h1>
          <div className="card_right__details">
            <ul>
              <li>{date}</li>
              <li>||</li>
              <li>{type}</li>
            </ul>
          </div>
          <div className="card_right__rating">
            <Rate rating={rating} />
          </div>
          <div className="card_right__review">
            <p>{description}</p>
            
          </div>
          
          <div >
            <p>{video}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Trailer;