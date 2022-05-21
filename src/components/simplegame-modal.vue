<template>
    <div class="modal" tabindex="-1" id="simplegame-modal" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ videogame.name }}</h5>
                    <button type="button" class="btn-close" id="dismiss" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="row text-center d-block">
                                    <img v-bind:src="videogame.image" style="width: auto;" alt="">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="row">
                                    <h1 class="mb-0">{{ videogame.name }}</h1>
                                    <div class="text-secondary"> <b>Piattaforme: </b><span class="me-1"
                                            v-for="platform in this.videogame.platforms" :key="platform.id">{{
                                                    platform.name
                                            }} </span></div>
                                    <div class="text-secondary"> <b>Anno: </b>{{ this.videogame.year }} </div>
                                    <div class="text-secondary"> <b>Sviluppatori: </b><span class="me-1"
                                            v-for="developer in this.videogame.developers" :key="developer.id">{{
                                                    developer.name
                                            }} </span></div>
                                    <div class="text-secondary"> <b>Genere: </b><span class="me-1"
                                            v-for="genre in this.videogame.genres" :key="genre.id">{{ genre.name
                                            }} </span></div>
                                    <div class="text-secondary"> <b>Gioco originale: </b>
                                        <span v-if="this.remake.original">
                                            <span class="me-1">{{ vg }}</span>
                                        </span>
                                        <span v-else>-</span>
                                    </div>

                                    <div class="text-secondary"> <b>Remake: </b>
                                        <span v-if="this.remake.remake">
                                            <span class="me-1">{{ vg }}</span>
                                        </span>
                                        <span v-else>-</span>
                                    </div>

                                </div>

                                <div class="row mt-3">
                                    <h4>Descrizione</h4>
                                    <p class="bg-light">
                                        {{ videogame.description }}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {

    name: "simple-game-modal",

    data() {
        let remake = "";
        let vg = "";
        let videogame = {};
        return {
            remake,
            vg,
            videogame
        }
    },
    methods: {
        getGame() {
            axios.get("videogames/" + "6").then(response => {
                this.videogame = response.data[0];
            }).catch(error => {
                if (error.response && error.response.status === 404) {
                    console.log("Game not found.");
                }
            });
        },

        getRemake() {
            axios.get("videogames/" + "6" + "/remake").then(response => {
                this.remake = response.data[0];
                let vg_id = this.remake.remake ? this.remake.remake : this.remake.original;

                axios.get("videogames/" + vg_id).then(response => {
                    this.vg = response.data[0].name;
                }).catch(error => {
                    if (error.response && error.response.status === 404) {
                        console.log("No vg found");
                    }
                });
            }).catch(error => {
                if (error.response && error.response.status === 404) {
                    console.log("No remake found");
                }
            });
        },

    },


    // call gamestatus function

    mounted() {
        this.getGame();
        this.getRemake();
    }

}
</script>

<style scoped>
.star_bar:hover>i:before {
    color: gold;
}

.star_bar>i:hover~i:before {
    color: gray;
}
</style>