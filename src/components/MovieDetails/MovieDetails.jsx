import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

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

    return <>
        <h2 data-testid="movieDetails">Details</h2>
        <h3>{movieDetails[0].title}</h3>
        <img src={movieDetails[0].poster} alt={movieDetails[0].title}/>
        <p>{movieDetails[0].description}</p>
        <p>Genres:</p>
        <ul>
            {movieDetails.map(detail => <li key={detail.id}>{detail.genre}</li>)}
        </ul>
        <button onClick={()=>history.push('/')} data-testid="toList">Back to Movie List</button>
    </>;
}

export default MovieDetails;