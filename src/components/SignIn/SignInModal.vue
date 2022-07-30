<script>
import { onBeforeUnmount } from 'vue'


export default {
    name: "SignInModal",
    beforeUnmount() {
        console.log('comp will be unmounted.')
    },
    props: {
        isModalOn: Boolean
    },
    data: () =>({
        username: "",
        password: "",
        sayHi: 'Hello there',
        string: 'what is up'
    }),
    methods: {

    
    },
    update: {
        
    },
    watch:{
        username(newVal, oldVal){
            console.log('newVal: ', newVal)
            console.log(oldVal)
        }
    },
    setup() {
        onBeforeUnmount(() => {
            console.log('hey there tacos')
        });
        
    },
      
}


</script>


<template>
    <b-modal v-if="(isModalOn)" id="modal-no-backdrop" hide-backdrop
        content-class="shadow"
        class="signInModal position-fixed border w-25 h-50 bg-light shadow rounded container-fluid"
        title="BootstrapVue">
        <section class="row noMargin noPadding border-bottom">
            <section class="col-12 d-flex justify-content-center align-items-center pt-3">
                <h3 class="">Sign-in</h3>
            </section>
        </section>
        <section class="row noMargin noPadding pb-5">
            <!-- put the following into this section: username and password -->
            <section class="col-12">
                <form action="submit" class="row d-flex flex-column border-bottom pb-5">
                    <section class="col-12 d-flex justify-content-center align-items-center position-relative flex-column pt-3 pb-3">
                        <label for="username" class="inputHeader" >Username</label>
                        <input v-model="(username)" id="username" type="text" class="rounded w-75 border border-secondary pt-1 pb-1" placeholder="Enter username">
                    </section>
                    <section class="col-12 d-flex justify-content-center align-items-center position-relative flex-column pt-3 pb-3">
                        <label for="password" class="inputHeader" >Password</label>
                        <input v-model="(password)" id="password" type="text" class="rounded w-75 border border-secondary pt-1 pb-1" placeholder="Enter password">
                    </section>
                </form>
                <section class="row noMargin noPadding">
                    <section class="col-12 d-flex pt-2 ps-3">
                        <a href="">Create an account.</a> 
                    </section>
                </section>
            </section>
        </section>
    </b-modal>
</template>



<style scoped>
.signInModal {
    transform: translate(-90%, 10%)
}

.inputHeader{  
    font-size: 20px;
}
</style>
