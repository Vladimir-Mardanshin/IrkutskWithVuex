<template>
    <h1 style="font-family: Comic Sans MS;">Факты</h1>
    <v-container style="width: 1000px;">
        <v-list lines="two">
            <v-list-item v-for="fact in allFacts" :key="fact.id" :title="fact.name" :subtitle="fact.info"></v-list-item>
        </v-list>
    </v-container>
    <v-btn class="mx-auto" style="margin-bottom: 75px; width: 200px;" @click="overlay = !overlay">Добавить факт</v-btn>

    <v-overlay v-model="overlay" class="align-center justify-center">

        <div class="pumpum">
            <h2 style="margin-bottom: 10px;">Новый факт:</h2>
            <form @submit.prevent="submit">
                <input type="text" placeholder="Заголовок" v-model="title" style="text-align: center;">
                <input type="text" placeholder="Описание" v-model="body" style="margin-bottom: 15px; text-align: center;">
                <v-btn type="submit" style="margin-bottom: 12px;">Добавить</v-btn>
                <v-btn @click="overlay = false">Отмена</v-btn>
            </form>
        </div>


    </v-overlay>
</template>
   
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    computed: mapGetters(["allFacts"]),
    data: () => ({
        overlay: false,
        title: '',
        body: ''
    }),
    methods: {
        ...mapMutations(['createFact']),
        submit() {
            if ((this.title === "") || (this.body === "")) {
                alert('Заполните необходимые поля!');
            } else {
                this.createFact({
                    id: Date.now(),
                    name: this.title,
                    info: this.body
                });
                this.overlay = false
                this.title = "";
                this.body = "";
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
    height: 300px;
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
   