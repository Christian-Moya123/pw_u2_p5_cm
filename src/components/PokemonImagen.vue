<template>
  <h1>Imagen</h1>
<div class="pokemonContainer">

  <img class="ocultar"  :src="imagenFuente" alt="no hay imagen">

  <img v-if="showPokemon"  :src="imagenFuente" alt="no hay imagen">

</div>
</template>

<script>
export default {
    props:{
        pokemonId:{
            type:Number,
            required:true
        },

        showPokemon:{
            type:Boolean,
            required:true,
            default:false
        }
    },

    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style>
.ocultar{
    filter: brightness(0);
}

img{
    height: 200px;
    position: absolute;
    right: 45%;
}

.pokemonContainer{
    height: 200px;
}
</style>