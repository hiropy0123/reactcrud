import {
  READ_EVENTS,
  DELETE_EVENT
} from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')

    case DELETE_EVENT:
      // console.log(action.id)
      delete events[action.id]
      return { ...events }

    default:
      return events
  }
}

