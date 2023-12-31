import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { bgByType, borderByType } from "../constants/pokemon"


const PokemonCard = ({PokemonUrl}) => {
    const [pokemon, setPokemon] = useState(null);

 //*esta variable nos permite hacer la logica para separar las clases o tipos de caracteristicas de los pokemons y es llamada en el span de la linea 30
 const types = pokemon?.types.map((type) => type.type.name).join(" / ");

 const firstType = pokemon?.types[0].type.name

    useEffect(() => {
        axios
            .get(PokemonUrl)
            .then(({data}) => setPokemon(data))
            .catch((err) => console.log(err))
    },[])


    return (
        <Link to={`/pokedex/${pokemon?.id}`} className={`capitalize border-8 rounded-lg  text-center ${borderByType[firstType]} `}>
          <header className={`${bgByType[firstType]} h-[140px]`}></header>
          <div className="relative pt-14">
            <div className="absolute w-full top-0 -translate-y-2/3">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
                className="max-w-[180px] mx-auto block"
              />
            </div>
            <h3 className="text-xl font-semibold">{pokemon?.name}</h3>

        {/* *explicacion en linea 7 */}
        <span className="text-sm font-semibold">{types}</span>
        <h5 className="font-semibold text-slate-400 text-xs mb-2">type</h5>
        <hr />
        <ul className=" grid gap-4 grid-cols-2 text-sm p-2">
          {/* aca muestra las caracteristicas de los pokemons, esta marcado para 4 caracteristicas con el metodo slice */}
          {pokemon?.stats.slice(0, 4).map((stat) => (
            <li className="grid gap-1" key={stat.stat.name}>
              <h6 className="font-semibold">{stat.stat.name}</h6>
              <span className="font-bold">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link >
  );
};
export default PokemonCard;