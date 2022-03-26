import { useState, useEffect } from "react"

const endpoint = "https://pokeapi.co/api/v2/pokemon"

export const getPokemonById = async id => {
  const response = await fetch(`${endpoint}/${id}`)
  const data = await response.json()
  return {
    "id": data.id,
    "name": data.name,
    "image": data.sprites.other.dream_world.front_default,
    "moves": data.moves.map(m => m.move.name).slice(0, 5),
    "type": data.types[0].type.name,
  }
}

const useLoadPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("")

  const loadAndTransform = async url => {
    const response = await fetch(url)
    const data = await response.json()

    setLoadMore(data.next)

    data.results.forEach(async d => {
      const id = d.url.split("/").slice(-2, -1)[0]
      const poke = await getPokemonById(id)
      setPokemons(old => [...old, poke])
    });
  }

  useEffect(async () => {
    setPokemons([])
    loadAndTransform(endpoint)
  }, [])

  const loadMorePokemons = async () => {
    console.log("loading more pokemons...")
    loadAndTransform(loadMore)
  }

  return [pokemons, setPokemons, loadMorePokemons]
}

export default useLoadPokemons