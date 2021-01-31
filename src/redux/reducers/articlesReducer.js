const initState = {
    categories: ['EVERYTHING', 'DIET', 'KNOWLEDGE', 'WORKOUT'],
    articles: [
    {
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    },
    {
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    },
    {
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    },
    {
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    },
  ]
}

const articlesReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: [...state.articles, action.article]
            }
        default:
            return state
    }
}

export default articlesReducer;