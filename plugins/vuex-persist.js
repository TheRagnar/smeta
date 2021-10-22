import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    modules: ["auth"],
  }).plugin(store);
}
