<template>
        <div class="destaques">
            <h1>Destaques</h1>
        
        <div>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/r33.png" alt="carro" /><p/><a class="destaques__link" href="/galeria">Skyline R33</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/supra.png"/><p/><a class="destaques__link" href="/galeria">Supra MK4</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/rx7.png"/><p/><a class="destaques__link" href="/galeria">Mazda Rx7</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/silvia_s14.png"/><p/><a class="destaques__link" href="/galeria">Silvia S14</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/370z.png"/><p/><a class="destaques__link" href="/galeria">Nissan 370z</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/wrx.png"/><p/><a class="destaques__link" href="/galeria">Subaru Wrx</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/celsior.png"/><p/><a class="destaques__link" href="/galeria">Toyota Celsior</a></li>
            <li class="destaques__list"><img class="destaques_moldura" src="../../assets/carros/lancer.png"/><p/><a class="destaques__link" href="/galeria">Lancer Evo VII</a></li>
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
