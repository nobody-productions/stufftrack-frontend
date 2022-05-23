<template>
    <!-- La barra superiore -->
    <div class="container-fluid">
        <div class="row">
            <navLandingVue></navLandingVue>
        </div>

        <div class="container">

        </div>
    </div>
    <!-- La barra superiore -->

    <!--Main layout-->
    <main class="mt-5">
        <div class="container">
            <!--Parte 1 -->
            <div id="intro">
                <div class="position-relative border-5 overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                    <div class="">
                        <div class="row align-items-center">
                            <div class="col md-6">
                                <div class="row-2">
                                    <h1 class="display-2">Molti <div class="invert">
                                            <div class="message">interessi</div>
                                        </div>.</h1>
                                </div>
                                <div class="row">
                                    <h1 class="display-2">Troppe <div class="invert">app</div>.</h1>
                                </div>
                                <div class="row">
                                    <h1 class="display-2">
                                        <div class="invert">Un solo</div> posto.
                                    </h1>
                                </div>
                            </div>
                            <div class="col-md-6">
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
                </div>
            </div>
            <!--Parte 1 -->
            <hr class="my-5" />
            <!--Perché scegliere stufftrack -->
            <section>
                <div class="row">
                    <div class="col-md-6 gx-5 mb-4">
                        <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            data-mdb-ripple-color="light">
                            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471"
                                class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-6 gx-5 mb-4">
                        <h4><strong>Perché scegliere StuffTrack?</strong></h4>
                        <p class="text-muted">
                            StuffTrack è il servizio che ti consente di tracciare i tuoi interessi utilizzando un'unica
                            app.
                            Dai sfogo alle tue passioni: libri, videogiochi, film, fumetti, giochi di tavolo...(*) tutti
                            i tuoi interessi sono tracciati in modo semplice e veloce in un unico posto.
                        </p>
                        <p class="text-muted">Dimentica le altre app: basterà fare il login qui per avere sempre con te
                            la tua libreria!</p>

                        <p class="text-muted">
                            Ecco cosa ti offriamo:
                        <ul>
                            <li><strong>Tracciamento dei tuoi interessi</strong><span class="text-muted">: per avere tra
                                    le mani, ovunque sei, ciò che ami.</span></li>
                            <li><strong>Calcolo delle statistiche</strong><span class="text-muted"> a tutti piacciono le
                                    statistiche. Sarai in grado di visualizzare il tempo totale speso in videogiochi o
                                    quanti libri hai portato a termine. Forte no?</span></li>
                            <li><strong>Possibilità di aggiungere i tuoi titoli</strong><span class="text-muted">: non
                                    trovi ciò che cerchi? Potrai aggiungere tutti i film che sono appena usciti al
                                    cinema o il libro del tuo scrittore preferito. (**)</span></li>
                            <li><strong>Piattaforma social</strong><span class="text-muted">: rimani aggiornato su ciò
                                    che stanno facendo i tuoi amici! Che abbiano appena comprato un nuovo gioco da
                                    tavolo, o visto l'ultimo film di Sonic, sarai sempre in grado di sapere cosa stanno
                                    combinando in quest'ultimo periodo! (**)</span></li>
                        </ul>
                        </p>
                        <p class="text-muted"><small>(*) alcune integrazioni sono in lavorazione, e saranno presto
                                disponibili</small></p>
                        <p class="text-muted"><small>(**) sviluppi futuri</small></p>
                    </div>
                </div>
            </section>
            <!--Perché scegliere stufftrack -->

            <!--sezione: il team-->

            <hr class="my-5" />


            <!--sezione: il team-->
            <section class="text-center">
                <h4 class="mb-5"><strong>Il team</strong></h4>
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-4 col-md-12 mb-4">
                        <div class="card">

                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="/profilepictures/default.png"
                                    class="rounded-circle border text-center mx-auto d-block" alt="profile png"
                                    style="width: 30%; height: 30%">

                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Damiano Gualandri</h5>
                                <p class="card-text">
                                    Molto, molto italiano.
                                    Quando non bighellono, tra un coffee break e un altro, scrivo dell'ottimo codice
                                    servito con birra e spaghetti.
                                    Mi piacciono i videogiochi ma odio Toad di Mario Kart. Firma anche tu la petizione
                                    per eliminarlo dal gioco: <a href=https://change.org/eliminiamo-toad-da-mario-kart/
                                        target="_blank">change.org</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="/profilepictures/default.png"
                                    class="rounded-circle border text-center mx-auto d-block" alt="profile png"
                                    style="width: 30%; height: 30%">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Lorenzo Antonelli</h5>
                                <p class="card-text">
                                    Mi piace testare i giochi su diversi dispositivi Android, i Mediatek non mi piacciono!
                                    Sono un fotografo (non di professione). Tra una foto e l'altra cerco di creare interfacce semplice e pulite per ciò che mi piace.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <!-- sezione: contatti -->

            <hr class="my-5" />

            <!-- sezione: contatti-->
            <section class="mb-5">
                <h4 class="mb-5 text-center"><strong>Contattaci</strong></h4>

                <div class="row d-flex justify-content-center">
                    <div class="col-md-6">
                        <form>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="nomeFormContatto" class="form-control" />
                                        <label class="form-label" for="nomeFormContatto" minlength="2" maxlength="50">Nome</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="cognomeFormContatto" class="form-control" />
                                        <label class="form-label" for="cognomeFormContatto" minlength="2" maxlength="50">Cognome</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="emailFormContatto" class="form-control" />
                                <label class="form-label" for="emailFormContatto">Email</label>
                            </div>

                            <div class="form-outline mb-4">
                                <textarea class="form-control" id="messaggioFormContatto" rows="10" maxlength="3000"></textarea>
                                <label class="form-label" for="messaggioFormContatto">Messaggio (3000 caratteri)</label>
                            </div>

                            <button @click="inviaMessaggio()" type="button" class="btn btn-dark">
                                Invia
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <!--Section: Content-->
        </div>
    </main>
    <!--Main layout-->

    <footerVue></footerVue>
