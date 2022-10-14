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

         <br>
        <hr>
        <a href="" class="btn btn-success"
          @click.prevent="onOpenModal()"
        >
          Open Modal
        </a>
        <teleport to='body' >
            <modal-dialog v-if="showModal" 
              @closeModal="onCloseModal($event)"> 
            </modal-dialog>
        </teleport>

        
        <hr>
         
    </div>

      
  </div>
</template>

<script>
// import HomeComp from './components/HomeCom.vue'
// import AboutComp from './components/AboutCom.vue'
// import DetailsComp from './components/DetailsCom.vue'
// import InfoComp from './components/InfoCom.vue'

// blog url: https://learnvue.co/tutorials/lazy-load-components
// title: Lazy Load Components in Vue with defineAsyncComponent
// async component

import { defineAsyncComponent } from 'vue'

// import ModalDialog from './components/ModalDialog.vue'

const HomeComp = defineAsyncComponent(() =>
  import(/*homeCOmpoenet */'./components/HomeCom.vue')
)
const AboutComp = defineAsyncComponent(() =>
  import(/*AboutComp */'./components/AboutCom.vue')
)
const DetailsComp = defineAsyncComponent(() =>
  import(/*DetailsComp */'./components/DetailsCom.vue')
)
const InfoComp = defineAsyncComponent(() =>
  import(/*InfoComp */'./components/InfoCom.vue')
)

const ModalDialog = defineAsyncComponent(() =>
  import('./components/ModalDialog.vue')
)

export default {
  data() {
    return {
      currentTabComponent: 'HomeComp',
      buttonData:['Home','About','Details','Info'],
      showModal:false,
    }
  },
  components:{
    HomeComp,
    AboutComp,
    DetailsComp,
    InfoComp,
    ModalDialog
  },
  methods: {
    onComponentChange(value){
      this.currentTabComponent = value+"Comp";
    },
    onOpenModal(){
      this.showModal = true;
    },
    onCloseModal(event){
      this.showModal = event;
    }
  },
}
</script>

<style>

</style>
