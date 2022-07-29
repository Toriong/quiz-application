<template>
<div className='unfixed-wrapper'>
            <nav className="navbar bg-secondary navbar-expand-md flex-column navbar-light bg-light fixed-top border-bottom border-top-0 noPadding alignItemsDefault noMargin container-fluid">
                <section class="row noMargin noPadding w-100 h-100 position-relative">
                    <section class="col-12 d-flex justify-content-center align-items-center">
                        <router-link to="/create-account">
                            Take a quiz!
                        </router-link>
                    </section>
                    <section class="position-absolute">

                    </section>
                </section>
            </nav>
        </div>
</template>

<script>

export default {
    name: "NavBar"
}

</script>

<style scoped>
.navbar,
.unfixed-wrapper{
    height: 150px;
}
</style>
