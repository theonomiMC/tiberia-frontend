export const loggedIn = (token) => ({
    type: "LOGIN_SUCCESS",
    payload: token,
})

export const logOut = () => ({
    type: "LOGOUT",
})

export const logInFailure = () => ({
    type: "LOGIN_FAILURE",
})