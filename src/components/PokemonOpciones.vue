<template>
   
   
    <div class="options-container"></div>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selecciono', {id:pokemon.id,nom:'pepe', edad:pokemon.nombre})">{{ pokemon.nombre }}</li>
    </ul>
  </template>
   
  <script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
   
      }
    }
  };
  </script>
<style>
ul{
    list-style: none;
}
li{
    background: white;
    border-radius: 5px;
    border: 1px solid black;
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}
li:hover{
    background: rgba(0, 0 , 0, 0.3);
}
.optionsContainer{
    display: flex;
    justify-content: center;
}
</style>