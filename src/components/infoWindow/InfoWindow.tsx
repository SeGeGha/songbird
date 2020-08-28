import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './InfoWindow.scss';
import 'react-h5-audio-player/lib/styles.css';

interface InfoWindowProps {
  imageSrc?: string,
  name?: string,
  species?: string,
  soundSrc?: string,
  description?: string,
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  imageSrc, name, species, soundSrc, description,
}) => {
  const isUpdate = name && imageSrc && soundSrc;

  return (
    <div className="info-window container">
      {isUpdate && (
      <>
        <div className="info-window__image">
          <img
            src={imageSrc}
            alt="Round pic"
          />
        </div>
        <div className="wrapper">
          <p className="info-window__name">{name}</p>
          <p className="info-window__species">{species}</p>
          <AudioPlayer
            src={soundSrc}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </>
      )}
      <div className="info-window__description">{description}</div>
    </div>
  );
};

export default InfoWindow;
