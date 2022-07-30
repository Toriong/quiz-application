<template>
    <div className='unfixed-wrapper'>
        <nav
            id="navigationBar"
            className="navbar bg-secondary navbar-expand-md flex-column navbar-light bg-light fixed-top border-bottom border-top-0 noPadding alignItemsDefault noMargin container-fluid">
            <section
                class="row noMargin noPadding w-100 h-100 position-relative d-flex">
                <section
                    class="col-12 d-flex justify-content-center align-items-center">
                    <h3 class="display-6">
                        Take a quiz!
                    </h3>
                </section>
                <div
                    class="h-100 btnSec position-absolute d-flex justify-content-center align-items-center">
                    <div class="position-relative">
                        <button type="button"
                            class="btn btn-secondary"
                            v-on:click="(handleBtnClick)">
                            <font-awesome-icon icon="bars" />
                        </button>
                        <b-modal v-if="(isModalOn)" id="modal-no-backdrop" hide-backdrop
                            content-class="shadow"
                            class="signInModal position-fixed border"
                            title="BootstrapVue">
                            <p class="my-2">
                                We've added the utility class
                                <code>'shadow'</code>
                                to the modal content for added effect.
                            </p>
                        </b-modal>
                    </div>
                </div>
            </section>
            <!-- How do i conditional open a modal? -->

        </nav>
    </div>
</template>

<script>

// GOAL: show the side modal when the user presses the button

// the modal appears on the screen

// the user presses on the button 

// QUESTIONS:
// how do I respond to the user presses a button on the DOM?

// how do I conditionally render elements onto the screen?  


export default {
    name: "NavBar",
    data: () => ({
        isModalOn: false
    }),  
    methods: {
        handleBtnClick() {
            this.isModalOn = !this.isModalOn
        }
    }
}


</script>

<style scoped>
.navbar,
.unfixed-wrapper {
    height: 150px;
}

.btnSec {
    right: 0;
    bottom: 0;
    width: 200px;
}

.signInModal{
    
}
</style>
