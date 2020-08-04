import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import imageStub from '../../assets/img/stub.jpg';

import './InfoWindow.scss';
import 'react-h5-audio-player/lib/styles.css';

interface InfoWindowProps {
  imageSrc?: string,
  name?: string,
  soundSrc?: string,
  description?: string,
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  imageSrc, name, soundSrc, description,
}) => {
  const hasName = name;
  return (
    <div className="info-window">
      {hasName && (
      <>
        <div className="info-window__image">
          <img
            src={imageSrc}
            alt="Round pic"
          />
        </div>
        <div className="wrapper">
          <p className="info-window__name">{name}</p>
          <AudioPlayer
            src={soundSrc}
          />
        </div>
      </>
      )}
      <div className="info-window__description">{description}</div>
    </div>
  );
};

export default InfoWindow;
