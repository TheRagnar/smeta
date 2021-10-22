export const state = () => ({
  isOpen: false,
  data: {
    name: "",
    unit: "",
    rate: "",
    quantity: "",
    is_brigade: false,
  },
})

export const mutations = {
  open(state, data) {
    state.isOpen = true;
    state.data = data;
  },
  close(state) {
    state.isOpen = false;
    this.data = {
      source_work_type: null,
      name: "",
      unit: "",
      rate: "",
      quantity: "",
      is_brigade: false,
    }
  }
}
