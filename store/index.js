export const state = () => ({
    submenuState: true,
    cardsInfo: [
      {
        title: 'Hard Skills',
        image: 'images/illustration_skills1.svg',
        imageAlt: 'web-developer',
        listItems: ['Able to build a website from the ground up using modern frameworks', 'Proficiency in creating websites using Wordpress and Wix', 'An eye for design with focus on animation and interaction.', 'Knowledge working in Salesforce Community Builder and Customization and Hubspot'],
        skillItems: ['HTML', 'CSS', 'SASS', 'Javascript', 'Vue.js', 'React.js', 'PHP', 'SQL', 'Node.js', 'REST API', 'GIT']
      },
      {
        title: 'Soft skills',
        image: 'images/illustration_skills2.svg',
        imageAlt: 'web-designer',
        listItems: ['Always willing to share my knowledge with other people interested in learning new skills', 'Organised and punctual, I hate being late and I love making lists', 'Appreciate good sarcasm, I am pretty funny myself', 'Fast learner and self motivated', 'Adapt to new situations easily'],
        skillItems: ['Kind', 'Self-motivated', 'Punctual', 'Organised', 'Straight-forward', 'Helpful', 'Fast learner']
      }
    ]
})
  
  export const mutations = {
    toggle (state) {
      state.submenuState = !state.submenuState
    }
  }
  