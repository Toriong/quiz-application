<script>
import SignInModal from './SignInModal.vue'

// GOAL: show the side modal when the user presses the button

// the modal appears on the screen

// the user presses on the button 

// QUESTIONS:
// how do I respond to the user presses a button on the DOM?

// how do I conditionally render elements onto the screen?  


export default {
    name: "SignInSec",
    data: () => ({
        isModalOn: false
    }),
    methods: {
        handleBtnClick() {
            this.isModalOn = !this.isModalOn;
        },
    },
    components: { SignInModal }
}


</script>

<template>
    <button type="button" class="btn btn-secondary"
        v-on:click="(handleBtnClick)">
        <font-awesome-icon icon="bars" />
    </button>
    <SignInModal :isModalOn=isModalOn />
</template>



<style scoped>
.signInModal {
    transform: translate(-90%, 10%)
}

.inputHeader{  
    font-size: 20px;
}
</style>
