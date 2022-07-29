<template>
<div className='unfixed-wrapper'>
            <nav className="navbar bg-secondary navbar-expand-md flex-column navbar-light bg-light fixed-top border-bottom border-top-0 noPadding alignItemsDefault noMargin container-fluid">
                <section class="row noMargin noPadding w-100 h-100 position-relative d-flex">
                    <section class="col-12 d-flex justify-content-center align-items-center">
                            <h3 class="display-6">
                                Take a quiz!
                            </h3>
                    </section>
                    <div class="h-100 btnSec position-absolute d-flex justify-content-center align-items-center">
                        <button type="button" class="btn btn-secondary">
                        <font-awesome-icon icon="bars" />
                        </button>
                    </div>
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

.btnSec{
    right: 0;
    bottom: 0;
    width: 200px
}

</style>
