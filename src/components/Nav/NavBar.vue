
<script>
import SignInSec from "../SignIn/SignInSec.vue";

// GOAL: show the side modal when the user presses the button

// the modal appears on the screen

// the user presses on the button 

// QUESTIONS:
// how do I respond to the user presses a button on the DOM?

// how do I conditionally render elements onto the screen?  


export default {
    name: "NavBar",
    components: { SignInSec }
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
                        <SignInSec/>
                    </div>
                </div>
            </section>
        </nav>
    </div>
</template>


