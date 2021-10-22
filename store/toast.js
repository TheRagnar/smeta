export const state = () => ({
  isOpen: false,
  text: "",
})

export const mutations = {
  showSnackbar(state, text) {
    state.text = text;
    state.isOpen = true;

  },
  hideSnackbar(state) {
    state.text = "";
    state.isOpen = false;
  }
}

export const actions = {
  showSnackbar({commit}, payload) {
    commit('showSnackbar', payload);
    setTimeout(() => {
      commit('hideSnackbar')
    }, 4000);
  },
  hideSnackbar({commit}) {
    commit('hideSnackbar')
  }
}
