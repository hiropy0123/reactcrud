import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }
const RATE = 1

export default ( state = initialState, action ) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + RATE }
    case DECREMENT:
      return { value: state.value - RATE }
    default:
      return state
  }
}
