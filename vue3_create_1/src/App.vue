<template>
  <div>
    <div class="container">
        <button  v-for="(value, key) in buttonData" :key="key" class="btn btn-success"
        :class="[value == 'Home' ? 'btn-success' : [ value == 'About' ? 'btn-warning' : [ value == ' Details' ? 'btn-danger' : [value == 'Info' ? 'btn-light' : '' ] ] ] ]"
        @click="onComponentChange(value)"
        >
        {{value}}
        </button>
        <keep-alive>
           <component v-bind:is="currentTabComponent"  ></component>
        </keep-alive>
         
    </div>

      
  </div>
</template>

<script>
import HomeComp from './components/HomeCom.vue'
import AboutComp from './components/AboutCom.vue'
import DetailsComp from './components/DetailsCom.vue'
import InfoComp from './components/InfoCom.vue'

export default {
  data() {
    return {
      currentTabComponent: 'HomeComp',
      buttonData:['Home','About','Details','Info']
    }
  },
  components:{
    HomeComp,
    AboutComp,
    DetailsComp,
    InfoComp
  },
  methods: {
    onComponentChange(value){
      this.currentTabComponent = value+"Comp";
    }
  },
}
</script>

<style>

</style>
