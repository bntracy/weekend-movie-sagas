import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movieDetails = useSelector(store => store.movieDetails);

    const fetchMovieDetails = () => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: id
        });
    }

    useEffect(fetchMovieDetails, []);

    const displayMovieDetails = () => {
        if (movieDetails.length > 0) {
            return (<>
                <h3>{movieDetails[0].title}</h3>
                <img src={movieDetails[0].poster} alt={movieDetails[0].title}/>
                <p>{movieDetails[0].description}</p>
                <h4>Genres:</h4>
                <ul>
                    {movieDetails.map(detail => <li key={detail.id}>{detail.genre}</li>)}
                </ul>
            </>);
        } else {
            return <p>Details coming...</p>;
        }
    }

    return <>
        <h2>Details</h2>
        <div data-testid="movieDetails" >
          {displayMovieDetails()}
        </div>
        <button onClick={()=>history.push('/')} data-testid="toList">Back to Movie List</button>
    </>;
}

export default MovieDetails;