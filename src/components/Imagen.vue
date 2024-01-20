<template>
    <div class="container">
      <img class="img-caja" :src="imagenUrl" alt="no existe la imagen">
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

<style scoped>

.container{
    display: grid;
   justify-content: center;
   align-items: center;
   margin: 0px 37px
}


.img-caja{
    width: 200px;
    height: 300px;
    border: 10px solid black;
}


label{
    font-size: 27px;
    background: rgb(201, 223, 255);
    margin: 20px;
}


</style>