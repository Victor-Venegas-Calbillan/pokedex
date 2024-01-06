import { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { PokemonResponse, SimplePokemon } from "../interfaces";
import PokemonApi from "../api/PokemonApiconfig";
import {
  IoHeartOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    const { data } = await PokemonApi.get<PokemonResponse>(
      "/pokemon"
    );
    const result: SimplePokemon[] = data.results.map(
      (pokemon, id) => ({
        name: pokemon.name,
        id: `${id + 1}`,
      })
    );

    setPokemons(result);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <MainLayout>
      <div className="p-2 max-w-7xl mx-auto md:flex md:flex-wrap md:gap-2 ">
        {pokemons.map((pokemon: SimplePokemon) => (
          <div
            key={pokemon.id}
            className="min-w-[300px] max-w-[400px] mx-auto bg-indigo-100 my-4 rounded-md shadow-xl md:flex md:flex-col md:justify-between"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt=""
              width={150}
              height={150}
              className="mx-auto my-2"
            />
            <h2 className="p-1.5 text-2xl text-center my-1">
              {pokemon.name}
            </h2>
            <div className="flex items-center justify-between gap-3">
              <Link
                to={`/${pokemon.name}`}
                className="p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-950 transition-colors"
              >
                More Info
                <IoHelpCircleOutline className="inline-block ml-2" />
              </Link>
              <button className="p-1.5 bg-red-600 text-white rounded-md hover:bg-red-800 transition-colors">
                Add to Favorites
                <IoHeartOutline className="inline-block ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
