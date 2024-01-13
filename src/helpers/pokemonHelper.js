const obtenerIdPokemons = () =>{
    const poemons2=obtnerAleatorio2(600);
    const poemons3=obtnerAleatorio2(600);
    const poemons4=obtnerAleatorio2(600);
    const poemons1=obtnerAleatorio2(600);

    const pokemonsArray =[poemons1,poemons2,poemons3,poemons4]
    console.log(pokemonsArray);
}

const obtenerNombresPokemons = (arreglo) =>{
    const nombre1=consumirAPI(arreglo[0]);
    const nombre2=consumirAPI(arreglo[1]);
    const nombre3=consumirAPI(arreglo[2]);
    const nombre4=consumirAPI(arreglo[3]);

}

function consumirAPI(id){
    return "nombre"
}

const obtenerIdPokemonFachada=()=>{
    obtenerIdPokemons()
}

function obtnerAleatorio(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}

function obtnerAleatorio2(max){
    return Math.floor((Math.random()*max)+1)
}

export default obtenerIdPokemonFachada;