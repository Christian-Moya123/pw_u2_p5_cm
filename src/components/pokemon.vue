
<template>
    <div class="container">

        <div>
            <form @submit="obtenerDatosPokemon">
                <label for="pokemonId">Ingrese el ID del Pokémon:</label>
                <input type="number" v-model="pokemonId" id="pokemonId"  />
                <button type="button" @click="obtenerDatosPokemon">Obtener Datos</button>
            </form>

            <div v-if="pokemonData">

                <h2>{{ pokemonData.name }}</h2>
                <p>Peso: {{ pokemonData.weight }}</p>
                <p>Experiencia Base: {{ pokemonData.base_experience }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemonId: '',
            pokemonData: null
        };
    },
    methods: {
        async obtenerDatosPokemon() {

            const { name, weight, base_experience } = await fetch(this.contruirURLAPI())
                .then(response => response.json());

            this.pokemonData = { name, weight, base_experience };

        },
        contruirURLAPI() {
            return "https://pokeapi.co/api/v2/pokemon/" + this.pokemonId;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;


}

.container {
    background: rgb(243, 173, 173);
    margin-left: 500px;
    margin-right: 500px;

    border: 3px solid black;
    border-radius: 20px;

}


form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 20px auto;
}

label {
    margin-bottom: 10px;
}

input {
    padding: 5px;
    margin-bottom: 10px;
}

button {
    background-color: #3566a7;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

div {
    margin-top: 20px;
}
</style>