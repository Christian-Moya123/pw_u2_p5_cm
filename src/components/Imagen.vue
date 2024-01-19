<template>
    <div class="container">
      <img :src="imagenUrl" alt="no existe la imagen">
      <label>{{ texto }}</label>
    </div>
  </template>

  <script>
  export default {
    props: {
      texto: {
        type: String
      },
      imagenUrl: {
        type: String
      }
    }
  };
  </script>

  <style>
  img {
    width: 200px;
    height: 300px;
  }
  </style>