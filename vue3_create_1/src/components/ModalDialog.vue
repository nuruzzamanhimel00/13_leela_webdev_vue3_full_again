<template>
    <div>
        <div class="modalDialog">
            <h3>modal header</h3>
            <div class="modal-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quo distinctio iste dolorum? Eveniet architecto eligendi commodi possimus? In tempore cupiditate corrupti, adipisci nulla error perspiciatis modi ducimus minima rem!
            </div>
             <a href="" class="btn btn-danger"
                 
                     @click.prevent="onCloseModal()"
                >
                    Close Modal
                </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        onCloseModal(){
            this.$emit('closeModal',false);
        }
    },
}
</script>

<style scoped>
.modalDialog{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 30px;
}
  
</style>