</template>

<script>
import navLandingVue from "../components/nav-landing.vue";
import footerVue from "../components/footer-bar.vue";
import axios from "axios";
import router from "@/router";
export default {
    name: "homepage-page",
    components: {
        navLandingVue,
        footerVue,
    },
    mounted() {
        // se sono già loggato mi riporta alla dashboard

    },
    data() {
        let nome = "";
        let cognome = "";
        let email = "";
        let messaggio = "";

        return {
            nome,
            cognome,
            email,
            messaggio,
        };
    },
    methods: {
        inviaMessaggio() {
            axios.post("/send-email", {
                name:  document.getElementById("nomeFormContatto").value,
                surname: document.getElementById("cognomeFormContatto").value,
                email: document.getElementById("emailFormContatto").value,
                message: document.getElementById("messaggioFormContatto").value,
            }).then(() => {
                document.getElementById("nomeFormContatto").value = "";
                document.getElementById("cognomeFormContatto").value = "";
                document.getElementById("emailFormContatto").value = "";
                document.getElementById("messaggioFormContatto").value = "";
                
                alert("Messaggio inviato con successo!");
            }).catch(() => {
                alert("Errore nell'invio del messaggio");
            });
        }
    }
};
</script>

<style scoped>
/* prima parte della pagina */
#intro {
    animation-duration: 2s;
    animation-name: fadein;
}

/* Card del team */
.card {
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  min-height: 100%;

}

.card>* {
    padding-top: 20px;
}

.container-fluid {
    background-color: #f8fcfe;
}

.invert {
    display: inline-block;
    flex-wrap: wrap;
    background-color: white;
    filter: invert(100%);
}

.border-5 {
    border: 5px solid black;
    border-width: 5px !important;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>