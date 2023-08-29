import { useState, useEffect } from 'react'
import './App.css';
import Movie from "./Movie.jsx";

function App() {

    const [movies, setMovies]=useState([]);
    const [load, setLoad]=useState(false);
    // const [error, setError]=useState("");

    async function grabAllMovies(){
        try{
            const response = await fetch("https://swapi.dev/api/films");
            const data = await response.json();
            return data.results;
        }catch{
            // setError("Api not reached")
            console.log("error")
        }
    }

    useEffect(()=>{
        grabAllMovies().then(response=>{
            setMovies(response)
            setLoad(true)
        }).catch(()=>{
            // setError("Api not reached")
        })
    },[])

  return (
    <>
        {/*{error!==""&&<h1>{error}</h1>}*/}
        {!load?<h1>Loading</h1>:movies.map((i, idx)=>
            <Movie key={idx} dt={i}/>
        )}
    </>
  )
}

export default App
