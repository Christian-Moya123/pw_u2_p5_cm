<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <button v-on:click="sumarUno()">+1</button>
    <button v-on:click="restarUno()">-1</button>

  </div>
</template>

<script>
export default {

  //primera forma de declarar
  // props:['titulo','valor'],

  //segunda forma de declarar es mas efeciente
  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        if (value > 0) {
          console.log("ERRRORRR")
        }
        return value > 0
      },
    },
  },

  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {

    obtenerCuadrado() {
      console.log("se calcula el cuadrado")
      return this.counter * this.counter
    },

    sumarUno() {
      this.counter++
    },

    restarUno() {
      this.counter--
    },


  },
  computed: {

    obtenerCuadradoComputado() {
      console.log("se calcula el cuadrado computada")
      return this.counter * this.counter

    }
  }


}
</script>

<style scoped>
  button {
    background: #64b687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: crosshair;
    margin: 0px 5px;
    padding:  5px 14px;
  }
  button:hover{
    background: #2a4e3a;
  }

  h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 22px;
    font-weight: bold;
  }

  p{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bold;
  }
</style>