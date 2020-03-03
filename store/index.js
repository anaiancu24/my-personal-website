export const state = () => ({
    submenuState: true
  })
  
  export const mutations = {
    toggle (state) {
      state.submenuState = !state.submenuState
    }
  }
  