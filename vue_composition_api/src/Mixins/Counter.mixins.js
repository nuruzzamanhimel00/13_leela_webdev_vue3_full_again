const CounterMixin = {
    data(){
        return {
            counter: 0
        }
    },
    methods:{
        IncrementHandler(){
             this.counter++;
        }
    }
}

export default CounterMixin;