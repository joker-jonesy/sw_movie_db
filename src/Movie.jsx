function Movie(props){
    return(
        <div>
            <h1>{props.dt.title}</h1>
            <h3>{props.dt.release_date}</h3>
        </div>
    )
}

export default Movie;