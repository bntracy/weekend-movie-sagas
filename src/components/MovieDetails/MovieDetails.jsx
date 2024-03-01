import { useHistory, useParams } from 'react-router-dom';

function MovieDetails() {
    const history = useHistory();
    const { id } = useParams();

    return <>
        <h2 data-testid="movieDetails">Details</h2>
        <p>{id}</p>
        <button onClick={()=>history.push('/')} data-testid="toList">Back to Movie List</button>
    </>;
}

export default MovieDetails;