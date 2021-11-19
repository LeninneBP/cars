<template>
    <div>
        <h1 class="galeria__h1">Galeria</h1>
        <div>
           
            <ul>
                <il class="card__lista" v-for="carro in carros" v-bind:key="carro">
                    <Card class="card" >
                        <template #header>
                        <ImagePreview class="card__img" v-bind:alt="carro.nome" v-bind:src="carro.imagem" heigth="100" preview />
                        </template>
                        <template  class="card__title" #title>
                        {{carro.nome}}
                            
                            <Tag  v-bind:severity="carro.cor_tag" v-bind:value="carro.tag" rounded></Tag>
                        </template>
                        <template class="card__subtitle" #subtitle>
                        </template>
                        <template #content>
                        <ScrollPanel style="width: 100%; height: 100px">
                                <p class="card__p">{{ carro.descricao}}</p>
                        </ScrollPanel> <br>
                            <!-- <Rating v-model="val2"  :cancel="false" /> -->
                        </template>
                    </Card>
                 </il>
            </ul>
        </div>
        <div class="paginator">
            <Paginator :rows="5" :totalRecords="totalRecords" :rowsPerPageOptions="[5,10,15]"></Paginator>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            // val1: 5,
            // val2: 5,

            carros: [
                {
                  nome:'R33', 
                  imagem:'https://1.bp.blogspot.com/-XYCVzAWUoc4/X5RGms_InuI/AAAAAAAAdCQ/Yw3MHByaa7k1rkhpiXpVNvQgRRY_MULbwCLcBGAsYHQ/s800/WdNqWVdBSF-kBNSoBEX28g.webp',
                  descricao:'Com velocidade máxima de 250 km/h,um peso de 1530 kgs, o R33 Skyline GT-R está equipado com um motor Em linha de 6 cilindros turbocompressor, a Gasolina, com o código de motor RB26DETT. Este motor produz uma potência máxima de 280 CV.',
                  tag: 'Japão' 
                    ,cor_tag: 'danger'
                },
                {
                  nome:'Supra',
                  imagem:'https://lh3.googleusercontent.com/-aTEEZLyGMRY/YIFPyx5GG1I/AAAAAAAAFDE/4K5bYJfxgTE0HWVo5yUmXd2pulZP_nVjgCLcBGAsYHQ/w1200-h630-p-k-no-nu/image.png',
                  descricao:' Com velocidade máxima de 250 km/h, um peso de 1585 kgs, o Supra IV 3.0i Turbo está equipado com um motor Em linha de 6 cilindros turbocompressor, a Gasolina, com o código de motor 2JZ-GTE.Este motor produz uma potência máxima de 330 CV.'
                  ,tag: 'Japão'
                  ,cor_tag: 'danger'
               },
                {
                   nome:'RX7',
                   imagem:'http://pm1.narvii.com/7729/c3fa25f63c00f43f0d61ab7a8967b3bbd8cd3213r1-736-489v2_uhq.jpg', 
                   descricao:'Com velocidade máxima de 239 km/h,um peso de 1300 kgs, o Mazda RX-7 está equipado com um motor dois rotores, 1.308 cm3, a gasolina, biturbo. Este motor produz uma potência máxima de 255 CV.'
                   ,tag: 'Japão'
                   ,cor_tag: 'danger'
                },
                {
                   nome:'Celsior',
                   imagem:'https://stancecars.com/wp-content/uploads/2020/06/first-class-japan-takahiro-fujiki-s-toyota-celsior.jpg', 
                   descricao:'Com velocidade máxima de 215 km/h,um peso de 2345 kgs, o Toyota Celsior está equipado com um motor 4.0 V8, 1.308 cm3, a gasolina, com o código de motor 1UZ-FE. Este motor produz uma potência máxima de 260 CV.'
                    ,tag: 'Japão'
                    ,cor_tag: 'danger'
                },
                {
                   nome:'Lancer Evo',
                   imagem:'https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg', 
                   descricao:'Com velocidade máxima de 228 km/h,um peso de 1590 kgs, o Mitsubishi Lancer Evo está equipado com um motor 2.0 16V, Turbo 4x4, a gasolina. Este motor produz uma potência máxima de 250 CV.'
                   ,tag: 'Japão'      
                   ,cor_tag: 'danger'         
                },
                {
                   nome:'Subaru WRX',
                   imagem:'https://cdn.aquelamaquina.pt/images/2019-01/img_1200x675$2019_01_15_11_48_34_135853.jpg', 
                   descricao:'Com velocidade máxima de 250 km/h,um peso de 1530 kgs, o Subaru WRX está equipado com um motor 2.5 Turbo, tração integrada, a gasolina, com o código do motor EJ257. Este motor produz uma potência máxima de 310 CV.'
                   ,tag: 'Japão'
                   ,cor_tag: 'danger'
                },
                {
                   nome:'370z',
                   imagem:'https://lh3.googleusercontent.com/proxy/-9lAlEJ4els7AZtpF18wy1Rtz13unx3NEgQ0zSs8qWg3U611JDcWyZfjrKNkYtRIoTY5EAkUmcuyVEjjaKv3ZbtV78o', 
                   descricao:'Com velocidade máxima de 250 km/h,um peso de 1496 kgs, o Nissan 370z está equipado com um motor V6 aspirado, a gasolina,. Este motor produz uma potência máxima de 328 CV.'
                    ,tag: 'Japão'
                    ,cor_tag: 'danger'
                },
                {
                   nome:'Silvia s14',
                   imagem:'https://vistapointe.net/images/nissan-silvia-s14-1.jpg', 
                   descricao:'velocidade máxima de 235 km/h, um peso de 1240 kgs, o 200 SX S14 2.0 Turbo está equipado com um motor Em linha de 4 cilindros turbocompressor, a Gasolina, com o código de motor SR20DET.Este motor produz uma potência máxima de 200 CV'
                   ,tag: 'Japão'
                   ,cor_tag: 'danger'
                },
                {
                    nome: 'Charger Hellcat',
                    imagem: 'https://www.planetcarsz.com/assets/uploads/2019/06/DODGE%20CHARGER%20SRT%20HELLCAT%20OCTANE%202019%2001.jpg',
                    descricao:'velocidade máxima de 328 km/h, um peso de 2075 kgs, Charger Hellcat está equipado com um motor V8, a Gasolina.Este motor produz uma potência máxima de 717 CV',
                    tag: 'U.S.A'
                    ,cor_tag: 'info'

                },
                {
                    nome: 'Challenger SRT Demon',
                    imagem: 'https://www.planetcarsz.com/assets/uploads/2018/10/55e0c4427f413a82a6ab51fd40987b56.jpg',
                    descricao:'velocidade máxima de 326 km/h, um peso de 2018 kgs, o Dodge Challenger SRT Demon está equipado com um motor V8 , a Gasolina, com o código de motor HEMI Demon V8.Este motor produz uma potência máxima de 840 CV',
                    tag: 'U.S.A'
                    ,cor_tag: 'info'

                }
            ]
       }
    }
} 
</script>
<style scoped>
.galeria__h1{
    
    font-style: italic;
    font-size: 25px;
    margin-top: 30px;
}
.card{
    width: 18rem;
    /* height: ; */
    margin-bottom: 1em;
    /* border:2px solid #000000; */
    margin-left: 30px;
    margin-top: 60px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.9);
    display: inline-block;
}
.card__p{
    color: #000000;
    font-style: italic;
    /* overflow: scroll; */
}
.card__title{
    color: #000000;   
}
.card__image{
    width: 100%; 
}
.card__scroll{
    width: 100%;
    height: 100px;
}
</style>