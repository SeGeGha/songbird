import soundStorage from '../constant/soundStorage';

type AudioObj = {
  [key: string]: HTMLAudioElement,
};

interface SoundSender {
  storage: AudioObj,
  currentSound: HTMLAudioElement,
  getDefaultSound(name: string): void,
}

const soundSender: SoundSender = {
  storage: {},
  currentSound: new Audio(),
  getDefaultSound(name): void {
    const sender = this as SoundSender;

    sender.currentSound.pause();
    sender.currentSound.currentTime = 0.0;
    sender.currentSound = sender.storage[name];

    sender.currentSound
      .play()
      .catch(() => {
        throw Error('Error in audioplayer');
      });
  },
};

soundSender.storage = Object.entries(soundStorage).reduce((acc, soundInfo: Array<string>) => {
  const [category, soundSrc] = soundInfo;
  const audio = new Audio();
  audio.src = soundSrc;

  acc[category] = audio;

  return acc;
}, {});

export default soundSender;
