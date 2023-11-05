import {configureStore} from '@reduxjs/toolkit'
import unsplashReduser from '../feature/unsplashSlice'

export const store = configureStore({
    reducer:{
        unsplash: unsplashReduser,
    }
})