import React, {useState} from "react";
import fetchPokemon from "./fetchPokemon";

const Pokemon = ({id})=>{
return null;
};

export const PokemonPager=()=>{
  const [id, setId] = useState(1);

  return(
      <div>
          <button type="button" onClick={()=>setId(id!==1? id-1 : 0)}>
              Previous</button>
          <button type="button" onClick={()=>setId(id!==250? 0 : id+1)}>
              Next</button>
          <Pokemon id={id}/>
      </div>
  )

};

export default PokemonPager