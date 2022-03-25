import logo from './logo.svg';
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import styled from '@emotion/styled';

function App() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon"
  const [pokemons, setPokemons] = useState([])
  const [morePokemons, setMorePokemons] = useState("")

  const getPokemonByUrl = async url => {
    const response = await fetch(url)
    const data = await response.json()
    return {
      "id": data.id,
      "name": data.name,
      "image": data.sprites.other.dream_world.front_default,
      "moves": data.moves.map(m => m.move.name).slice(0, 5),
      "type": data.types[0].type.name,
    }
  }

  useEffect(async () => {
    const response = await fetch(endpoint)
    const data = await response.json()

    setMorePokemons(data.next)

    data.results.forEach(async d => {
      const poke = await getPokemonByUrl(d.url)
      setPokemons(old => [...old, poke])
    });

    document.title = "Pokemon List"
  }, [])

  const Grid = styled.div`
    margin: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 18rem);
    justify-content: center;
  `
  const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
  `

  return (
    <div>
      <Title>Pokemon List</Title>
      <Grid>
        {pokemons.length > 0 && pokemons.map(poke => <PokeCard pokemon={poke}/>)}
      </Grid>
    </div>
  );
}

export default App;
