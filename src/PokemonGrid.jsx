import React, { useState } from 'react'

export const PokemonGrid = ({pokemon, pokemonUrl}) => {
    

    const [pokArray, setPokArray] = useState([]);
    const [pokUrlArray, setPokUrlArray] = useState([]);

    pokemon.map(p => (
        setPokArray(p)
    ))

    pokemonUrl.map(pUrl => (
        setPokUrlArray(pUrl)
    ))

  return (
    <div>
        {console.log(pokArray)}
        <p className='card' key={pokemon}>{pokemon}{pokemonUrl}</p>
    </div>
  )
}
 export default PokemonGrid;