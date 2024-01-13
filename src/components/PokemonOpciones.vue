<template>
  <div class="optionsContainer">

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>

  </div>
</template>

<script>
export default {

}
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