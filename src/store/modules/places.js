export default {
    state: {
        places: [
            {
                id: 0,
                name: "Охотников",
                info: "Истинная кухня Сибири",
                photo: "https://mykaleidoscope.ru/uploads/posts/2020-03/1583352524_25-p-frantsuzskie-deserti-visokoi-kukhni-57.jpg"
            },
            {
                id: 1,
                name: "Европа",
                info: "Ресторан высокой кухни",
                photo: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663757793_19-mykaleidoscope-ru-p-mishlenovskie-blyuda-yeda-pinterest-19.jpg"
            },
            {
                id: 2,
                name: "Стрижи",
                info: "Блюда для всех",
                photo: "https://sobraniespeshilov.com/wp-content/uploads/2019/02/1-1.jpg"
            }
        ]
    },
    getters: {
        allPlaces(state) {
            return state.places
        }
    },
    mutations: {
        createPlaces(state, newPlace) {
            state.places.unshift(newPlace);
        }
    },
    actions: {
    }
  }