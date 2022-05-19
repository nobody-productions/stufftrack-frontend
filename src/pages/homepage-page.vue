<template>
    <Nav-dashboard></Nav-dashboard>
    <div class="container-fluid">
        <!-- La barra superiore -->
        <div class="row">
            <navLandingVue></navLandingVue>
        </div>
        <div class="container mt-5">
            <div class="position-relative border-5 overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                <div class="">
                    <div class="row align-items-center">
                        <div class="col">
                            <div class="row">
                                <h1 class="display-2">I tuoi <div class="invert"><div class="message">interessi</div></div>.</h1>
                            </div>
                            <div class="row">
                                <h1 class="display-2">Il tuo <div class="invert">tempo</div>.</h1>
                            </div>
                            <div class="row">
                                <h1 class="display-2">
                                    <div class="invert">Una sola</div> app.
                                </h1>
                            </div>
  </div>
                        <div class="col-6">
                            <div
                                class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div class="my-3 py-3">             
                                            <h2 class="display-5">Stufo del login?</h2>
                                            <p class="lead">Traccia i tuoi interessi in modo semplice e veloce.</p>
                                            <p class="lead">Lasciati coinvolgere, diventa unico insieme a noi.</p>
                                            <p class="lead">Basta con il login su altri mille sistemi.</p>
                                </div>

                                <a href="/register" type="button" class="btn btn-light btn-lg">Unisciti <i
                                        class="fa-solid fa-circle-arrow-right"></i></a>
                                <div class="box-shadow mx-auto"
                                    style="width: 80%; height: 100px; border-radius: 21px 21px 0 0;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-device box-shadow d-none d-md-block"></div>
                <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        </div>
    </div>
    <footerVue></footerVue>
</template>

<script>
    import navLandingVue from "../components/nav-landing.vue";
    import footerVue from "../components/footer-bar.vue";
    export default {
        name: "homepage-page",
        components: {
            navLandingVue,
            footerVue,
        },
    };
</script>

<style scoped>
    .invert {
        display: inline-block;
        flex-wrap: wrap;
        background-color: white;
        filter: invert(100%);
    }

    .border-5 {
        border: 5px solid black;
        border-width:5px !important;
    }
</style>