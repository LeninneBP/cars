<template>
  <div id="app">
    <header class="header">
        <img class="header__img" src="./assets/carro.png" />
        <ul class="header_list">
          <li class="header__list__itens">Galeria</li>
          <li class="header__list__itens">Home</li>
        </ul>



    </header>
  
    <Home/>
  </div>
</template>

<script>
// import Home from './components/home/Home.vue';

// export default{

//   name: 'Home',
//   components:{
//     'Home':  Home
//   }
// }

</script>

<style>
*{
  padding: 0;
  margin: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.header{
  width: 100%;
  height: auto;
  background-color: #201f1f;
  text-align: right;
}
.header__list{
  list-style: none;
  }
.header__list__itens{
  color: #ffffff;
  display: inline-block;
  margin-right: 20px;
  text-align: right;
}
.header__img{
  max-width: 150px;
  height: 120px;
}
</style>
