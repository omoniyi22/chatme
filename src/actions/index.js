import * as types from './../constants/ActionTypes'
let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
    type:  types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = (name) =>{
    console.log(name)
    return({
    type: types.ADD_USER,
    id: nextUserId++, 
    name
}
)}

export const messageRecieved = (message, author)=>({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUserList = users=>({
    type: types.USERS_LIST,
    users
})