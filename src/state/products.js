export default function products(state = [], action) {
  switch (action.type) {
    case 'PRODUCTS':
      return [
        ...state,
        {
          text: action.params,
          completion: false
        }
      ]

    default:
      return state
  }
}

