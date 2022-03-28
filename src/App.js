import { useEffect, useState, useMemo } from 'react';
import { MyPokemonContext } from './MyPokemonContext';
import PokemonList from './pages/PokemonList';
import { PokemonListContext } from './PokemonsContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemons from './pages/MyPokemons';
import useLoadPokemons from './hooks/useLoadPokemons';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // pokemon provider
  const [pokemons, setPokemons, loadMorePokemons] = useLoadPokemons()
  const pokemonListProvider = useMemo(() => ({pokemons, setPokemons, loadMorePokemons}), [pokemons, setPokemons, loadMorePokemons])

  // MyPokemon localStorage and provider
  const [myPokemons, setMyPokemons] = useLocalStorage("myPokemons", [])
  const myPokemonsProvider = useMemo(() => ({ myPokemons, setMyPokemons }), [myPokemons, setMyPokemons])

  return (
    <MyPokemonContext.Provider value={myPokemonsProvider}>
      <PokemonListContext.Provider value={pokemonListProvider}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PokemonList />}/>
            <Route path='/pokemons/:id' element={<PokemonDetail />}/>
            <Route path='/myPokemons' element={<MyPokemons />}/>
          </Routes>
        </BrowserRouter>
      </PokemonListContext.Provider>
    </MyPokemonContext.Provider>
  );
}

export default App;
