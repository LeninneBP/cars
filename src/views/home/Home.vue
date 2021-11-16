<template>
        <div class="destaques">
            <h1>Destaques</h1>
        
        <div>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/r33.png" alt="carro" /><p/><router-link class="destaques__link" to="/galeria">Skyline R33</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/supra.png"/><p/><router-link class="destaques__link" to="/galeria">Supra MK4</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/rx7.png"/><p/><router-link class="destaques__link" to="/galeria">Mazda Rx7</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/silvia_s14.png"/><p/><router-link class="destaques__link" to="/galeria">Silvia S14</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/370z.png"/><p/><router-link class="destaques__link" to="/galeria"> 370z</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/wrx.png"/><p/><router-link class="destaques__link" to="/galeria">Subaru Wrx</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/celsior.png"/><p/><router-link class="destaques__link" to="/galeria">Toyota Celsior</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/lancer.png"/><p/><router-link class="destaques__link" to="/galeria">Lancer Evo VII</router-link></li>
        </div>
        <div class="baixo">

        </div>

    
    
    </div>
</template>
<script>



</script>
<style scoped>
.destaques{
    
    font-style: italic;
    font-size: 15px;
    margin-top: 20px;
}
.destaques_moldura {
    width: 270px;
    height:150px;
    background: transparent;
    border: 2px solid #000000;
    list-style: none;
    display: inline-block;
    margin-right: 20px;
    margin-top: 55px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.9);
}
.destaques__list{
    list-style: none;
    display: inline-block;
}
.destaques__link{
  text-decoration: none;
  color: #000000;
}
.destaques__link a:hover{
  opacity: 0.8;
}
</style>
