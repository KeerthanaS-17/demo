import React from 'react';
import './Body.css'
import keerthana from './insta image.jpg';
const Body = () => {
  return (
    <div>
      <div className="insta">
      <center><img src={keerthana} alt=""></img></center>
      </div>
      <p>
      Instagram is a photo and video sharing social networking service owned by <b><i>Meta Platforms</i></b>. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via <b><i> geographical tagging</i></b>. Posts can be shared publicly or with preapproved followers. Users can browse other users' content by tags and locations, view trending content, like photos, and follow other users to add their content to a personal feed.A Meta-operated image-centric social media platform, it is available on <b><i>iOS, Android, Windows 10, and the web</i></b>. Users can take photos and edit them using built-in filters and other tools, then share them on other social media platforms like Facebook. It supports 32 languages including English, Hindi, Spanish, French, Korean, and Japanese.</p> 
      </div>
  )
}
export default Body;
