<template>
    <div>
        <ul>
            <il class="card__lista" v-for="carro in carros" v-bind:key="carro">
              <Card class="card" >
                <template #header>
                  <img class="card__img" alt="user header" src="../assets/carros/r33.jpg"/>
                </template>
                <template  class="card__title" #title>
                  Nissan Skyline R33
                </template>
                <template class="card__subtitle" #subtitle>
                </template>
                <template #content>
                  <p class="card__p">Com velocidade máxima de 250 km/h, <br> um peso de 1530 kgs, o R33 Skyline GT-R<br> está equipado com um motor Em linha de 6 cilindros turbocompressor, a Gasolina, com o código de motor RB26DETT.
                    Este motor produz uma potência máxima de 280 CV.</p>
                </template>
              </Card>
            </il>
        </ul>
    </div>
</template>
<script>
export default{
    data() {
        return {
            carros: [
                'r33', 'supra', 'rx7', 'celsior', 'lancer', 'evo','370z', 'silvia'
            ]
        }
    }
}

console.log('data')
</script>
<style>
.card{
  width: 18rem;
  margin-bottom: 1em;
  /* border:2px solid #000000; */
  margin-left: 30px;
  margin-top: 60px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.9);
}
.card__p{
  color: #000000;
  font-style: italic;
}
.card__title{
  color: #000000;
}
.card__lista{
  display: inline-block;
}
</style>