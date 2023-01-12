import { getMovielist, searchMovie } from './api';
import Navigate from './Navbar';
// card film
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [popularmovies, setPopularmovies] = useState([]);
  useEffect(() => {
    getMovielist().then((result) => {
      setPopularmovies(result);
    });
  }, []);

  const Popularmovielist = () => {
    return popularmovies.map((movie, i) => {
      return (
        <div className="col-xl-3 mb-3 mt-3 ">
          <div key={i}>
            <Card className="movie-card">
              <div className="movie-body">
                <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                <div className="details">
                  <div className="info">
                    {movie.title}
                    <div className="sinopsis">
                      <p>Sinopsis:</p>
                      <p>{movie.overview}</p>
                    </div>
                    <p>Rate: {movie.vote_average}</p>
                    <p>Popularity: {movie.popularity}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularmovies(query.results);
    }
  };

  console.log({ popularmovies: popularmovies });
  return (
    <>
      <Navigate />
      {/* search */}
      <input placeholder="cari film..." className="movie-search" onChange={({ target }) => search(target.value)} />
      {/* end search */}
      {/* show film */}

      <div className="container">
        <div className="row">
          <Popularmovielist />
        </div>
      </div>
      {/* end show film */}
    </>
  );
};
