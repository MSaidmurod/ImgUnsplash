import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likePhotos : [],
    user: null
}



const unsplashSlice = createSlice({
    name: "unspalsh",
    initialState,
    reducers: {
        addLikePhotos:(state, {payload}) => {
            const isImageAllreadyAdd = state.likePhotos.every((img) => {
                return img.id !== payload.id
            })

            if(isImageAllreadyAdd) {
                state.likePhotos = [...state.likePhotos, payload]
            }
        },
        addUser:(state, {payload}) => {
            state.user = payload
        },
        removeUser: (state) => {
            state.user = null
        }
    } 
})


export const {addLikePhotos, addUser, removeUser} = unsplashSlice.actions
export default unsplashSlice.reducer