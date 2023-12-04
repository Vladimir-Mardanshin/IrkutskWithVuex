import { createStore } from 'vuex'
import fact from './modules/fact'
import places from './modules/places'
import placeIrk from './modules/placeIrk'

export default createStore({
  modules: {
    fact,
    places,
    placeIrk
  }
})
