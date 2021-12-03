<template>
        <div class="destaques">
            <h1>Destaques</h1>
        
        <div>
            <li class="destaques__list"><img class="destaques_moldura" src="https://1.bp.blogspot.com/-XYCVzAWUoc4/X5RGms_InuI/AAAAAAAAdCQ/Yw3MHByaa7k1rkhpiXpVNvQgRRY_MULbwCLcBGAsYHQ/s800/WdNqWVdBSF-kBNSoBEX28g.webp" alt="carro" /><p/><router-link class="destaques__link" to="/galeria">Skyline R33</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://lh3.googleusercontent.com/-aTEEZLyGMRY/YIFPyx5GG1I/AAAAAAAAFDE/4K5bYJfxgTE0HWVo5yUmXd2pulZP_nVjgCLcBGAsYHQ/w1200-h630-p-k-no-nu/image.png"/><p/><router-link class="destaques__link" to="/galeria">Supra MK4</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="http://pm1.narvii.com/7729/c3fa25f63c00f43f0d61ab7a8967b3bbd8cd3213r1-736-489v2_uhq.jpg"/><p/><router-link class="destaques__link" to="/galeria">Mazda Rx7</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://vistapointe.net/images/nissan-silvia-s14-1.jpg"/><p/><router-link class="destaques__link" to="/galeria">Silvia S14</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://media.ed.edmunds-media.com/nissan/370z/2019/oem/2019_nissan_370z_coupe_base_fq_oem_1_1280.jpg"/><p/><router-link class="destaques__link" to="/galeria"> 370z</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://cdn.aquelamaquina.pt/images/2019-01/img_1200x675$2019_01_15_11_48_34_135853.jpg"/><p/><router-link class="destaques__link" to="/galeria">Subaru Wrx</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://stancecars.com/wp-content/uploads/2020/06/first-class-japan-takahiro-fujiki-s-toyota-celsior.jpg"/><p/><router-link class="destaques__link" to="/galeria">Toyota Celsior</router-link></li>
            <li class="destaques__list"><img class="destaques_moldura" src="https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg"/><p/><router-link class="destaques__link" to="/galeria">Lancer Evo VII</router-link></li>
        </div>
        <div class="baixo">
        </div>
    </div>
</template>
<script>

import {firebaseApp} from '@/firebase/firebase-app.js';
export default {

mounted: () => {
    console.log(firebaseApp)
    console.log(firebaseApp.storage())
    }
}
// let storage = firebase.storage();
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
