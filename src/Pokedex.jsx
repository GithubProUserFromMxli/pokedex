import { useEffect, useState } from "react";
import PokemonGrid from "./PokemonGrid";
import axios from "axios";
import { Pagination } from "./Pagination";

export const Pokedex = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [pokemonUrl, setPokemonUrl] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        let cancel;
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false);
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
            setPokemon(res.data.results.map(p => p.name));
            setPokemonUrl(res.data.results.map(p => p.url));

    })  

        return () => cancel();
    }, [currentPageUrl])
    

    const goToNextPage = () => setCurrentPageUrl(nextPageUrl);
    const goToPrevPage = () => setCurrentPageUrl(prevPageUrl);

    if (loading) return 'Loading pokedex...'
    
    return(
        <>
        <h1>POKEDEX </h1>
        <PokemonGrid pokemon={pokemon} pokemonUrl={pokemonUrl}/>
        <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
        </>
    )
}