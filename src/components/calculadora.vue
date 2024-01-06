<template>
    <div class="container">
        <div class="calculadora">


            <div class="display">
                <label id="idlabel" for="">{{ resultado }}</label>
            </div>

            <button class="bC" v-on:click="limpiar()">C</button>
            <button id="del" v-on:click="borrarUno()">&#8656;</button>
            <button v-on:click="mostarPantalla('/')">/</button>
            <button v-on:click="mostarPantalla('7')">7</button>
            <button v-on:click="mostarPantalla('8')">8</button>
            <button v-on:click="mostarPantalla('9')">9</button>
            <button v-on:click="mostarPantalla('*')">X</button>
            <button v-on:click="mostarPantalla('4')">4</button>
            <button v-on:click="mostarPantalla('5')">5</button>
            <button v-on:click="mostarPantalla('6')">6</button>
            <button v-on:click="mostarPantalla('-')">-</button>
            <button v-on:click="mostarPantalla('1')">1</button>
            <button v-on:click="mostarPantalla('2')">2</button>
            <button v-on:click="mostarPantalla('3')">3</button>
            <button v-on:click="mostarPantalla('+')">+</button>
            <button v-on:click="mostarPantalla('0')" class="bC">0</button>
            <button v-on:click="mostarPantalla('.')">.</button>
            <button v-on:click="calcular()">=</button>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        valor: {
            type: Number
        }

    },

    data() {
        return {
            resultado: "",

        };
    },

    methods: {
        mostarPantalla(numero) {
            this.resultado += numero
        },

        limpiar() {
            this.resultado = ""
        },

        calcular() {
            try {
                this.resultado = eval(this.resultado);


            } catch (error) {
                limpiar();
            }
        },


        borrarUno() {
            this.resultado = this.resultado.slice(0, -1); 
        }
    }



}
</script >

<style scoped>
.calculadora {
    display: grid;
    /* grid-template-columns: 75px 75px 75px 75px; */
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: 150px repeat(5, 75px);
    background-color: rgb(210, 250, 30);
    margin-left: 520px;
    margin-right: 560px;
    border-radius: 32px;
    padding: 15px;
    box-shadow: 15px 10px 5px 5px rgba(0, 0, 0, 0.435);
}

.display {
    grid-column: span 4;
    padding: 15px;
    margin: 10px 10px 20px 20px;
    background-color: #95A4FA;
    border-radius: 32px;
    text-align: right;
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.435);
}

button {
    cursor: pointer;
    margin: 5px;
    padding: 0;
    border-radius: 32px;
    border: none;
    background-color: #95A4FA;
    box-shadow: 5px 5px 10px 5px #00000040;
    font-size: 25px;

}

button:active {
    background-color: #1E86FA;
}

.bC {
    grid-column: span 2;
}

body {
    background-color: #8B1EFA;
}


* {
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>