<template>
  <h2>HOLA MUNDO</h2>
  <img alt="Vue logo" src="./assets/203381.jpg">
  <contador titulo="contador1" :valor="10"/>
  <contador titulo="contador2" v-bind:valor="calcularValor()"/>
  <contador titulo="contador2"/>
  
</template>

<script>
import contador from './components/contador.vue'

export default {
  name: 'App',
  components: {
    contador
  },
  methods:{
    calcularValor(){
      return 5+5*100
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  width: 100px;
}
</style>

