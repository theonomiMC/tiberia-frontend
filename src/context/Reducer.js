export const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                auth: action.payload,
            }
        case "LOGOUT":
            return { 
                auth:null,
             }
        case "LOGIN_FAILURE":
            return { 
                auth:null,
             }
        default:
            return state
    }
}