<template>
  <div id="app">
    <header class="header">
        <a href="/"><img class="header__img" src="./assets/carro.png" /></a>
        <div class="header__list">
          <ul > 
            <li class="header__list__itens">
           <router-link to="/"> Home</router-link>
            </li>
            <li class="header__list__itens">
               <router-link to="/galeria"> Galeria</router-link>
            </li>
          </ul> 
        </div>
    </header>
  
      <div class="header__down">
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ceviche+One&display=swap');

*{
  padding: 0;
  margin: 0;
  font-family: 'Bebas Neue', serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.header{
  display: flex;
  width: 100%;
  height: auto;
  background-color: #201f1f;
 align-items: center;

}
.header__list{
  list-style: none;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
 }
.header__list__itens{
  color: #ffffff;
  display: inline-block;
  margin-right: 30px; 
  text-align:0ht; 
  font-style: italic;

}
.header__img{
  max-width: 150px;
  height: auto;
}
.header__list__itens a{
  color:#ffffff;
  text-decoration: none;
}
.header__list__itens a:hover{
  opacity: 0.8;
}
 .header__down{
  width: 100%;
  height: 25px;
  background-color: #C6C6C6;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.9)
} 

</style>
