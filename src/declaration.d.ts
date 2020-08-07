declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.wav' {
  const value: string;
  export = value;
}

declare interface RoundAnswerInfo {
  id: number | string,
  name: string,
  species: string,
  imageSrc: string,
  soundSrc: string,
  description: string,
}
