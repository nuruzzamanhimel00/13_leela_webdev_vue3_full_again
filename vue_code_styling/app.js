const app = Vue.createApp({
    data(){
        return {
            boxASelect: false,
            boxBSelect: false,
            boxCSelect: false,
        }
    },
    methods: {
       onBoxSelect(box){
        if(box == 'A'){
            this.boxASelect = true;
        }else  if(box == 'B'){
            this.boxBSelect = true;
        }
        else  if(box == 'C'){
            this.boxCSelect = true;
        }
       }
    },
});
app.mount('#app');
  