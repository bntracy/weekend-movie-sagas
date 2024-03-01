import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const fetchMovieDetails = () => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: id
        });
    }

    useEffect(fetchMovieDetails, []);

    return <>
        <h2 data-testid="movieDetails">Details</h2>
        <p>{id}</p>
        <button onClick={()=>history.push('/')} data-testid="toList">Back to Movie List</button>
    </>;
}

export default MovieDetails;