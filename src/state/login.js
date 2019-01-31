export default function login(state = [], action) {
  switch (action.type) {
    case 'LOGIN':
        return [
            {
                user: action.payload,
            }
        ]
        return state
    default:
      return state
  }
}

