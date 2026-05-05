import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "../types/apiDataTypes";
import type { PokemonSpecies } from "../types/pokemonSpeciesDataTypes";
import type { AbilityData } from "../types/pokemonAbility";
import type { EvolutionChain } from "../types/evolutionTypes";

const pokedex = createApi({
    reducerPath: "pokeAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2/"
    }),
    endpoints: (builder) => ({
        getPokemon: builder.query<Pokemon, number>({
            query: (id) => `/pokemon/${id}`
        }),
        getPokemonSpecies: builder.query<PokemonSpecies, number>({
            query: (id) => `/pokemon-species/${id}`
        }),
        getPokemonAbilities: builder.query<AbilityData, number>({
            query: (id) => `/ability/${id}`
        }),
        getPokemonEvolution : builder.query<EvolutionChain,number>({
            query : (id) => `/evolution-chain/${id}`
        })
    })
})

export const { useGetPokemonQuery, useGetPokemonSpeciesQuery, useGetPokemonAbilitiesQuery, useGetPokemonEvolutionQuery } = pokedex;
export default pokedex;