import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getPhotos = createAsyncThunk(
    'photos/getPhotos', //<==>///hai naam hum kuch bi de sakte hai
    async () =>{
        const response = await fetch('https://picsum.photos/v2/list');
        const responseJson = response.json()
        
        return responseJson;
    }
)




export const gallerySlice = createSlice ({ ///thunk me extra reducer karke likna hai kyunki hai asynchrouns function hai
    name: 'gallery', ///hai bi naam ham de sakte hai , yahi naam reducer store me keyword ke liye karte hai
    initialState: {
        photos:[],
        isLoading: false, //hai ek property hai kuch bi intial lse de sakte hai

    },

extraReducers: {   //==>asynThyunk ka sytax hai, iske andar pending, fulldilled, rejected phele se property hai,
                    //==>
    [getPhotos.pending] : (state) => {
        state.isLoading = true;
    },
    [getPhotos.fulfilled] : (state, action) => {
        state.photos = action.payload;  //sab ka values payload ke andar hai
        state.isLoading = false;
    },
    [getPhotos.rejected] : (state) => {
        state.isLoading =false;
    }
}


})

export default gallerySlice.reducer;