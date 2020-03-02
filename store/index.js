export const state = () => ({
  submenuState: false
})

export const mutations = {
  toggle (state) {
    state.submenuState = !state.submenuState
  }
}