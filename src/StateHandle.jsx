import React,{useState} from 'react';
import Img from './baby.jpg'
import Img1 from './Food.jpg'
const StateHandle = () => {
  const[image,setImage]=useState(Img);
  function food()
  {
  setImage(Img1);
  }
  function baby()
  {
    setImage(Img);
  }
  return (
    <div>
      <img src={image} alt="" onMouseEnter={baby} onMouseLeave={food}/>
    </div>
  )
}

export default StateHandle;