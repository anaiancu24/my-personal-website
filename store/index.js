export const state = () => ({
    submenuState: true,
    cardsInfo: [
      {
        title: 'Title 1',
        image: '/',
        imageAlt: 'image1',
        listItems: ['1','2','3','4'],
        skillItems: ['1','2','3','4','5','6','7','8']
      },
      {
        title: 'Title 2',
        image: '/',
        imageAlt: 'image2',
        listItems: ['5','6','7','8'],
        skillItems: ['9','10','11','12','13','14','15','16']
      }
    ]
  })
  
  export const mutations = {
    toggle (state) {
      state.submenuState = !state.submenuState
    }
  }
  