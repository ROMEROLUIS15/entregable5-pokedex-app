import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemons}) => {
  return (
    //otra manera de dar estilos a este "section": <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1200px] mx-auto gap-6 py-10">
     {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} PokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;