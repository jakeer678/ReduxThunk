import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from './gallerSlice';
import './App.css'


const App = () => {

const dispatch = useDispatch();
const photos = useSelector(state=>state.gallery.photos) ///gallery reducer keyword se lena hai, and photos, intialstate me emty array lena hai

///photos batane gen liye reducers lete hai vahi gellery and initial state se




useEffect(()=>{
  dispatch(getPhotos()) /// dipatch ke andar asynch thunk ko likna hai, gallery slice se lena hai
}, [dispatch])

console.log(photos)

  return (
    <div>
   <h1>PHOTO GALLERY</h1>
   <p>photos galeery of jakeer</p>
   <hr />
   <div className='photosIm'>
    
{
  photos.map((photo,index) => 
    <img className='imageGalley'
     src={photo.download_url} alt="iamges"
    />
  )
}
    
   </div>
    </div>
  )
}

export default App
