import React from 'react';
import "./Spotify.scss";
import Macwindows from './Macwindows';

const Spotify = () => {
  return (
    <Macwindows width="30vw">
        <div className="Spofity-Playlist">
            <h2> Here Is Best Indian Songs for you(Preview Only)!!</h2>

            <iframe data-testid="embed-iframe" 
            style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
            picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindows>
  )
}

export default Spotify;
