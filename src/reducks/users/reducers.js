import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN :
      return {
        ...state,
        // icon: "",
        // isSiginedIn: false,
        // uid: "",
        // username: "",
       ...action.payload
        // isSignedIn: action.payload.isSiginedIn,
        // uid: action.payload.uid,
        // username: action.payload.username
      }
    case Actions.SIGN_OUT :
      return {
       ...action.payload
      }
    default :
      return state
  }
}