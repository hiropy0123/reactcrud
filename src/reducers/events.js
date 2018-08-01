import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    case CREATE_EVENT:
    case UPDATE_EVENT:
    case READ_EVENT:
      // console.log(action.response.data)
      const data = action.response.data
      return { ...events, [data.id]: data }

    case DELETE_EVENT:
      // console.log(action.id)
      delete events[action.id]
      return { ...events }

    default:
      return events
  }
}

