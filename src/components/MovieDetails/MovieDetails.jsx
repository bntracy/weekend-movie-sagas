import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { id } = useParams();

    return <>
        <h2>Details</h2>
        <p>{id}</p>
    </>;
}

export default MovieDetails;