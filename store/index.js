export const state = () => ({
    submenuState: true,
    cardsInfo: [
      {
        title: 'Hard Skills',
        image: 'illustration_skills1.svg',
        imageAlt: 'web-developer',
        listItems: ['Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this'],
        skillItems: ['HTML', 'CSS', 'SASS', 'Javascript', 'Vue.js', 'React.js', 'PHP', 'SQL', 'Node.js', 'REST API']
      },
      {
        title: 'Soft skills',
        image: '/static/images/illustration_skills2.svg',
        imageAlt: 'web-designer',
        listItems: ['Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this', 'Just some dummy text here, you’re not supposed to read this'],
        skillItems: ['HTML', 'CSS', 'SASS', 'Javascript']
      }
    ]
  })
  
  export const mutations = {
    toggle (state) {
      state.submenuState = !state.submenuState
    }
  }
  