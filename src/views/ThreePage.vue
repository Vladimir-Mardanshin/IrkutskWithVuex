<template>
    <h1 style="font-family: Comic Sans MS;">Еда</h1>
    <v-container>
        <v-row class="list__cafes-content">
            <MapPlace v-for="place in allPlaces" :key="place.id" :place="place"></MapPlace>
        </v-row>
    </v-container>

    <v-btn class="mx-auto" style="margin-bottom: 75px; width: 200px;" @click="overlay = !overlay">Добавить место</v-btn>

    <v-overlay v-model="overlay" class="align-center justify-center">

        <div class="pumpum">
            <h2 style="margin-bottom: 10px;">Новое заведение:</h2>
            <form @submit.prevent="submit">
                <input type="text" placeholder="Название" v-model="title" style="text-align: center;">
                <input type="text" placeholder="Описание" v-model="body" style="text-align: center;">
                <input type="text" placeholder="Ссылка на фото" v-model="url" style="margin-bottom: 15px; text-align: center;">
                <v-btn type="submit" style="margin-bottom: 12px;">Добавить</v-btn>
                <v-btn @click="overlay = false">Отмена</v-btn>
            </form>
        </div>


    </v-overlay>
</template>
   
<script>
import MapPlace from '../components/MapPlace.vue';
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        MapPlace
    },
    computed: mapGetters(["allPlaces"]),
    data() {
        return {
            overlay: false,
            title: '',
            body: '',
            url: ''
        }
    },
    methods: {
        ...mapMutations(['createPlaces']),
        submit() {
            if ((this.title === "") || (this.body === "") || (this.url === "")) {
                alert('Заполните необходимые поля!');
            } else {
                this.createPlaces({
                    id: Date.now(),
                    name: this.title,
                    info: this.body,
                    photo: this.url
                });
                this.overlay = false;
                this.title = "";
                this.body = "";
                this.url = "";
            }
        }
    }
}
</script>
   
<style>

input {
    display: block;
    width: 300px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-bottom: 10px;
}

.pumpum {
    background-color: white;
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
   