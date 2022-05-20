<template>
    <nav class="navbar navbar-light bg-light p-3">
        <div class="col-12 col-md-4 col-lg-2 align-self-center align-items-center">
            <a class="navbar-brand align-self-center text-center" href="#">
                <i class="fa-solid fa-link"></i>
                StuffTrack

            </a>
            <button class="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <!-- Hide this element only on mobile -->
        <div class="dropdown align-items-center align-self-center text-center ps-2  d-md-flex">
            <a href="/register" class="btn btn-outline-secondary btn-outline" style="margin-left: 10px"
                role="button">Registrati</a>
            <a href="/login" class="btn-dark btn" style="margin-left: 10px" role="button">Accedi</a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Nav-landing",
    }
</script>

<style scoped>
    /* import boostrap css */
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    @import url('https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css');
</style>